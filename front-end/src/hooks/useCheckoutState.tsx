import { createContext, useReducer, useEffect, useContext } from "react";
import { ShippingAddress, Voucher, ShippingMethod } from "@/types"; // Pastikan path tipe data benar

// --- 1. Definisikan State dan Aksi ---
interface CheckoutState {
  shippingAddress: ShippingAddress;
  selectedShipping: ShippingMethod | null;
  selectedPaymentId: string;
  selectedBankId: string;
  selectedVoucher: Voucher | null;
}

type Action =
  | {
      type: "UPDATE_ADDRESS_FIELD";
      payload: { field: keyof ShippingAddress; value: string };
    }
  | { type: "SET_SHIPPING"; payload: ShippingMethod | null }
  | { type: "SET_PAYMENT"; payload: string }
  | { type: "SET_BANK"; payload: string }
  | { type: "SET_VOUCHER"; payload: Voucher | null }
  | { type: "INITIALIZE_STATE"; payload: Partial<CheckoutState> };

// --- 2. Reducer untuk Mengelola Perubahan State ---
const checkoutReducer = (
  state: CheckoutState,
  action: Action
): CheckoutState => {
  switch (action.type) {
    case "UPDATE_ADDRESS_FIELD":
      const { field, value } = action.payload;
      return {
        ...state,
        shippingAddress: { ...state.shippingAddress, [field]: value },
      };
    case "SET_SHIPPING":
      return { ...state, selectedShipping: action.payload };
    case "SET_PAYMENT":
      return { ...state, selectedPaymentId: action.payload };
    case "SET_BANK":
      return { ...state, selectedBankId: action.payload };
    case "SET_VOUCHER":
      return { ...state, selectedVoucher: action.payload };
    case "INITIALIZE_STATE":
      return { ...state, ...action.payload };
    default:
      // Menggunakan assertion untuk memastikan semua case ditangani
      const exhaustiveCheck: never = action;
      return state;
  }
};

const CHECKOUT_STORAGE_KEY = "rossi-cake-checkout-details";

// --- 3. Context & Provider ---
const CheckoutContext = createContext<
  { state: CheckoutState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: CheckoutState = {
    shippingAddress: {
      recipient: "",
      phone: "",
      street: "",
      city: "",
      province: "",
      postal_code: "",
    },
    selectedShipping: null,
    selectedPaymentId: "bank_transfer",
    selectedBankId: "bca",
    selectedVoucher: null,
  };

  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  useEffect(() => {
    try {
      const savedState = localStorage.getItem(CHECKOUT_STORAGE_KEY);
      if (savedState)
        dispatch({ type: "INITIALIZE_STATE", payload: JSON.parse(savedState) });
    } catch (error) {
      console.error("Gagal memuat state checkout", error);
    }
  }, []);

  useEffect(() => {
    // Hanya simpan jika state bukan initial state, untuk menghindari penimpaan saat render pertama
    if (state !== initialState) {
      localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

// --- 4. Hook untuk Mengakses Context ---
export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context)
    throw new Error("useCheckout harus digunakan di dalam CheckoutProvider");
  return context;
};
