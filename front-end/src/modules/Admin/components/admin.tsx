import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { LayoutAdmin } from "./layout";
import DashboardOverviewPage from "./dashboard";
import DiscountVoucherManagement from "./vocherManagement";
import MaterialManagement from "./materialsManagement";
import UserManagement from "./usersManagement";
import ProductsPage from "./productsManagement";
import FinanceManagementPage from "./financeManagements";
import AdminSettingsPage from "./settings";
import ShippingMethodManagement from "./shippingManagement";

export const Admin = () => {
  return (
    <>
      <LayoutAdmin>
        <div className="flex flex-1 ">
          <ScrollArea className="flex h-full w-full overflow-y-auto flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="flex gap-2">
              <TabsContent value="dashboard" className="w-full flex ">
                <DashboardOverviewPage />
              </TabsContent>
              <TabsContent value="products" className="w-full flex ">
                <ProductsPage />
              </TabsContent>
              <TabsContent value="stock" className="w-full flex ">
                <MaterialManagement />
              </TabsContent>
              <TabsContent value="finanace" className="w-full flex ">
                <FinanceManagementPage />
              </TabsContent>
              <TabsContent value="promo" className="w-full flex ">
                <DiscountVoucherManagement />
              </TabsContent>
              <TabsContent value="users" className="w-full flex ">
                <UserManagement />
              </TabsContent>
              <TabsContent value="settings" className="w-full flex  ">
                <AdminSettingsPage />
              </TabsContent>
              <TabsContent value="shipping" className="w-full flex  ">
                <ShippingMethodManagement />
              </TabsContent>
            </div>
          </ScrollArea>
        </div>
      </LayoutAdmin>
    </>
  );
};
