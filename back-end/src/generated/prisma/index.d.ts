
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model raw_materials
 * 
 */
export type raw_materials = $Result.DefaultSelection<Prisma.$raw_materialsPayload>
/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>
/**
 * Model vouchers
 * 
 */
export type vouchers = $Result.DefaultSelection<Prisma.$vouchersPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model feedbacks
 * 
 */
export type feedbacks = $Result.DefaultSelection<Prisma.$feedbacksPayload>
/**
 * Model expenses
 * 
 */
export type expenses = $Result.DefaultSelection<Prisma.$expensesPayload>
/**
 * Model custom_orders
 * 
 */
export type custom_orders = $Result.DefaultSelection<Prisma.$custom_ordersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const VoucherType: {
  PERCENTAGE: 'PERCENTAGE',
  FIXED: 'FIXED'
};

export type VoucherType = (typeof VoucherType)[keyof typeof VoucherType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type VoucherType = $Enums.VoucherType

export const VoucherType: typeof $Enums.VoucherType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raw_materials`: Exposes CRUD operations for the **raw_materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_materials
    * const raw_materials = await prisma.raw_materials.findMany()
    * ```
    */
  get raw_materials(): Prisma.raw_materialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vouchers`: Exposes CRUD operations for the **vouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.vouchers.findMany()
    * ```
    */
  get vouchers(): Prisma.vouchersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbacks`: Exposes CRUD operations for the **feedbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedbacks.findMany()
    * ```
    */
  get feedbacks(): Prisma.feedbacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.expensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custom_orders`: Exposes CRUD operations for the **custom_orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Custom_orders
    * const custom_orders = await prisma.custom_orders.findMany()
    * ```
    */
  get custom_orders(): Prisma.custom_ordersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    products: 'products',
    orders: 'orders',
    order_items: 'order_items',
    raw_materials: 'raw_materials',
    addresses: 'addresses',
    vouchers: 'vouchers',
    payments: 'payments',
    invoices: 'invoices',
    feedbacks: 'feedbacks',
    expenses: 'expenses',
    custom_orders: 'custom_orders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "products" | "orders" | "order_items" | "raw_materials" | "addresses" | "vouchers" | "payments" | "invoices" | "feedbacks" | "expenses" | "custom_orders"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      raw_materials: {
        payload: Prisma.$raw_materialsPayload<ExtArgs>
        fields: Prisma.raw_materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          findFirst: {
            args: Prisma.raw_materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          findMany: {
            args: Prisma.raw_materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>[]
          }
          create: {
            args: Prisma.raw_materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          createMany: {
            args: Prisma.raw_materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.raw_materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          update: {
            args: Prisma.raw_materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          deleteMany: {
            args: Prisma.raw_materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.raw_materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          aggregate: {
            args: Prisma.Raw_materialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_materials>
          }
          groupBy: {
            args: Prisma.raw_materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_materialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_materialsCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_materialsCountAggregateOutputType> | number
          }
        }
      }
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      vouchers: {
        payload: Prisma.$vouchersPayload<ExtArgs>
        fields: Prisma.vouchersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vouchersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vouchersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          findFirst: {
            args: Prisma.vouchersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vouchersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          findMany: {
            args: Prisma.vouchersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          create: {
            args: Prisma.vouchersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          createMany: {
            args: Prisma.vouchersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vouchersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          update: {
            args: Prisma.vouchersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          deleteMany: {
            args: Prisma.vouchersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vouchersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vouchersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          aggregate: {
            args: Prisma.VouchersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVouchers>
          }
          groupBy: {
            args: Prisma.vouchersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VouchersGroupByOutputType>[]
          }
          count: {
            args: Prisma.vouchersCountArgs<ExtArgs>
            result: $Utils.Optional<VouchersCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      feedbacks: {
        payload: Prisma.$feedbacksPayload<ExtArgs>
        fields: Prisma.feedbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          findFirst: {
            args: Prisma.feedbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          findMany: {
            args: Prisma.feedbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>[]
          }
          create: {
            args: Prisma.feedbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          createMany: {
            args: Prisma.feedbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.feedbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          update: {
            args: Prisma.feedbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          deleteMany: {
            args: Prisma.feedbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.feedbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          aggregate: {
            args: Prisma.FeedbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbacks>
          }
          groupBy: {
            args: Prisma.feedbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbacksCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksCountAggregateOutputType> | number
          }
        }
      }
      expenses: {
        payload: Prisma.$expensesPayload<ExtArgs>
        fields: Prisma.expensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findFirst: {
            args: Prisma.expensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findMany: {
            args: Prisma.expensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          create: {
            args: Prisma.expensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          createMany: {
            args: Prisma.expensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.expensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          update: {
            args: Prisma.expensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          deleteMany: {
            args: Prisma.expensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.expensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.expensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.expensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      custom_orders: {
        payload: Prisma.$custom_ordersPayload<ExtArgs>
        fields: Prisma.custom_ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.custom_ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.custom_ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>
          }
          findFirst: {
            args: Prisma.custom_ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.custom_ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>
          }
          findMany: {
            args: Prisma.custom_ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>[]
          }
          create: {
            args: Prisma.custom_ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>
          }
          createMany: {
            args: Prisma.custom_ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.custom_ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>
          }
          update: {
            args: Prisma.custom_ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>
          }
          deleteMany: {
            args: Prisma.custom_ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.custom_ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.custom_ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_ordersPayload>
          }
          aggregate: {
            args: Prisma.Custom_ordersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustom_orders>
          }
          groupBy: {
            args: Prisma.custom_ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Custom_ordersGroupByOutputType>[]
          }
          count: {
            args: Prisma.custom_ordersCountArgs<ExtArgs>
            result: $Utils.Optional<Custom_ordersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    products?: productsOmit
    orders?: ordersOmit
    order_items?: order_itemsOmit
    raw_materials?: raw_materialsOmit
    addresses?: addressesOmit
    vouchers?: vouchersOmit
    payments?: paymentsOmit
    invoices?: invoicesOmit
    feedbacks?: feedbacksOmit
    expenses?: expensesOmit
    custom_orders?: custom_ordersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    addresses: number
    orders: number
    feedbacks: number
    expenses: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UsersCountOutputTypeCountAddressesArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    feedbacks?: boolean | UsersCountOutputTypeCountFeedbacksArgs
    expenses?: boolean | UsersCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
    feedbacks: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
    feedbacks?: boolean | OrdersCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
  }


  /**
   * Count Type VouchersCountOutputType
   */

  export type VouchersCountOutputType = {
    orders: number
  }

  export type VouchersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | VouchersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VouchersCountOutputType
     */
    select?: VouchersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | users$addressesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    feedbacks?: boolean | users$feedbacksArgs<ExtArgs>
    expenses?: boolean | users$expensesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | users$addressesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    feedbacks?: boolean | users$feedbacksArgs<ExtArgs>
    expenses?: boolean | users$expensesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      feedbacks: Prisma.$feedbacksPayload<ExtArgs>[]
      expenses: Prisma.$expensesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends users$addressesArgs<ExtArgs> = {}>(args?: Subset<T, users$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends users$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, users$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends users$expensesArgs<ExtArgs> = {}>(args?: Subset<T, users$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.addresses
   */
  export type users$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    cursor?: addressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.feedbacks
   */
  export type users$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    cursor?: feedbacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * users.expenses
   */
  export type users$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    category: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    category: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    stock: number
    category: number
    image_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    category?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    category?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    category?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: Decimal
    stock: number
    category: string | null
    image_url: string | null
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    category?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    category?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "stock" | "category" | "image_url" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      stock: number
      category: string | null
      image_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly stock: FieldRef<"products", 'Int'>
    readonly category: FieldRef<"products", 'String'>
    readonly image_url: FieldRef<"products", 'String'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    sub_total: Decimal | null
    shipping_cost: Decimal | null
    discount_amount: Decimal | null
    total_price: Decimal | null
    voucher_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    sub_total: Decimal | null
    shipping_cost: Decimal | null
    discount_amount: Decimal | null
    total_price: Decimal | null
    voucher_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    status: $Enums.OrderStatus | null
    order_date: Date | null
    sub_total: Decimal | null
    shipping_cost: Decimal | null
    discount_amount: Decimal | null
    total_price: Decimal | null
    shipping_method: string | null
    tracking_number: string | null
    voucher_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    status: $Enums.OrderStatus | null
    order_date: Date | null
    sub_total: Decimal | null
    shipping_cost: Decimal | null
    discount_amount: Decimal | null
    total_price: Decimal | null
    shipping_method: string | null
    tracking_number: string | null
    voucher_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    customer_id: number
    status: number
    order_date: number
    sub_total: number
    shipping_cost: number
    discount_amount: number
    total_price: number
    shipping_address: number
    shipping_method: number
    tracking_number: number
    voucher_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    customer_id?: true
    sub_total?: true
    shipping_cost?: true
    discount_amount?: true
    total_price?: true
    voucher_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    customer_id?: true
    sub_total?: true
    shipping_cost?: true
    discount_amount?: true
    total_price?: true
    voucher_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    customer_id?: true
    status?: true
    order_date?: true
    sub_total?: true
    shipping_cost?: true
    discount_amount?: true
    total_price?: true
    shipping_method?: true
    tracking_number?: true
    voucher_id?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    customer_id?: true
    status?: true
    order_date?: true
    sub_total?: true
    shipping_cost?: true
    discount_amount?: true
    total_price?: true
    shipping_method?: true
    tracking_number?: true
    voucher_id?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    customer_id?: true
    status?: true
    order_date?: true
    sub_total?: true
    shipping_cost?: true
    discount_amount?: true
    total_price?: true
    shipping_address?: true
    shipping_method?: true
    tracking_number?: true
    voucher_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    customer_id: number
    status: $Enums.OrderStatus
    order_date: Date
    sub_total: Decimal
    shipping_cost: Decimal
    discount_amount: Decimal
    total_price: Decimal
    shipping_address: JsonValue
    shipping_method: string
    tracking_number: string | null
    voucher_id: number | null
    created_at: Date
    updated_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    status?: boolean
    order_date?: boolean
    sub_total?: boolean
    shipping_cost?: boolean
    discount_amount?: boolean
    total_price?: boolean
    shipping_address?: boolean
    shipping_method?: boolean
    tracking_number?: boolean
    voucher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer?: boolean | usersDefaultArgs<ExtArgs>
    voucher?: boolean | orders$voucherArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    payment?: boolean | orders$paymentArgs<ExtArgs>
    feedbacks?: boolean | orders$feedbacksArgs<ExtArgs>
    custom_order?: boolean | orders$custom_orderArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    customer_id?: boolean
    status?: boolean
    order_date?: boolean
    sub_total?: boolean
    shipping_cost?: boolean
    discount_amount?: boolean
    total_price?: boolean
    shipping_address?: boolean
    shipping_method?: boolean
    tracking_number?: boolean
    voucher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "status" | "order_date" | "sub_total" | "shipping_cost" | "discount_amount" | "total_price" | "shipping_address" | "shipping_method" | "tracking_number" | "voucher_id" | "created_at" | "updated_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | usersDefaultArgs<ExtArgs>
    voucher?: boolean | orders$voucherArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    payment?: boolean | orders$paymentArgs<ExtArgs>
    feedbacks?: boolean | orders$feedbacksArgs<ExtArgs>
    custom_order?: boolean | orders$custom_orderArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      customer: Prisma.$usersPayload<ExtArgs>
      voucher: Prisma.$vouchersPayload<ExtArgs> | null
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      payment: Prisma.$paymentsPayload<ExtArgs> | null
      feedbacks: Prisma.$feedbacksPayload<ExtArgs>[]
      custom_order: Prisma.$custom_ordersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      status: $Enums.OrderStatus
      order_date: Date
      sub_total: Prisma.Decimal
      shipping_cost: Prisma.Decimal
      discount_amount: Prisma.Decimal
      total_price: Prisma.Decimal
      shipping_address: Prisma.JsonValue
      shipping_method: string
      tracking_number: string | null
      voucher_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends orders$voucherArgs<ExtArgs> = {}>(args?: Subset<T, orders$voucherArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends orders$paymentArgs<ExtArgs> = {}>(args?: Subset<T, orders$paymentArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feedbacks<T extends orders$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, orders$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    custom_order<T extends orders$custom_orderArgs<ExtArgs> = {}>(args?: Subset<T, orders$custom_orderArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly customer_id: FieldRef<"orders", 'Int'>
    readonly status: FieldRef<"orders", 'OrderStatus'>
    readonly order_date: FieldRef<"orders", 'DateTime'>
    readonly sub_total: FieldRef<"orders", 'Decimal'>
    readonly shipping_cost: FieldRef<"orders", 'Decimal'>
    readonly discount_amount: FieldRef<"orders", 'Decimal'>
    readonly total_price: FieldRef<"orders", 'Decimal'>
    readonly shipping_address: FieldRef<"orders", 'Json'>
    readonly shipping_method: FieldRef<"orders", 'String'>
    readonly tracking_number: FieldRef<"orders", 'String'>
    readonly voucher_id: FieldRef<"orders", 'Int'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly updated_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.voucher
   */
  export type orders$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    where?: vouchersWhereInput
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.payment
   */
  export type orders$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
  }

  /**
   * orders.feedbacks
   */
  export type orders$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    cursor?: feedbacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * orders.custom_order
   */
  export type orders$custom_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    where?: custom_ordersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: Decimal
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>



  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      order: Prisma.$ordersPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      quantity: number
      price: Prisma.Decimal
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly product_id: FieldRef<"order_items", 'Int'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly price: FieldRef<"order_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model raw_materials
   */

  export type AggregateRaw_materials = {
    _count: Raw_materialsCountAggregateOutputType | null
    _avg: Raw_materialsAvgAggregateOutputType | null
    _sum: Raw_materialsSumAggregateOutputType | null
    _min: Raw_materialsMinAggregateOutputType | null
    _max: Raw_materialsMaxAggregateOutputType | null
  }

  export type Raw_materialsAvgAggregateOutputType = {
    id: number | null
    stock: Decimal | null
    reorder_level: Decimal | null
  }

  export type Raw_materialsSumAggregateOutputType = {
    id: number | null
    stock: Decimal | null
    reorder_level: Decimal | null
  }

  export type Raw_materialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    stock: Decimal | null
    unit: string | null
    reorder_level: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Raw_materialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stock: Decimal | null
    unit: string | null
    reorder_level: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Raw_materialsCountAggregateOutputType = {
    id: number
    name: number
    stock: number
    unit: number
    reorder_level: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Raw_materialsAvgAggregateInputType = {
    id?: true
    stock?: true
    reorder_level?: true
  }

  export type Raw_materialsSumAggregateInputType = {
    id?: true
    stock?: true
    reorder_level?: true
  }

  export type Raw_materialsMinAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    unit?: true
    reorder_level?: true
    created_at?: true
    updated_at?: true
  }

  export type Raw_materialsMaxAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    unit?: true
    reorder_level?: true
    created_at?: true
    updated_at?: true
  }

  export type Raw_materialsCountAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    unit?: true
    reorder_level?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Raw_materialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_materials to aggregate.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_materials
    **/
    _count?: true | Raw_materialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Raw_materialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Raw_materialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_materialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_materialsMaxAggregateInputType
  }

  export type GetRaw_materialsAggregateType<T extends Raw_materialsAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_materials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_materials[P]>
      : GetScalarType<T[P], AggregateRaw_materials[P]>
  }




  export type raw_materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_materialsWhereInput
    orderBy?: raw_materialsOrderByWithAggregationInput | raw_materialsOrderByWithAggregationInput[]
    by: Raw_materialsScalarFieldEnum[] | Raw_materialsScalarFieldEnum
    having?: raw_materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_materialsCountAggregateInputType | true
    _avg?: Raw_materialsAvgAggregateInputType
    _sum?: Raw_materialsSumAggregateInputType
    _min?: Raw_materialsMinAggregateInputType
    _max?: Raw_materialsMaxAggregateInputType
  }

  export type Raw_materialsGroupByOutputType = {
    id: number
    name: string
    stock: Decimal
    unit: string
    reorder_level: Decimal
    created_at: Date
    updated_at: Date
    _count: Raw_materialsCountAggregateOutputType | null
    _avg: Raw_materialsAvgAggregateOutputType | null
    _sum: Raw_materialsSumAggregateOutputType | null
    _min: Raw_materialsMinAggregateOutputType | null
    _max: Raw_materialsMaxAggregateOutputType | null
  }

  type GetRaw_materialsGroupByPayload<T extends raw_materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_materialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_materialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_materialsGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_materialsGroupByOutputType[P]>
        }
      >
    >


  export type raw_materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    unit?: boolean
    reorder_level?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["raw_materials"]>



  export type raw_materialsSelectScalar = {
    id?: boolean
    name?: boolean
    stock?: boolean
    unit?: boolean
    reorder_level?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type raw_materialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stock" | "unit" | "reorder_level" | "created_at" | "updated_at", ExtArgs["result"]["raw_materials"]>

  export type $raw_materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_materials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stock: Prisma.Decimal
      unit: string
      reorder_level: Prisma.Decimal
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["raw_materials"]>
    composites: {}
  }

  type raw_materialsGetPayload<S extends boolean | null | undefined | raw_materialsDefaultArgs> = $Result.GetResult<Prisma.$raw_materialsPayload, S>

  type raw_materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<raw_materialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Raw_materialsCountAggregateInputType | true
    }

  export interface raw_materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_materials'], meta: { name: 'raw_materials' } }
    /**
     * Find zero or one Raw_materials that matches the filter.
     * @param {raw_materialsFindUniqueArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_materialsFindUniqueArgs>(args: SelectSubset<T, raw_materialsFindUniqueArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raw_materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {raw_materialsFindUniqueOrThrowArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindFirstArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_materialsFindFirstArgs>(args?: SelectSubset<T, raw_materialsFindFirstArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindFirstOrThrowArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raw_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_materials
     * const raw_materials = await prisma.raw_materials.findMany()
     * 
     * // Get first 10 Raw_materials
     * const raw_materials = await prisma.raw_materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raw_materialsWithIdOnly = await prisma.raw_materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends raw_materialsFindManyArgs>(args?: SelectSubset<T, raw_materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raw_materials.
     * @param {raw_materialsCreateArgs} args - Arguments to create a Raw_materials.
     * @example
     * // Create one Raw_materials
     * const Raw_materials = await prisma.raw_materials.create({
     *   data: {
     *     // ... data to create a Raw_materials
     *   }
     * })
     * 
     */
    create<T extends raw_materialsCreateArgs>(args: SelectSubset<T, raw_materialsCreateArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raw_materials.
     * @param {raw_materialsCreateManyArgs} args - Arguments to create many Raw_materials.
     * @example
     * // Create many Raw_materials
     * const raw_materials = await prisma.raw_materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_materialsCreateManyArgs>(args?: SelectSubset<T, raw_materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Raw_materials.
     * @param {raw_materialsDeleteArgs} args - Arguments to delete one Raw_materials.
     * @example
     * // Delete one Raw_materials
     * const Raw_materials = await prisma.raw_materials.delete({
     *   where: {
     *     // ... filter to delete one Raw_materials
     *   }
     * })
     * 
     */
    delete<T extends raw_materialsDeleteArgs>(args: SelectSubset<T, raw_materialsDeleteArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raw_materials.
     * @param {raw_materialsUpdateArgs} args - Arguments to update one Raw_materials.
     * @example
     * // Update one Raw_materials
     * const raw_materials = await prisma.raw_materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_materialsUpdateArgs>(args: SelectSubset<T, raw_materialsUpdateArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raw_materials.
     * @param {raw_materialsDeleteManyArgs} args - Arguments to filter Raw_materials to delete.
     * @example
     * // Delete a few Raw_materials
     * const { count } = await prisma.raw_materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_materialsDeleteManyArgs>(args?: SelectSubset<T, raw_materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_materials
     * const raw_materials = await prisma.raw_materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_materialsUpdateManyArgs>(args: SelectSubset<T, raw_materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Raw_materials.
     * @param {raw_materialsUpsertArgs} args - Arguments to update or create a Raw_materials.
     * @example
     * // Update or create a Raw_materials
     * const raw_materials = await prisma.raw_materials.upsert({
     *   create: {
     *     // ... data to create a Raw_materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_materials we want to update
     *   }
     * })
     */
    upsert<T extends raw_materialsUpsertArgs>(args: SelectSubset<T, raw_materialsUpsertArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsCountArgs} args - Arguments to filter Raw_materials to count.
     * @example
     * // Count the number of Raw_materials
     * const count = await prisma.raw_materials.count({
     *   where: {
     *     // ... the filter for the Raw_materials we want to count
     *   }
     * })
    **/
    count<T extends raw_materialsCountArgs>(
      args?: Subset<T, raw_materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_materialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_materialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Raw_materialsAggregateArgs>(args: Subset<T, Raw_materialsAggregateArgs>): Prisma.PrismaPromise<GetRaw_materialsAggregateType<T>>

    /**
     * Group by Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends raw_materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_materialsGroupByArgs['orderBy'] }
        : { orderBy?: raw_materialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, raw_materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_materialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_materials model
   */
  readonly fields: raw_materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the raw_materials model
   */
  interface raw_materialsFieldRefs {
    readonly id: FieldRef<"raw_materials", 'Int'>
    readonly name: FieldRef<"raw_materials", 'String'>
    readonly stock: FieldRef<"raw_materials", 'Decimal'>
    readonly unit: FieldRef<"raw_materials", 'String'>
    readonly reorder_level: FieldRef<"raw_materials", 'Decimal'>
    readonly created_at: FieldRef<"raw_materials", 'DateTime'>
    readonly updated_at: FieldRef<"raw_materials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * raw_materials findUnique
   */
  export type raw_materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials findUniqueOrThrow
   */
  export type raw_materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials findFirst
   */
  export type raw_materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials findFirstOrThrow
   */
  export type raw_materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials findMany
   */
  export type raw_materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials create
   */
  export type raw_materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * The data needed to create a raw_materials.
     */
    data: XOR<raw_materialsCreateInput, raw_materialsUncheckedCreateInput>
  }

  /**
   * raw_materials createMany
   */
  export type raw_materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_materials.
     */
    data: raw_materialsCreateManyInput | raw_materialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_materials update
   */
  export type raw_materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * The data needed to update a raw_materials.
     */
    data: XOR<raw_materialsUpdateInput, raw_materialsUncheckedUpdateInput>
    /**
     * Choose, which raw_materials to update.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials updateMany
   */
  export type raw_materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_materials.
     */
    data: XOR<raw_materialsUpdateManyMutationInput, raw_materialsUncheckedUpdateManyInput>
    /**
     * Filter which raw_materials to update
     */
    where?: raw_materialsWhereInput
    /**
     * Limit how many raw_materials to update.
     */
    limit?: number
  }

  /**
   * raw_materials upsert
   */
  export type raw_materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * The filter to search for the raw_materials to update in case it exists.
     */
    where: raw_materialsWhereUniqueInput
    /**
     * In case the raw_materials found by the `where` argument doesn't exist, create a new raw_materials with this data.
     */
    create: XOR<raw_materialsCreateInput, raw_materialsUncheckedCreateInput>
    /**
     * In case the raw_materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_materialsUpdateInput, raw_materialsUncheckedUpdateInput>
  }

  /**
   * raw_materials delete
   */
  export type raw_materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Filter which raw_materials to delete.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials deleteMany
   */
  export type raw_materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_materials to delete
     */
    where?: raw_materialsWhereInput
    /**
     * Limit how many raw_materials to delete.
     */
    limit?: number
  }

  /**
   * raw_materials without action
   */
  export type raw_materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
  }


  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    label: string | null
    recipient: string | null
    phone: string | null
    street: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    is_default: boolean | null
  }

  export type AddressesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    label: string | null
    recipient: string | null
    phone: string | null
    street: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    is_default: boolean | null
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    user_id: number
    label: number
    recipient: number
    phone: number
    street: number
    city: number
    province: number
    postal_code: number
    is_default: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    recipient?: true
    phone?: true
    street?: true
    city?: true
    province?: true
    postal_code?: true
    is_default?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    recipient?: true
    phone?: true
    street?: true
    city?: true
    province?: true
    postal_code?: true
    is_default?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    recipient?: true
    phone?: true
    street?: true
    city?: true
    province?: true
    postal_code?: true
    is_default?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id: number
    user_id: number
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default: boolean
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    label?: boolean
    recipient?: boolean
    phone?: boolean
    street?: boolean
    city?: boolean
    province?: boolean
    postal_code?: boolean
    is_default?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>



  export type addressesSelectScalar = {
    id?: boolean
    user_id?: boolean
    label?: boolean
    recipient?: boolean
    phone?: boolean
    street?: boolean
    city?: boolean
    province?: boolean
    postal_code?: boolean
    is_default?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "label" | "recipient" | "phone" | "street" | "city" | "province" | "postal_code" | "is_default", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      label: string
      recipient: string
      phone: string
      street: string
      city: string
      province: string
      postal_code: string
      is_default: boolean
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id: FieldRef<"addresses", 'Int'>
    readonly user_id: FieldRef<"addresses", 'Int'>
    readonly label: FieldRef<"addresses", 'String'>
    readonly recipient: FieldRef<"addresses", 'String'>
    readonly phone: FieldRef<"addresses", 'String'>
    readonly street: FieldRef<"addresses", 'String'>
    readonly city: FieldRef<"addresses", 'String'>
    readonly province: FieldRef<"addresses", 'String'>
    readonly postal_code: FieldRef<"addresses", 'String'>
    readonly is_default: FieldRef<"addresses", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Model vouchers
   */

  export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  export type VouchersAvgAggregateOutputType = {
    id: number | null
    discount_value: Decimal | null
    max_discount: Decimal | null
    min_purchase: Decimal | null
    usage_limit: number | null
    current_usage: number | null
  }

  export type VouchersSumAggregateOutputType = {
    id: number | null
    discount_value: Decimal | null
    max_discount: Decimal | null
    min_purchase: Decimal | null
    usage_limit: number | null
    current_usage: number | null
  }

  export type VouchersMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    discount_value: Decimal | null
    discount_type: $Enums.VoucherType | null
    max_discount: Decimal | null
    min_purchase: Decimal | null
    valid_from: Date | null
    valid_until: Date | null
    usage_limit: number | null
    current_usage: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VouchersMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    discount_value: Decimal | null
    discount_type: $Enums.VoucherType | null
    max_discount: Decimal | null
    min_purchase: Decimal | null
    valid_from: Date | null
    valid_until: Date | null
    usage_limit: number | null
    current_usage: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VouchersCountAggregateOutputType = {
    id: number
    code: number
    description: number
    discount_value: number
    discount_type: number
    max_discount: number
    min_purchase: number
    valid_from: number
    valid_until: number
    usage_limit: number
    current_usage: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VouchersAvgAggregateInputType = {
    id?: true
    discount_value?: true
    max_discount?: true
    min_purchase?: true
    usage_limit?: true
    current_usage?: true
  }

  export type VouchersSumAggregateInputType = {
    id?: true
    discount_value?: true
    max_discount?: true
    min_purchase?: true
    usage_limit?: true
    current_usage?: true
  }

  export type VouchersMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    discount_value?: true
    discount_type?: true
    max_discount?: true
    min_purchase?: true
    valid_from?: true
    valid_until?: true
    usage_limit?: true
    current_usage?: true
    created_at?: true
    updated_at?: true
  }

  export type VouchersMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    discount_value?: true
    discount_type?: true
    max_discount?: true
    min_purchase?: true
    valid_from?: true
    valid_until?: true
    usage_limit?: true
    current_usage?: true
    created_at?: true
    updated_at?: true
  }

  export type VouchersCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    discount_value?: true
    discount_type?: true
    max_discount?: true
    min_purchase?: true
    valid_from?: true
    valid_until?: true
    usage_limit?: true
    current_usage?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VouchersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to aggregate.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vouchers
    **/
    _count?: true | VouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchersMaxAggregateInputType
  }

  export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouchers[P]>
      : GetScalarType<T[P], AggregateVouchers[P]>
  }




  export type vouchersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
    orderBy?: vouchersOrderByWithAggregationInput | vouchersOrderByWithAggregationInput[]
    by: VouchersScalarFieldEnum[] | VouchersScalarFieldEnum
    having?: vouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchersCountAggregateInputType | true
    _avg?: VouchersAvgAggregateInputType
    _sum?: VouchersSumAggregateInputType
    _min?: VouchersMinAggregateInputType
    _max?: VouchersMaxAggregateInputType
  }

  export type VouchersGroupByOutputType = {
    id: number
    code: string
    description: string | null
    discount_value: Decimal
    discount_type: $Enums.VoucherType
    max_discount: Decimal | null
    min_purchase: Decimal
    valid_from: Date
    valid_until: Date
    usage_limit: number
    current_usage: number
    created_at: Date
    updated_at: Date
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  type GetVouchersGroupByPayload<T extends vouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchersGroupByOutputType[P]>
            : GetScalarType<T[P], VouchersGroupByOutputType[P]>
        }
      >
    >


  export type vouchersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    discount_value?: boolean
    discount_type?: boolean
    max_discount?: boolean
    min_purchase?: boolean
    valid_from?: boolean
    valid_until?: boolean
    usage_limit?: boolean
    current_usage?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | vouchers$ordersArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>



  export type vouchersSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    discount_value?: boolean
    discount_type?: boolean
    max_discount?: boolean
    min_purchase?: boolean
    valid_from?: boolean
    valid_until?: boolean
    usage_limit?: boolean
    current_usage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vouchersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "discount_value" | "discount_type" | "max_discount" | "min_purchase" | "valid_from" | "valid_until" | "usage_limit" | "current_usage" | "created_at" | "updated_at", ExtArgs["result"]["vouchers"]>
  export type vouchersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | vouchers$ordersArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vouchersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vouchers"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string | null
      discount_value: Prisma.Decimal
      discount_type: $Enums.VoucherType
      max_discount: Prisma.Decimal | null
      min_purchase: Prisma.Decimal
      valid_from: Date
      valid_until: Date
      usage_limit: number
      current_usage: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vouchers"]>
    composites: {}
  }

  type vouchersGetPayload<S extends boolean | null | undefined | vouchersDefaultArgs> = $Result.GetResult<Prisma.$vouchersPayload, S>

  type vouchersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VouchersCountAggregateInputType | true
    }

  export interface vouchersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vouchers'], meta: { name: 'vouchers' } }
    /**
     * Find zero or one Vouchers that matches the filter.
     * @param {vouchersFindUniqueArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vouchersFindUniqueArgs>(args: SelectSubset<T, vouchersFindUniqueArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vouchers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vouchersFindUniqueOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vouchersFindUniqueOrThrowArgs>(args: SelectSubset<T, vouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vouchersFindFirstArgs>(args?: SelectSubset<T, vouchersFindFirstArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vouchersFindFirstOrThrowArgs>(args?: SelectSubset<T, vouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.vouchers.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.vouchers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vouchersFindManyArgs>(args?: SelectSubset<T, vouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vouchers.
     * @param {vouchersCreateArgs} args - Arguments to create a Vouchers.
     * @example
     * // Create one Vouchers
     * const Vouchers = await prisma.vouchers.create({
     *   data: {
     *     // ... data to create a Vouchers
     *   }
     * })
     * 
     */
    create<T extends vouchersCreateArgs>(args: SelectSubset<T, vouchersCreateArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {vouchersCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vouchersCreateManyArgs>(args?: SelectSubset<T, vouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vouchers.
     * @param {vouchersDeleteArgs} args - Arguments to delete one Vouchers.
     * @example
     * // Delete one Vouchers
     * const Vouchers = await prisma.vouchers.delete({
     *   where: {
     *     // ... filter to delete one Vouchers
     *   }
     * })
     * 
     */
    delete<T extends vouchersDeleteArgs>(args: SelectSubset<T, vouchersDeleteArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vouchers.
     * @param {vouchersUpdateArgs} args - Arguments to update one Vouchers.
     * @example
     * // Update one Vouchers
     * const vouchers = await prisma.vouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vouchersUpdateArgs>(args: SelectSubset<T, vouchersUpdateArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {vouchersDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.vouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vouchersDeleteManyArgs>(args?: SelectSubset<T, vouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vouchersUpdateManyArgs>(args: SelectSubset<T, vouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vouchers.
     * @param {vouchersUpsertArgs} args - Arguments to update or create a Vouchers.
     * @example
     * // Update or create a Vouchers
     * const vouchers = await prisma.vouchers.upsert({
     *   create: {
     *     // ... data to create a Vouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouchers we want to update
     *   }
     * })
     */
    upsert<T extends vouchersUpsertArgs>(args: SelectSubset<T, vouchersUpsertArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.vouchers.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends vouchersCountArgs>(
      args?: Subset<T, vouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VouchersAggregateArgs>(args: Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>

    /**
     * Group by Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vouchersGroupByArgs['orderBy'] }
        : { orderBy?: vouchersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vouchers model
   */
  readonly fields: vouchersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vouchersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends vouchers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, vouchers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vouchers model
   */
  interface vouchersFieldRefs {
    readonly id: FieldRef<"vouchers", 'Int'>
    readonly code: FieldRef<"vouchers", 'String'>
    readonly description: FieldRef<"vouchers", 'String'>
    readonly discount_value: FieldRef<"vouchers", 'Decimal'>
    readonly discount_type: FieldRef<"vouchers", 'VoucherType'>
    readonly max_discount: FieldRef<"vouchers", 'Decimal'>
    readonly min_purchase: FieldRef<"vouchers", 'Decimal'>
    readonly valid_from: FieldRef<"vouchers", 'DateTime'>
    readonly valid_until: FieldRef<"vouchers", 'DateTime'>
    readonly usage_limit: FieldRef<"vouchers", 'Int'>
    readonly current_usage: FieldRef<"vouchers", 'Int'>
    readonly created_at: FieldRef<"vouchers", 'DateTime'>
    readonly updated_at: FieldRef<"vouchers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vouchers findUnique
   */
  export type vouchersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findUniqueOrThrow
   */
  export type vouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findFirst
   */
  export type vouchersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers findFirstOrThrow
   */
  export type vouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers findMany
   */
  export type vouchersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers create
   */
  export type vouchersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The data needed to create a vouchers.
     */
    data: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
  }

  /**
   * vouchers createMany
   */
  export type vouchersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vouchers.
     */
    data: vouchersCreateManyInput | vouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vouchers update
   */
  export type vouchersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The data needed to update a vouchers.
     */
    data: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
    /**
     * Choose, which vouchers to update.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers updateMany
   */
  export type vouchersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vouchers.
     */
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyInput>
    /**
     * Filter which vouchers to update
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to update.
     */
    limit?: number
  }

  /**
   * vouchers upsert
   */
  export type vouchersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The filter to search for the vouchers to update in case it exists.
     */
    where: vouchersWhereUniqueInput
    /**
     * In case the vouchers found by the `where` argument doesn't exist, create a new vouchers with this data.
     */
    create: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
    /**
     * In case the vouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
  }

  /**
   * vouchers delete
   */
  export type vouchersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter which vouchers to delete.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers deleteMany
   */
  export type vouchersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to delete
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to delete.
     */
    limit?: number
  }

  /**
   * vouchers.orders
   */
  export type vouchers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * vouchers without action
   */
  export type vouchersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    status: $Enums.PaymentStatus | null
    amount: Decimal | null
    payment_method: string | null
    payment_gateway: string | null
    gateway_transaction_id: string | null
    payment_code: string | null
    bank: string | null
    payment_url: string | null
    created_at: Date | null
    paid_at: Date | null
    expires_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    status: $Enums.PaymentStatus | null
    amount: Decimal | null
    payment_method: string | null
    payment_gateway: string | null
    gateway_transaction_id: string | null
    payment_code: string | null
    bank: string | null
    payment_url: string | null
    created_at: Date | null
    paid_at: Date | null
    expires_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    order_id: number
    status: number
    amount: number
    payment_method: number
    payment_gateway: number
    gateway_transaction_id: number
    payment_code: number
    bank: number
    payment_url: number
    created_at: number
    paid_at: number
    expires_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    order_id?: true
    status?: true
    amount?: true
    payment_method?: true
    payment_gateway?: true
    gateway_transaction_id?: true
    payment_code?: true
    bank?: true
    payment_url?: true
    created_at?: true
    paid_at?: true
    expires_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    order_id?: true
    status?: true
    amount?: true
    payment_method?: true
    payment_gateway?: true
    gateway_transaction_id?: true
    payment_code?: true
    bank?: true
    payment_url?: true
    created_at?: true
    paid_at?: true
    expires_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    order_id?: true
    status?: true
    amount?: true
    payment_method?: true
    payment_gateway?: true
    gateway_transaction_id?: true
    payment_code?: true
    bank?: true
    payment_url?: true
    created_at?: true
    paid_at?: true
    expires_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    order_id: number
    status: $Enums.PaymentStatus
    amount: Decimal
    payment_method: string | null
    payment_gateway: string
    gateway_transaction_id: string | null
    payment_code: string | null
    bank: string | null
    payment_url: string | null
    created_at: Date
    paid_at: Date | null
    expires_at: Date
    updated_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    status?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_gateway?: boolean
    gateway_transaction_id?: boolean
    payment_code?: boolean
    bank?: boolean
    payment_url?: boolean
    created_at?: boolean
    paid_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    invoice?: boolean | payments$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type paymentsSelectScalar = {
    id?: boolean
    order_id?: boolean
    status?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_gateway?: boolean
    gateway_transaction_id?: boolean
    payment_code?: boolean
    bank?: boolean
    payment_url?: boolean
    created_at?: boolean
    paid_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "status" | "amount" | "payment_method" | "payment_gateway" | "gateway_transaction_id" | "payment_code" | "bank" | "payment_url" | "created_at" | "paid_at" | "expires_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    invoice?: boolean | payments$invoiceArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      order: Prisma.$ordersPayload<ExtArgs>
      invoice: Prisma.$invoicesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      status: $Enums.PaymentStatus
      amount: Prisma.Decimal
      payment_method: string | null
      payment_gateway: string
      gateway_transaction_id: string | null
      payment_code: string | null
      bank: string | null
      payment_url: string | null
      created_at: Date
      paid_at: Date | null
      expires_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends payments$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, payments$invoiceArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly order_id: FieldRef<"payments", 'Int'>
    readonly status: FieldRef<"payments", 'PaymentStatus'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly payment_gateway: FieldRef<"payments", 'String'>
    readonly gateway_transaction_id: FieldRef<"payments", 'String'>
    readonly payment_code: FieldRef<"payments", 'String'>
    readonly bank: FieldRef<"payments", 'String'>
    readonly payment_url: FieldRef<"payments", 'String'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
    readonly paid_at: FieldRef<"payments", 'DateTime'>
    readonly expires_at: FieldRef<"payments", 'DateTime'>
    readonly updated_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments.invoice
   */
  export type payments$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    id: number | null
    payment_id: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    id: number | null
    payment_id: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: number | null
    payment_id: number | null
    generated_date: Date | null
    file_url: string | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: number | null
    payment_id: number | null
    generated_date: Date | null
    file_url: string | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    payment_id: number
    generated_date: number
    file_url: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    id?: true
    payment_id?: true
  }

  export type InvoicesSumAggregateInputType = {
    id?: true
    payment_id?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    payment_id?: true
    generated_date?: true
    file_url?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    payment_id?: true
    generated_date?: true
    file_url?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    payment_id?: true
    generated_date?: true
    file_url?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: number
    payment_id: number
    generated_date: Date
    file_url: string
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_id?: boolean
    generated_date?: boolean
    file_url?: boolean
    payment?: boolean | paymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>



  export type invoicesSelectScalar = {
    id?: boolean
    payment_id?: boolean
    generated_date?: boolean
    file_url?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payment_id" | "generated_date" | "file_url", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | paymentsDefaultArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      payment: Prisma.$paymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      payment_id: number
      generated_date: Date
      file_url: string
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends paymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paymentsDefaultArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'Int'>
    readonly payment_id: FieldRef<"invoices", 'Int'>
    readonly generated_date: FieldRef<"invoices", 'DateTime'>
    readonly file_url: FieldRef<"invoices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
  }


  /**
   * Model feedbacks
   */

  export type AggregateFeedbacks = {
    _count: FeedbacksCountAggregateOutputType | null
    _avg: FeedbacksAvgAggregateOutputType | null
    _sum: FeedbacksSumAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  export type FeedbacksAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    order_id: number | null
    rating: number | null
  }

  export type FeedbacksSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    order_id: number | null
    rating: number | null
  }

  export type FeedbacksMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    order_id: number | null
    message: string | null
    rating: number | null
    submitted_at: Date | null
  }

  export type FeedbacksMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    order_id: number | null
    message: string | null
    rating: number | null
    submitted_at: Date | null
  }

  export type FeedbacksCountAggregateOutputType = {
    id: number
    customer_id: number
    order_id: number
    message: number
    rating: number
    submitted_at: number
    _all: number
  }


  export type FeedbacksAvgAggregateInputType = {
    id?: true
    customer_id?: true
    order_id?: true
    rating?: true
  }

  export type FeedbacksSumAggregateInputType = {
    id?: true
    customer_id?: true
    order_id?: true
    rating?: true
  }

  export type FeedbacksMinAggregateInputType = {
    id?: true
    customer_id?: true
    order_id?: true
    message?: true
    rating?: true
    submitted_at?: true
  }

  export type FeedbacksMaxAggregateInputType = {
    id?: true
    customer_id?: true
    order_id?: true
    message?: true
    rating?: true
    submitted_at?: true
  }

  export type FeedbacksCountAggregateInputType = {
    id?: true
    customer_id?: true
    order_id?: true
    message?: true
    rating?: true
    submitted_at?: true
    _all?: true
  }

  export type FeedbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to aggregate.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbacksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbacksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbacksMaxAggregateInputType
  }

  export type GetFeedbacksAggregateType<T extends FeedbacksAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbacks[P]>
      : GetScalarType<T[P], AggregateFeedbacks[P]>
  }




  export type feedbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithAggregationInput | feedbacksOrderByWithAggregationInput[]
    by: FeedbacksScalarFieldEnum[] | FeedbacksScalarFieldEnum
    having?: feedbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbacksCountAggregateInputType | true
    _avg?: FeedbacksAvgAggregateInputType
    _sum?: FeedbacksSumAggregateInputType
    _min?: FeedbacksMinAggregateInputType
    _max?: FeedbacksMaxAggregateInputType
  }

  export type FeedbacksGroupByOutputType = {
    id: number
    customer_id: number
    order_id: number
    message: string | null
    rating: number
    submitted_at: Date
    _count: FeedbacksCountAggregateOutputType | null
    _avg: FeedbacksAvgAggregateOutputType | null
    _sum: FeedbacksSumAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  type GetFeedbacksGroupByPayload<T extends feedbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
        }
      >
    >


  export type feedbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    order_id?: boolean
    message?: boolean
    rating?: boolean
    submitted_at?: boolean
    customer?: boolean | usersDefaultArgs<ExtArgs>
    order?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbacks"]>



  export type feedbacksSelectScalar = {
    id?: boolean
    customer_id?: boolean
    order_id?: boolean
    message?: boolean
    rating?: boolean
    submitted_at?: boolean
  }

  export type feedbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "order_id" | "message" | "rating" | "submitted_at", ExtArgs["result"]["feedbacks"]>
  export type feedbacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | usersDefaultArgs<ExtArgs>
    order?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $feedbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedbacks"
    objects: {
      customer: Prisma.$usersPayload<ExtArgs>
      order: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      order_id: number
      message: string | null
      rating: number
      submitted_at: Date
    }, ExtArgs["result"]["feedbacks"]>
    composites: {}
  }

  type feedbacksGetPayload<S extends boolean | null | undefined | feedbacksDefaultArgs> = $Result.GetResult<Prisma.$feedbacksPayload, S>

  type feedbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbacksCountAggregateInputType | true
    }

  export interface feedbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedbacks'], meta: { name: 'feedbacks' } }
    /**
     * Find zero or one Feedbacks that matches the filter.
     * @param {feedbacksFindUniqueArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbacksFindUniqueArgs>(args: SelectSubset<T, feedbacksFindUniqueArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbacksFindUniqueOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindFirstArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbacksFindFirstArgs>(args?: SelectSubset<T, feedbacksFindFirstArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindFirstOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbacksWithIdOnly = await prisma.feedbacks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedbacksFindManyArgs>(args?: SelectSubset<T, feedbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedbacks.
     * @param {feedbacksCreateArgs} args - Arguments to create a Feedbacks.
     * @example
     * // Create one Feedbacks
     * const Feedbacks = await prisma.feedbacks.create({
     *   data: {
     *     // ... data to create a Feedbacks
     *   }
     * })
     * 
     */
    create<T extends feedbacksCreateArgs>(args: SelectSubset<T, feedbacksCreateArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbacksCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedbacks = await prisma.feedbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbacksCreateManyArgs>(args?: SelectSubset<T, feedbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedbacks.
     * @param {feedbacksDeleteArgs} args - Arguments to delete one Feedbacks.
     * @example
     * // Delete one Feedbacks
     * const Feedbacks = await prisma.feedbacks.delete({
     *   where: {
     *     // ... filter to delete one Feedbacks
     *   }
     * })
     * 
     */
    delete<T extends feedbacksDeleteArgs>(args: SelectSubset<T, feedbacksDeleteArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedbacks.
     * @param {feedbacksUpdateArgs} args - Arguments to update one Feedbacks.
     * @example
     * // Update one Feedbacks
     * const feedbacks = await prisma.feedbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbacksUpdateArgs>(args: SelectSubset<T, feedbacksUpdateArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbacksDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbacksDeleteManyArgs>(args?: SelectSubset<T, feedbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedbacks = await prisma.feedbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbacksUpdateManyArgs>(args: SelectSubset<T, feedbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedbacks.
     * @param {feedbacksUpsertArgs} args - Arguments to update or create a Feedbacks.
     * @example
     * // Update or create a Feedbacks
     * const feedbacks = await prisma.feedbacks.upsert({
     *   create: {
     *     // ... data to create a Feedbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedbacks we want to update
     *   }
     * })
     */
    upsert<T extends feedbacksUpsertArgs>(args: SelectSubset<T, feedbacksUpsertArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedbacks.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbacksCountArgs>(
      args?: Subset<T, feedbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbacksAggregateArgs>(args: Subset<T, FeedbacksAggregateArgs>): Prisma.PrismaPromise<GetFeedbacksAggregateType<T>>

    /**
     * Group by Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends feedbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbacksGroupByArgs['orderBy'] }
        : { orderBy?: feedbacksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, feedbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedbacks model
   */
  readonly fields: feedbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the feedbacks model
   */
  interface feedbacksFieldRefs {
    readonly id: FieldRef<"feedbacks", 'Int'>
    readonly customer_id: FieldRef<"feedbacks", 'Int'>
    readonly order_id: FieldRef<"feedbacks", 'Int'>
    readonly message: FieldRef<"feedbacks", 'String'>
    readonly rating: FieldRef<"feedbacks", 'Int'>
    readonly submitted_at: FieldRef<"feedbacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * feedbacks findUnique
   */
  export type feedbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks findUniqueOrThrow
   */
  export type feedbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks findFirst
   */
  export type feedbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks findFirstOrThrow
   */
  export type feedbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks findMany
   */
  export type feedbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks create
   */
  export type feedbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * The data needed to create a feedbacks.
     */
    data: XOR<feedbacksCreateInput, feedbacksUncheckedCreateInput>
  }

  /**
   * feedbacks createMany
   */
  export type feedbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbacksCreateManyInput | feedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedbacks update
   */
  export type feedbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * The data needed to update a feedbacks.
     */
    data: XOR<feedbacksUpdateInput, feedbacksUncheckedUpdateInput>
    /**
     * Choose, which feedbacks to update.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks updateMany
   */
  export type feedbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedbacks upsert
   */
  export type feedbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * The filter to search for the feedbacks to update in case it exists.
     */
    where: feedbacksWhereUniqueInput
    /**
     * In case the feedbacks found by the `where` argument doesn't exist, create a new feedbacks with this data.
     */
    create: XOR<feedbacksCreateInput, feedbacksUncheckedCreateInput>
    /**
     * In case the feedbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbacksUpdateInput, feedbacksUncheckedUpdateInput>
  }

  /**
   * feedbacks delete
   */
  export type feedbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter which feedbacks to delete.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks deleteMany
   */
  export type feedbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedbacks without action
   */
  export type feedbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
  }


  /**
   * Model expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type ExpensesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    expense_type: string | null
    amount: Decimal | null
    expense_date: Date | null
    notes: string | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    expense_type: string | null
    amount: Decimal | null
    expense_date: Date | null
    notes: string | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    user_id: number
    expense_type: number
    amount: number
    expense_date: number
    notes: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    user_id?: true
    expense_type?: true
    amount?: true
    expense_date?: true
    notes?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    user_id?: true
    expense_type?: true
    amount?: true
    expense_date?: true
    notes?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    user_id?: true
    expense_type?: true
    amount?: true
    expense_date?: true
    notes?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to aggregate.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type expensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithAggregationInput | expensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: expensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    id: number
    user_id: number | null
    expense_type: string | null
    amount: Decimal | null
    expense_date: Date | null
    notes: string | null
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends expensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type expensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    expense_type?: boolean
    amount?: boolean
    expense_date?: boolean
    notes?: boolean
    user?: boolean | expenses$userArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>



  export type expensesSelectScalar = {
    id?: boolean
    user_id?: boolean
    expense_type?: boolean
    amount?: boolean
    expense_date?: boolean
    notes?: boolean
  }

  export type expensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "expense_type" | "amount" | "expense_date" | "notes", ExtArgs["result"]["expenses"]>
  export type expensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | expenses$userArgs<ExtArgs>
  }

  export type $expensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expenses"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      expense_type: string | null
      amount: Prisma.Decimal | null
      expense_date: Date | null
      notes: string | null
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type expensesGetPayload<S extends boolean | null | undefined | expensesDefaultArgs> = $Result.GetResult<Prisma.$expensesPayload, S>

  type expensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface expensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expenses'], meta: { name: 'expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {expensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expensesFindUniqueArgs>(args: SelectSubset<T, expensesFindUniqueArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expensesFindUniqueOrThrowArgs>(args: SelectSubset<T, expensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expensesFindFirstArgs>(args?: SelectSubset<T, expensesFindFirstArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expensesFindFirstOrThrowArgs>(args?: SelectSubset<T, expensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expensesFindManyArgs>(args?: SelectSubset<T, expensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {expensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends expensesCreateArgs>(args: SelectSubset<T, expensesCreateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expensesCreateManyArgs>(args?: SelectSubset<T, expensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expenses.
     * @param {expensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends expensesDeleteArgs>(args: SelectSubset<T, expensesDeleteArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {expensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expensesUpdateArgs>(args: SelectSubset<T, expensesUpdateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expensesDeleteManyArgs>(args?: SelectSubset<T, expensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expensesUpdateManyArgs>(args: SelectSubset<T, expensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expenses.
     * @param {expensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends expensesUpsertArgs>(args: SelectSubset<T, expensesUpsertArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expensesCountArgs>(
      args?: Subset<T, expensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expensesGroupByArgs['orderBy'] }
        : { orderBy?: expensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expenses model
   */
  readonly fields: expensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends expenses$userArgs<ExtArgs> = {}>(args?: Subset<T, expenses$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expenses model
   */
  interface expensesFieldRefs {
    readonly id: FieldRef<"expenses", 'Int'>
    readonly user_id: FieldRef<"expenses", 'Int'>
    readonly expense_type: FieldRef<"expenses", 'String'>
    readonly amount: FieldRef<"expenses", 'Decimal'>
    readonly expense_date: FieldRef<"expenses", 'DateTime'>
    readonly notes: FieldRef<"expenses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * expenses findUnique
   */
  export type expensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findUniqueOrThrow
   */
  export type expensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findFirst
   */
  export type expensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findFirstOrThrow
   */
  export type expensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findMany
   */
  export type expensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses create
   */
  export type expensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to create a expenses.
     */
    data?: XOR<expensesCreateInput, expensesUncheckedCreateInput>
  }

  /**
   * expenses createMany
   */
  export type expensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expenses update
   */
  export type expensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to update a expenses.
     */
    data: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
    /**
     * Choose, which expenses to update.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses updateMany
   */
  export type expensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expenses upsert
   */
  export type expensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The filter to search for the expenses to update in case it exists.
     */
    where: expensesWhereUniqueInput
    /**
     * In case the expenses found by the `where` argument doesn't exist, create a new expenses with this data.
     */
    create: XOR<expensesCreateInput, expensesUncheckedCreateInput>
    /**
     * In case the expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
  }

  /**
   * expenses delete
   */
  export type expensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter which expenses to delete.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses deleteMany
   */
  export type expensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expenses.user
   */
  export type expenses$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * expenses without action
   */
  export type expensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
  }


  /**
   * Model custom_orders
   */

  export type AggregateCustom_orders = {
    _count: Custom_ordersCountAggregateOutputType | null
    _avg: Custom_ordersAvgAggregateOutputType | null
    _sum: Custom_ordersSumAggregateOutputType | null
    _min: Custom_ordersMinAggregateOutputType | null
    _max: Custom_ordersMaxAggregateOutputType | null
  }

  export type Custom_ordersAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
  }

  export type Custom_ordersSumAggregateOutputType = {
    id: number | null
    order_id: number | null
  }

  export type Custom_ordersMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    request_description: string | null
    due_date: Date | null
    notes: string | null
  }

  export type Custom_ordersMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    request_description: string | null
    due_date: Date | null
    notes: string | null
  }

  export type Custom_ordersCountAggregateOutputType = {
    id: number
    order_id: number
    request_description: number
    due_date: number
    notes: number
    _all: number
  }


  export type Custom_ordersAvgAggregateInputType = {
    id?: true
    order_id?: true
  }

  export type Custom_ordersSumAggregateInputType = {
    id?: true
    order_id?: true
  }

  export type Custom_ordersMinAggregateInputType = {
    id?: true
    order_id?: true
    request_description?: true
    due_date?: true
    notes?: true
  }

  export type Custom_ordersMaxAggregateInputType = {
    id?: true
    order_id?: true
    request_description?: true
    due_date?: true
    notes?: true
  }

  export type Custom_ordersCountAggregateInputType = {
    id?: true
    order_id?: true
    request_description?: true
    due_date?: true
    notes?: true
    _all?: true
  }

  export type Custom_ordersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which custom_orders to aggregate.
     */
    where?: custom_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_orders to fetch.
     */
    orderBy?: custom_ordersOrderByWithRelationInput | custom_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: custom_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned custom_orders
    **/
    _count?: true | Custom_ordersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Custom_ordersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Custom_ordersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Custom_ordersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Custom_ordersMaxAggregateInputType
  }

  export type GetCustom_ordersAggregateType<T extends Custom_ordersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustom_orders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustom_orders[P]>
      : GetScalarType<T[P], AggregateCustom_orders[P]>
  }




  export type custom_ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: custom_ordersWhereInput
    orderBy?: custom_ordersOrderByWithAggregationInput | custom_ordersOrderByWithAggregationInput[]
    by: Custom_ordersScalarFieldEnum[] | Custom_ordersScalarFieldEnum
    having?: custom_ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Custom_ordersCountAggregateInputType | true
    _avg?: Custom_ordersAvgAggregateInputType
    _sum?: Custom_ordersSumAggregateInputType
    _min?: Custom_ordersMinAggregateInputType
    _max?: Custom_ordersMaxAggregateInputType
  }

  export type Custom_ordersGroupByOutputType = {
    id: number
    order_id: number | null
    request_description: string | null
    due_date: Date | null
    notes: string | null
    _count: Custom_ordersCountAggregateOutputType | null
    _avg: Custom_ordersAvgAggregateOutputType | null
    _sum: Custom_ordersSumAggregateOutputType | null
    _min: Custom_ordersMinAggregateOutputType | null
    _max: Custom_ordersMaxAggregateOutputType | null
  }

  type GetCustom_ordersGroupByPayload<T extends custom_ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Custom_ordersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Custom_ordersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Custom_ordersGroupByOutputType[P]>
            : GetScalarType<T[P], Custom_ordersGroupByOutputType[P]>
        }
      >
    >


  export type custom_ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    request_description?: boolean
    due_date?: boolean
    notes?: boolean
    orders?: boolean | custom_orders$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["custom_orders"]>



  export type custom_ordersSelectScalar = {
    id?: boolean
    order_id?: boolean
    request_description?: boolean
    due_date?: boolean
    notes?: boolean
  }

  export type custom_ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "request_description" | "due_date" | "notes", ExtArgs["result"]["custom_orders"]>
  export type custom_ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | custom_orders$ordersArgs<ExtArgs>
  }

  export type $custom_ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "custom_orders"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number | null
      request_description: string | null
      due_date: Date | null
      notes: string | null
    }, ExtArgs["result"]["custom_orders"]>
    composites: {}
  }

  type custom_ordersGetPayload<S extends boolean | null | undefined | custom_ordersDefaultArgs> = $Result.GetResult<Prisma.$custom_ordersPayload, S>

  type custom_ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<custom_ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Custom_ordersCountAggregateInputType | true
    }

  export interface custom_ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['custom_orders'], meta: { name: 'custom_orders' } }
    /**
     * Find zero or one Custom_orders that matches the filter.
     * @param {custom_ordersFindUniqueArgs} args - Arguments to find a Custom_orders
     * @example
     * // Get one Custom_orders
     * const custom_orders = await prisma.custom_orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends custom_ordersFindUniqueArgs>(args: SelectSubset<T, custom_ordersFindUniqueArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Custom_orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {custom_ordersFindUniqueOrThrowArgs} args - Arguments to find a Custom_orders
     * @example
     * // Get one Custom_orders
     * const custom_orders = await prisma.custom_orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends custom_ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, custom_ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Custom_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_ordersFindFirstArgs} args - Arguments to find a Custom_orders
     * @example
     * // Get one Custom_orders
     * const custom_orders = await prisma.custom_orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends custom_ordersFindFirstArgs>(args?: SelectSubset<T, custom_ordersFindFirstArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Custom_orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_ordersFindFirstOrThrowArgs} args - Arguments to find a Custom_orders
     * @example
     * // Get one Custom_orders
     * const custom_orders = await prisma.custom_orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends custom_ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, custom_ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Custom_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Custom_orders
     * const custom_orders = await prisma.custom_orders.findMany()
     * 
     * // Get first 10 Custom_orders
     * const custom_orders = await prisma.custom_orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custom_ordersWithIdOnly = await prisma.custom_orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends custom_ordersFindManyArgs>(args?: SelectSubset<T, custom_ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Custom_orders.
     * @param {custom_ordersCreateArgs} args - Arguments to create a Custom_orders.
     * @example
     * // Create one Custom_orders
     * const Custom_orders = await prisma.custom_orders.create({
     *   data: {
     *     // ... data to create a Custom_orders
     *   }
     * })
     * 
     */
    create<T extends custom_ordersCreateArgs>(args: SelectSubset<T, custom_ordersCreateArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Custom_orders.
     * @param {custom_ordersCreateManyArgs} args - Arguments to create many Custom_orders.
     * @example
     * // Create many Custom_orders
     * const custom_orders = await prisma.custom_orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends custom_ordersCreateManyArgs>(args?: SelectSubset<T, custom_ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Custom_orders.
     * @param {custom_ordersDeleteArgs} args - Arguments to delete one Custom_orders.
     * @example
     * // Delete one Custom_orders
     * const Custom_orders = await prisma.custom_orders.delete({
     *   where: {
     *     // ... filter to delete one Custom_orders
     *   }
     * })
     * 
     */
    delete<T extends custom_ordersDeleteArgs>(args: SelectSubset<T, custom_ordersDeleteArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Custom_orders.
     * @param {custom_ordersUpdateArgs} args - Arguments to update one Custom_orders.
     * @example
     * // Update one Custom_orders
     * const custom_orders = await prisma.custom_orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends custom_ordersUpdateArgs>(args: SelectSubset<T, custom_ordersUpdateArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Custom_orders.
     * @param {custom_ordersDeleteManyArgs} args - Arguments to filter Custom_orders to delete.
     * @example
     * // Delete a few Custom_orders
     * const { count } = await prisma.custom_orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends custom_ordersDeleteManyArgs>(args?: SelectSubset<T, custom_ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Custom_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Custom_orders
     * const custom_orders = await prisma.custom_orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends custom_ordersUpdateManyArgs>(args: SelectSubset<T, custom_ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Custom_orders.
     * @param {custom_ordersUpsertArgs} args - Arguments to update or create a Custom_orders.
     * @example
     * // Update or create a Custom_orders
     * const custom_orders = await prisma.custom_orders.upsert({
     *   create: {
     *     // ... data to create a Custom_orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Custom_orders we want to update
     *   }
     * })
     */
    upsert<T extends custom_ordersUpsertArgs>(args: SelectSubset<T, custom_ordersUpsertArgs<ExtArgs>>): Prisma__custom_ordersClient<$Result.GetResult<Prisma.$custom_ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Custom_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_ordersCountArgs} args - Arguments to filter Custom_orders to count.
     * @example
     * // Count the number of Custom_orders
     * const count = await prisma.custom_orders.count({
     *   where: {
     *     // ... the filter for the Custom_orders we want to count
     *   }
     * })
    **/
    count<T extends custom_ordersCountArgs>(
      args?: Subset<T, custom_ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Custom_ordersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Custom_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Custom_ordersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Custom_ordersAggregateArgs>(args: Subset<T, Custom_ordersAggregateArgs>): Prisma.PrismaPromise<GetCustom_ordersAggregateType<T>>

    /**
     * Group by Custom_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends custom_ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: custom_ordersGroupByArgs['orderBy'] }
        : { orderBy?: custom_ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, custom_ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustom_ordersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the custom_orders model
   */
  readonly fields: custom_ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for custom_orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__custom_ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends custom_orders$ordersArgs<ExtArgs> = {}>(args?: Subset<T, custom_orders$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the custom_orders model
   */
  interface custom_ordersFieldRefs {
    readonly id: FieldRef<"custom_orders", 'Int'>
    readonly order_id: FieldRef<"custom_orders", 'Int'>
    readonly request_description: FieldRef<"custom_orders", 'String'>
    readonly due_date: FieldRef<"custom_orders", 'DateTime'>
    readonly notes: FieldRef<"custom_orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * custom_orders findUnique
   */
  export type custom_ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * Filter, which custom_orders to fetch.
     */
    where: custom_ordersWhereUniqueInput
  }

  /**
   * custom_orders findUniqueOrThrow
   */
  export type custom_ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * Filter, which custom_orders to fetch.
     */
    where: custom_ordersWhereUniqueInput
  }

  /**
   * custom_orders findFirst
   */
  export type custom_ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * Filter, which custom_orders to fetch.
     */
    where?: custom_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_orders to fetch.
     */
    orderBy?: custom_ordersOrderByWithRelationInput | custom_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for custom_orders.
     */
    cursor?: custom_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of custom_orders.
     */
    distinct?: Custom_ordersScalarFieldEnum | Custom_ordersScalarFieldEnum[]
  }

  /**
   * custom_orders findFirstOrThrow
   */
  export type custom_ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * Filter, which custom_orders to fetch.
     */
    where?: custom_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_orders to fetch.
     */
    orderBy?: custom_ordersOrderByWithRelationInput | custom_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for custom_orders.
     */
    cursor?: custom_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of custom_orders.
     */
    distinct?: Custom_ordersScalarFieldEnum | Custom_ordersScalarFieldEnum[]
  }

  /**
   * custom_orders findMany
   */
  export type custom_ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * Filter, which custom_orders to fetch.
     */
    where?: custom_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_orders to fetch.
     */
    orderBy?: custom_ordersOrderByWithRelationInput | custom_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing custom_orders.
     */
    cursor?: custom_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_orders.
     */
    skip?: number
    distinct?: Custom_ordersScalarFieldEnum | Custom_ordersScalarFieldEnum[]
  }

  /**
   * custom_orders create
   */
  export type custom_ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a custom_orders.
     */
    data?: XOR<custom_ordersCreateInput, custom_ordersUncheckedCreateInput>
  }

  /**
   * custom_orders createMany
   */
  export type custom_ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many custom_orders.
     */
    data: custom_ordersCreateManyInput | custom_ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * custom_orders update
   */
  export type custom_ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a custom_orders.
     */
    data: XOR<custom_ordersUpdateInput, custom_ordersUncheckedUpdateInput>
    /**
     * Choose, which custom_orders to update.
     */
    where: custom_ordersWhereUniqueInput
  }

  /**
   * custom_orders updateMany
   */
  export type custom_ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update custom_orders.
     */
    data: XOR<custom_ordersUpdateManyMutationInput, custom_ordersUncheckedUpdateManyInput>
    /**
     * Filter which custom_orders to update
     */
    where?: custom_ordersWhereInput
    /**
     * Limit how many custom_orders to update.
     */
    limit?: number
  }

  /**
   * custom_orders upsert
   */
  export type custom_ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the custom_orders to update in case it exists.
     */
    where: custom_ordersWhereUniqueInput
    /**
     * In case the custom_orders found by the `where` argument doesn't exist, create a new custom_orders with this data.
     */
    create: XOR<custom_ordersCreateInput, custom_ordersUncheckedCreateInput>
    /**
     * In case the custom_orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<custom_ordersUpdateInput, custom_ordersUncheckedUpdateInput>
  }

  /**
   * custom_orders delete
   */
  export type custom_ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
    /**
     * Filter which custom_orders to delete.
     */
    where: custom_ordersWhereUniqueInput
  }

  /**
   * custom_orders deleteMany
   */
  export type custom_ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which custom_orders to delete
     */
    where?: custom_ordersWhereInput
    /**
     * Limit how many custom_orders to delete.
     */
    limit?: number
  }

  /**
   * custom_orders.orders
   */
  export type custom_orders$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * custom_orders without action
   */
  export type custom_ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_orders
     */
    select?: custom_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_orders
     */
    omit?: custom_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custom_ordersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    category: 'category',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    status: 'status',
    order_date: 'order_date',
    sub_total: 'sub_total',
    shipping_cost: 'shipping_cost',
    discount_amount: 'discount_amount',
    total_price: 'total_price',
    shipping_address: 'shipping_address',
    shipping_method: 'shipping_method',
    tracking_number: 'tracking_number',
    voucher_id: 'voucher_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const Raw_materialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stock: 'stock',
    unit: 'unit',
    reorder_level: 'reorder_level',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Raw_materialsScalarFieldEnum = (typeof Raw_materialsScalarFieldEnum)[keyof typeof Raw_materialsScalarFieldEnum]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    label: 'label',
    recipient: 'recipient',
    phone: 'phone',
    street: 'street',
    city: 'city',
    province: 'province',
    postal_code: 'postal_code',
    is_default: 'is_default'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const VouchersScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    discount_value: 'discount_value',
    discount_type: 'discount_type',
    max_discount: 'max_discount',
    min_purchase: 'min_purchase',
    valid_from: 'valid_from',
    valid_until: 'valid_until',
    usage_limit: 'usage_limit',
    current_usage: 'current_usage',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    status: 'status',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_gateway: 'payment_gateway',
    gateway_transaction_id: 'gateway_transaction_id',
    payment_code: 'payment_code',
    bank: 'bank',
    payment_url: 'payment_url',
    created_at: 'created_at',
    paid_at: 'paid_at',
    expires_at: 'expires_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    payment_id: 'payment_id',
    generated_date: 'generated_date',
    file_url: 'file_url'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const FeedbacksScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    order_id: 'order_id',
    message: 'message',
    rating: 'rating',
    submitted_at: 'submitted_at'
  };

  export type FeedbacksScalarFieldEnum = (typeof FeedbacksScalarFieldEnum)[keyof typeof FeedbacksScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    expense_type: 'expense_type',
    amount: 'amount',
    expense_date: 'expense_date',
    notes: 'notes'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const Custom_ordersScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    request_description: 'request_description',
    due_date: 'due_date',
    notes: 'notes'
  };

  export type Custom_ordersScalarFieldEnum = (typeof Custom_ordersScalarFieldEnum)[keyof typeof Custom_ordersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category',
    image_url: 'image_url'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ordersOrderByRelevanceFieldEnum: {
    shipping_method: 'shipping_method',
    tracking_number: 'tracking_number'
  };

  export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum]


  export const raw_materialsOrderByRelevanceFieldEnum: {
    name: 'name',
    unit: 'unit'
  };

  export type raw_materialsOrderByRelevanceFieldEnum = (typeof raw_materialsOrderByRelevanceFieldEnum)[keyof typeof raw_materialsOrderByRelevanceFieldEnum]


  export const addressesOrderByRelevanceFieldEnum: {
    label: 'label',
    recipient: 'recipient',
    phone: 'phone',
    street: 'street',
    city: 'city',
    province: 'province',
    postal_code: 'postal_code'
  };

  export type addressesOrderByRelevanceFieldEnum = (typeof addressesOrderByRelevanceFieldEnum)[keyof typeof addressesOrderByRelevanceFieldEnum]


  export const vouchersOrderByRelevanceFieldEnum: {
    code: 'code',
    description: 'description'
  };

  export type vouchersOrderByRelevanceFieldEnum = (typeof vouchersOrderByRelevanceFieldEnum)[keyof typeof vouchersOrderByRelevanceFieldEnum]


  export const paymentsOrderByRelevanceFieldEnum: {
    payment_method: 'payment_method',
    payment_gateway: 'payment_gateway',
    gateway_transaction_id: 'gateway_transaction_id',
    payment_code: 'payment_code',
    bank: 'bank',
    payment_url: 'payment_url'
  };

  export type paymentsOrderByRelevanceFieldEnum = (typeof paymentsOrderByRelevanceFieldEnum)[keyof typeof paymentsOrderByRelevanceFieldEnum]


  export const invoicesOrderByRelevanceFieldEnum: {
    file_url: 'file_url'
  };

  export type invoicesOrderByRelevanceFieldEnum = (typeof invoicesOrderByRelevanceFieldEnum)[keyof typeof invoicesOrderByRelevanceFieldEnum]


  export const feedbacksOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type feedbacksOrderByRelevanceFieldEnum = (typeof feedbacksOrderByRelevanceFieldEnum)[keyof typeof feedbacksOrderByRelevanceFieldEnum]


  export const expensesOrderByRelevanceFieldEnum: {
    expense_type: 'expense_type',
    notes: 'notes'
  };

  export type expensesOrderByRelevanceFieldEnum = (typeof expensesOrderByRelevanceFieldEnum)[keyof typeof expensesOrderByRelevanceFieldEnum]


  export const custom_ordersOrderByRelevanceFieldEnum: {
    request_description: 'request_description',
    notes: 'notes'
  };

  export type custom_ordersOrderByRelevanceFieldEnum = (typeof custom_ordersOrderByRelevanceFieldEnum)[keyof typeof custom_ordersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VoucherType'
   */
  export type EnumVoucherTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoucherType'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    addresses?: AddressesListRelationFilter
    orders?: OrdersListRelationFilter
    feedbacks?: FeedbacksListRelationFilter
    expenses?: ExpensesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    addresses?: addressesOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    feedbacks?: feedbacksOrderByRelationAggregateInput
    expenses?: expensesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    addresses?: AddressesListRelationFilter
    orders?: OrdersListRelationFilter
    feedbacks?: FeedbacksListRelationFilter
    expenses?: ExpensesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"products"> | number
    category?: StringNullableFilter<"products"> | string | null
    image_url?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    order_items?: Order_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    category?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"products"> | number
    category?: StringNullableFilter<"products"> | string | null
    image_url?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    order_items?: Order_itemsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    category?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"products"> | number
    category?: StringNullableWithAggregatesFilter<"products"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"products"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    customer_id?: IntFilter<"orders"> | number
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    order_date?: DateTimeFilter<"orders"> | Date | string
    sub_total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonFilter<"orders">
    shipping_method?: StringFilter<"orders"> | string
    tracking_number?: StringNullableFilter<"orders"> | string | null
    voucher_id?: IntNullableFilter<"orders"> | number | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    updated_at?: DateTimeFilter<"orders"> | Date | string
    customer?: XOR<UsersScalarRelationFilter, usersWhereInput>
    voucher?: XOR<VouchersNullableScalarRelationFilter, vouchersWhereInput> | null
    order_items?: Order_itemsListRelationFilter
    payment?: XOR<PaymentsNullableScalarRelationFilter, paymentsWhereInput> | null
    feedbacks?: FeedbacksListRelationFilter
    custom_order?: XOR<Custom_ordersNullableScalarRelationFilter, custom_ordersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    shipping_address?: SortOrder
    shipping_method?: SortOrder
    tracking_number?: SortOrderInput | SortOrder
    voucher_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer?: usersOrderByWithRelationInput
    voucher?: vouchersOrderByWithRelationInput
    order_items?: order_itemsOrderByRelationAggregateInput
    payment?: paymentsOrderByWithRelationInput
    feedbacks?: feedbacksOrderByRelationAggregateInput
    custom_order?: custom_ordersOrderByWithRelationInput
    _relevance?: ordersOrderByRelevanceInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_id?: IntFilter<"orders"> | number
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    order_date?: DateTimeFilter<"orders"> | Date | string
    sub_total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonFilter<"orders">
    shipping_method?: StringFilter<"orders"> | string
    tracking_number?: StringNullableFilter<"orders"> | string | null
    voucher_id?: IntNullableFilter<"orders"> | number | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    updated_at?: DateTimeFilter<"orders"> | Date | string
    customer?: XOR<UsersScalarRelationFilter, usersWhereInput>
    voucher?: XOR<VouchersNullableScalarRelationFilter, vouchersWhereInput> | null
    order_items?: Order_itemsListRelationFilter
    payment?: XOR<PaymentsNullableScalarRelationFilter, paymentsWhereInput> | null
    feedbacks?: FeedbacksListRelationFilter
    custom_order?: XOR<Custom_ordersNullableScalarRelationFilter, custom_ordersWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    shipping_address?: SortOrder
    shipping_method?: SortOrder
    tracking_number?: SortOrderInput | SortOrder
    voucher_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    customer_id?: IntWithAggregatesFilter<"orders"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"orders"> | $Enums.OrderStatus
    order_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    sub_total?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonWithAggregatesFilter<"orders">
    shipping_method?: StringWithAggregatesFilter<"orders"> | string
    tracking_number?: StringNullableWithAggregatesFilter<"orders"> | string | null
    voucher_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: ordersOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: IntWithAggregatesFilter<"order_items"> | number
    product_id?: IntWithAggregatesFilter<"order_items"> | number
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsWhereInput = {
    AND?: raw_materialsWhereInput | raw_materialsWhereInput[]
    OR?: raw_materialsWhereInput[]
    NOT?: raw_materialsWhereInput | raw_materialsWhereInput[]
    id?: IntFilter<"raw_materials"> | number
    name?: StringFilter<"raw_materials"> | string
    stock?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"raw_materials"> | string
    reorder_level?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"raw_materials"> | Date | string
    updated_at?: DateTimeFilter<"raw_materials"> | Date | string
  }

  export type raw_materialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    reorder_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: raw_materialsOrderByRelevanceInput
  }

  export type raw_materialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: raw_materialsWhereInput | raw_materialsWhereInput[]
    OR?: raw_materialsWhereInput[]
    NOT?: raw_materialsWhereInput | raw_materialsWhereInput[]
    stock?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"raw_materials"> | string
    reorder_level?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"raw_materials"> | Date | string
    updated_at?: DateTimeFilter<"raw_materials"> | Date | string
  }, "id" | "name">

  export type raw_materialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    reorder_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: raw_materialsCountOrderByAggregateInput
    _avg?: raw_materialsAvgOrderByAggregateInput
    _max?: raw_materialsMaxOrderByAggregateInput
    _min?: raw_materialsMinOrderByAggregateInput
    _sum?: raw_materialsSumOrderByAggregateInput
  }

  export type raw_materialsScalarWhereWithAggregatesInput = {
    AND?: raw_materialsScalarWhereWithAggregatesInput | raw_materialsScalarWhereWithAggregatesInput[]
    OR?: raw_materialsScalarWhereWithAggregatesInput[]
    NOT?: raw_materialsScalarWhereWithAggregatesInput | raw_materialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"raw_materials"> | number
    name?: StringWithAggregatesFilter<"raw_materials"> | string
    stock?: DecimalWithAggregatesFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    unit?: StringWithAggregatesFilter<"raw_materials"> | string
    reorder_level?: DecimalWithAggregatesFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"raw_materials"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"raw_materials"> | Date | string
  }

  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id?: IntFilter<"addresses"> | number
    user_id?: IntFilter<"addresses"> | number
    label?: StringFilter<"addresses"> | string
    recipient?: StringFilter<"addresses"> | string
    phone?: StringFilter<"addresses"> | string
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    province?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    is_default?: BoolFilter<"addresses"> | boolean
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type addressesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: addressesOrderByRelevanceInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    user_id?: IntFilter<"addresses"> | number
    label?: StringFilter<"addresses"> | string
    recipient?: StringFilter<"addresses"> | string
    phone?: StringFilter<"addresses"> | string
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    province?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    is_default?: BoolFilter<"addresses"> | boolean
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type addressesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
    _count?: addressesCountOrderByAggregateInput
    _avg?: addressesAvgOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
    _sum?: addressesSumOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"addresses"> | number
    user_id?: IntWithAggregatesFilter<"addresses"> | number
    label?: StringWithAggregatesFilter<"addresses"> | string
    recipient?: StringWithAggregatesFilter<"addresses"> | string
    phone?: StringWithAggregatesFilter<"addresses"> | string
    street?: StringWithAggregatesFilter<"addresses"> | string
    city?: StringWithAggregatesFilter<"addresses"> | string
    province?: StringWithAggregatesFilter<"addresses"> | string
    postal_code?: StringWithAggregatesFilter<"addresses"> | string
    is_default?: BoolWithAggregatesFilter<"addresses"> | boolean
  }

  export type vouchersWhereInput = {
    AND?: vouchersWhereInput | vouchersWhereInput[]
    OR?: vouchersWhereInput[]
    NOT?: vouchersWhereInput | vouchersWhereInput[]
    id?: IntFilter<"vouchers"> | number
    code?: StringFilter<"vouchers"> | string
    description?: StringNullableFilter<"vouchers"> | string | null
    discount_value?: DecimalFilter<"vouchers"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFilter<"vouchers"> | $Enums.VoucherType
    max_discount?: DecimalNullableFilter<"vouchers"> | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFilter<"vouchers"> | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFilter<"vouchers"> | Date | string
    valid_until?: DateTimeFilter<"vouchers"> | Date | string
    usage_limit?: IntFilter<"vouchers"> | number
    current_usage?: IntFilter<"vouchers"> | number
    created_at?: DateTimeFilter<"vouchers"> | Date | string
    updated_at?: DateTimeFilter<"vouchers"> | Date | string
    orders?: OrdersListRelationFilter
  }

  export type vouchersOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    discount_value?: SortOrder
    discount_type?: SortOrder
    max_discount?: SortOrderInput | SortOrder
    min_purchase?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: vouchersOrderByRelevanceInput
  }

  export type vouchersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: vouchersWhereInput | vouchersWhereInput[]
    OR?: vouchersWhereInput[]
    NOT?: vouchersWhereInput | vouchersWhereInput[]
    description?: StringNullableFilter<"vouchers"> | string | null
    discount_value?: DecimalFilter<"vouchers"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFilter<"vouchers"> | $Enums.VoucherType
    max_discount?: DecimalNullableFilter<"vouchers"> | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFilter<"vouchers"> | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFilter<"vouchers"> | Date | string
    valid_until?: DateTimeFilter<"vouchers"> | Date | string
    usage_limit?: IntFilter<"vouchers"> | number
    current_usage?: IntFilter<"vouchers"> | number
    created_at?: DateTimeFilter<"vouchers"> | Date | string
    updated_at?: DateTimeFilter<"vouchers"> | Date | string
    orders?: OrdersListRelationFilter
  }, "id" | "code">

  export type vouchersOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    discount_value?: SortOrder
    discount_type?: SortOrder
    max_discount?: SortOrderInput | SortOrder
    min_purchase?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vouchersCountOrderByAggregateInput
    _avg?: vouchersAvgOrderByAggregateInput
    _max?: vouchersMaxOrderByAggregateInput
    _min?: vouchersMinOrderByAggregateInput
    _sum?: vouchersSumOrderByAggregateInput
  }

  export type vouchersScalarWhereWithAggregatesInput = {
    AND?: vouchersScalarWhereWithAggregatesInput | vouchersScalarWhereWithAggregatesInput[]
    OR?: vouchersScalarWhereWithAggregatesInput[]
    NOT?: vouchersScalarWhereWithAggregatesInput | vouchersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vouchers"> | number
    code?: StringWithAggregatesFilter<"vouchers"> | string
    description?: StringNullableWithAggregatesFilter<"vouchers"> | string | null
    discount_value?: DecimalWithAggregatesFilter<"vouchers"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeWithAggregatesFilter<"vouchers"> | $Enums.VoucherType
    max_discount?: DecimalNullableWithAggregatesFilter<"vouchers"> | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalWithAggregatesFilter<"vouchers"> | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeWithAggregatesFilter<"vouchers"> | Date | string
    valid_until?: DateTimeWithAggregatesFilter<"vouchers"> | Date | string
    usage_limit?: IntWithAggregatesFilter<"vouchers"> | number
    current_usage?: IntWithAggregatesFilter<"vouchers"> | number
    created_at?: DateTimeWithAggregatesFilter<"vouchers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"vouchers"> | Date | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    order_id?: IntFilter<"payments"> | number
    status?: EnumPaymentStatusFilter<"payments"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    payment_gateway?: StringFilter<"payments"> | string
    gateway_transaction_id?: StringNullableFilter<"payments"> | string | null
    payment_code?: StringNullableFilter<"payments"> | string | null
    bank?: StringNullableFilter<"payments"> | string | null
    payment_url?: StringNullableFilter<"payments"> | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    expires_at?: DateTimeFilter<"payments"> | Date | string
    updated_at?: DateTimeFilter<"payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    invoice?: XOR<InvoicesNullableScalarRelationFilter, invoicesWhereInput> | null
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    payment_gateway?: SortOrder
    gateway_transaction_id?: SortOrderInput | SortOrder
    payment_code?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    payment_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    order?: ordersOrderByWithRelationInput
    invoice?: invoicesOrderByWithRelationInput
    _relevance?: paymentsOrderByRelevanceInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_id?: number
    gateway_transaction_id?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    status?: EnumPaymentStatusFilter<"payments"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    payment_gateway?: StringFilter<"payments"> | string
    payment_code?: StringNullableFilter<"payments"> | string | null
    bank?: StringNullableFilter<"payments"> | string | null
    payment_url?: StringNullableFilter<"payments"> | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    expires_at?: DateTimeFilter<"payments"> | Date | string
    updated_at?: DateTimeFilter<"payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    invoice?: XOR<InvoicesNullableScalarRelationFilter, invoicesWhereInput> | null
  }, "id" | "order_id" | "gateway_transaction_id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    payment_gateway?: SortOrder
    gateway_transaction_id?: SortOrderInput | SortOrder
    payment_code?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    payment_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    order_id?: IntWithAggregatesFilter<"payments"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"payments"> | $Enums.PaymentStatus
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableWithAggregatesFilter<"payments"> | string | null
    payment_gateway?: StringWithAggregatesFilter<"payments"> | string
    gateway_transaction_id?: StringNullableWithAggregatesFilter<"payments"> | string | null
    payment_code?: StringNullableWithAggregatesFilter<"payments"> | string | null
    bank?: StringNullableWithAggregatesFilter<"payments"> | string | null
    payment_url?: StringNullableWithAggregatesFilter<"payments"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    expires_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: IntFilter<"invoices"> | number
    payment_id?: IntFilter<"invoices"> | number
    generated_date?: DateTimeFilter<"invoices"> | Date | string
    file_url?: StringFilter<"invoices"> | string
    payment?: XOR<PaymentsScalarRelationFilter, paymentsWhereInput>
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    payment_id?: SortOrder
    generated_date?: SortOrder
    file_url?: SortOrder
    payment?: paymentsOrderByWithRelationInput
    _relevance?: invoicesOrderByRelevanceInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    payment_id?: number
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    generated_date?: DateTimeFilter<"invoices"> | Date | string
    file_url?: StringFilter<"invoices"> | string
    payment?: XOR<PaymentsScalarRelationFilter, paymentsWhereInput>
  }, "id" | "payment_id">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    payment_id?: SortOrder
    generated_date?: SortOrder
    file_url?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoices"> | number
    payment_id?: IntWithAggregatesFilter<"invoices"> | number
    generated_date?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    file_url?: StringWithAggregatesFilter<"invoices"> | string
  }

  export type feedbacksWhereInput = {
    AND?: feedbacksWhereInput | feedbacksWhereInput[]
    OR?: feedbacksWhereInput[]
    NOT?: feedbacksWhereInput | feedbacksWhereInput[]
    id?: IntFilter<"feedbacks"> | number
    customer_id?: IntFilter<"feedbacks"> | number
    order_id?: IntFilter<"feedbacks"> | number
    message?: StringNullableFilter<"feedbacks"> | string | null
    rating?: IntFilter<"feedbacks"> | number
    submitted_at?: DateTimeFilter<"feedbacks"> | Date | string
    customer?: XOR<UsersScalarRelationFilter, usersWhereInput>
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type feedbacksOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    message?: SortOrderInput | SortOrder
    rating?: SortOrder
    submitted_at?: SortOrder
    customer?: usersOrderByWithRelationInput
    order?: ordersOrderByWithRelationInput
    _relevance?: feedbacksOrderByRelevanceInput
  }

  export type feedbacksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_id?: number
    AND?: feedbacksWhereInput | feedbacksWhereInput[]
    OR?: feedbacksWhereInput[]
    NOT?: feedbacksWhereInput | feedbacksWhereInput[]
    customer_id?: IntFilter<"feedbacks"> | number
    message?: StringNullableFilter<"feedbacks"> | string | null
    rating?: IntFilter<"feedbacks"> | number
    submitted_at?: DateTimeFilter<"feedbacks"> | Date | string
    customer?: XOR<UsersScalarRelationFilter, usersWhereInput>
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "id" | "order_id">

  export type feedbacksOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    message?: SortOrderInput | SortOrder
    rating?: SortOrder
    submitted_at?: SortOrder
    _count?: feedbacksCountOrderByAggregateInput
    _avg?: feedbacksAvgOrderByAggregateInput
    _max?: feedbacksMaxOrderByAggregateInput
    _min?: feedbacksMinOrderByAggregateInput
    _sum?: feedbacksSumOrderByAggregateInput
  }

  export type feedbacksScalarWhereWithAggregatesInput = {
    AND?: feedbacksScalarWhereWithAggregatesInput | feedbacksScalarWhereWithAggregatesInput[]
    OR?: feedbacksScalarWhereWithAggregatesInput[]
    NOT?: feedbacksScalarWhereWithAggregatesInput | feedbacksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"feedbacks"> | number
    customer_id?: IntWithAggregatesFilter<"feedbacks"> | number
    order_id?: IntWithAggregatesFilter<"feedbacks"> | number
    message?: StringNullableWithAggregatesFilter<"feedbacks"> | string | null
    rating?: IntWithAggregatesFilter<"feedbacks"> | number
    submitted_at?: DateTimeWithAggregatesFilter<"feedbacks"> | Date | string
  }

  export type expensesWhereInput = {
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    id?: IntFilter<"expenses"> | number
    user_id?: IntNullableFilter<"expenses"> | number | null
    expense_type?: StringNullableFilter<"expenses"> | string | null
    amount?: DecimalNullableFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    expense_date?: DateTimeNullableFilter<"expenses"> | Date | string | null
    notes?: StringNullableFilter<"expenses"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type expensesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    expense_type?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    expense_date?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: expensesOrderByRelevanceInput
  }

  export type expensesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    user_id?: IntNullableFilter<"expenses"> | number | null
    expense_type?: StringNullableFilter<"expenses"> | string | null
    amount?: DecimalNullableFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    expense_date?: DateTimeNullableFilter<"expenses"> | Date | string | null
    notes?: StringNullableFilter<"expenses"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type expensesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    expense_type?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    expense_date?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: expensesCountOrderByAggregateInput
    _avg?: expensesAvgOrderByAggregateInput
    _max?: expensesMaxOrderByAggregateInput
    _min?: expensesMinOrderByAggregateInput
    _sum?: expensesSumOrderByAggregateInput
  }

  export type expensesScalarWhereWithAggregatesInput = {
    AND?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    OR?: expensesScalarWhereWithAggregatesInput[]
    NOT?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"expenses"> | number
    user_id?: IntNullableWithAggregatesFilter<"expenses"> | number | null
    expense_type?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    expense_date?: DateTimeNullableWithAggregatesFilter<"expenses"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"expenses"> | string | null
  }

  export type custom_ordersWhereInput = {
    AND?: custom_ordersWhereInput | custom_ordersWhereInput[]
    OR?: custom_ordersWhereInput[]
    NOT?: custom_ordersWhereInput | custom_ordersWhereInput[]
    id?: IntFilter<"custom_orders"> | number
    order_id?: IntNullableFilter<"custom_orders"> | number | null
    request_description?: StringNullableFilter<"custom_orders"> | string | null
    due_date?: DateTimeNullableFilter<"custom_orders"> | Date | string | null
    notes?: StringNullableFilter<"custom_orders"> | string | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
  }

  export type custom_ordersOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    request_description?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    _relevance?: custom_ordersOrderByRelevanceInput
  }

  export type custom_ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_id?: number
    AND?: custom_ordersWhereInput | custom_ordersWhereInput[]
    OR?: custom_ordersWhereInput[]
    NOT?: custom_ordersWhereInput | custom_ordersWhereInput[]
    request_description?: StringNullableFilter<"custom_orders"> | string | null
    due_date?: DateTimeNullableFilter<"custom_orders"> | Date | string | null
    notes?: StringNullableFilter<"custom_orders"> | string | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
  }, "id" | "order_id">

  export type custom_ordersOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    request_description?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: custom_ordersCountOrderByAggregateInput
    _avg?: custom_ordersAvgOrderByAggregateInput
    _max?: custom_ordersMaxOrderByAggregateInput
    _min?: custom_ordersMinOrderByAggregateInput
    _sum?: custom_ordersSumOrderByAggregateInput
  }

  export type custom_ordersScalarWhereWithAggregatesInput = {
    AND?: custom_ordersScalarWhereWithAggregatesInput | custom_ordersScalarWhereWithAggregatesInput[]
    OR?: custom_ordersScalarWhereWithAggregatesInput[]
    NOT?: custom_ordersScalarWhereWithAggregatesInput | custom_ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"custom_orders"> | number
    order_id?: IntNullableWithAggregatesFilter<"custom_orders"> | number | null
    request_description?: StringNullableWithAggregatesFilter<"custom_orders"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"custom_orders"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"custom_orders"> | string | null
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesCreateNestedManyWithoutUserInput
    orders?: ordersCreateNestedManyWithoutCustomerInput
    feedbacks?: feedbacksCreateNestedManyWithoutCustomerInput
    expenses?: expensesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesUncheckedCreateNestedManyWithoutUserInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutCustomerInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUpdateManyWithoutUserNestedInput
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    feedbacks?: feedbacksUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUncheckedUpdateManyWithoutUserNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    customer: usersCreateNestedOneWithoutOrdersInput
    voucher?: vouchersCreateNestedOneWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
    payment?: paymentsCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentsUncheckedCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutOrdersNestedInput
    voucher?: vouchersUpdateOneWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
    payment?: paymentsUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentsUncheckedUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemsCreateInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrder_itemsInput
    product: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsCreateInput = {
    name: string
    stock: Decimal | DecimalJsLike | number | string
    unit: string
    reorder_level?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type raw_materialsUncheckedCreateInput = {
    id?: number
    name: string
    stock: Decimal | DecimalJsLike | number | string
    unit: string
    reorder_level?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type raw_materialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    reorder_level?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    reorder_level?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsCreateManyInput = {
    id?: number
    name: string
    stock: Decimal | DecimalJsLike | number | string
    unit: string
    reorder_level?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type raw_materialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    reorder_level?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    reorder_level?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateInput = {
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default?: boolean
    user: usersCreateNestedOneWithoutAddressesInput
  }

  export type addressesUncheckedCreateInput = {
    id?: number
    user_id: number
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default?: boolean
  }

  export type addressesUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    user?: usersUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addressesCreateManyInput = {
    id?: number
    user_id: number
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default?: boolean
  }

  export type addressesUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type vouchersCreateInput = {
    code: string
    description?: string | null
    discount_value: Decimal | DecimalJsLike | number | string
    discount_type: $Enums.VoucherType
    max_discount?: Decimal | DecimalJsLike | number | string | null
    min_purchase?: Decimal | DecimalJsLike | number | string
    valid_from?: Date | string
    valid_until: Date | string
    usage_limit: number
    current_usage?: number
    created_at?: Date | string
    updated_at?: Date | string
    orders?: ordersCreateNestedManyWithoutVoucherInput
  }

  export type vouchersUncheckedCreateInput = {
    id?: number
    code: string
    description?: string | null
    discount_value: Decimal | DecimalJsLike | number | string
    discount_type: $Enums.VoucherType
    max_discount?: Decimal | DecimalJsLike | number | string | null
    min_purchase?: Decimal | DecimalJsLike | number | string
    valid_from?: Date | string
    valid_until: Date | string
    usage_limit: number
    current_usage?: number
    created_at?: Date | string
    updated_at?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type vouchersUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFieldUpdateOperationsInput | $Enums.VoucherType
    max_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    current_usage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutVoucherNestedInput
  }

  export type vouchersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFieldUpdateOperationsInput | $Enums.VoucherType
    max_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    current_usage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type vouchersCreateManyInput = {
    id?: number
    code: string
    description?: string | null
    discount_value: Decimal | DecimalJsLike | number | string
    discount_type: $Enums.VoucherType
    max_discount?: Decimal | DecimalJsLike | number | string | null
    min_purchase?: Decimal | DecimalJsLike | number | string
    valid_from?: Date | string
    valid_until: Date | string
    usage_limit: number
    current_usage?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vouchersUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFieldUpdateOperationsInput | $Enums.VoucherType
    max_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    current_usage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vouchersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFieldUpdateOperationsInput | $Enums.VoucherType
    max_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    current_usage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateInput = {
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
    order: ordersCreateNestedOneWithoutPaymentInput
    invoice?: invoicesCreateNestedOneWithoutPaymentInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    order_id: number
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
    invoice?: invoicesUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type paymentsUpdateInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ordersUpdateOneRequiredWithoutPaymentNestedInput
    invoice?: invoicesUpdateOneWithoutPaymentNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoicesUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type paymentsCreateManyInput = {
    id?: number
    order_id: number
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateInput = {
    generated_date?: Date | string
    file_url: string
    payment: paymentsCreateNestedOneWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: number
    payment_id: number
    generated_date?: Date | string
    file_url: string
  }

  export type invoicesUpdateInput = {
    generated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    file_url?: StringFieldUpdateOperationsInput | string
    payment?: paymentsUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_id?: IntFieldUpdateOperationsInput | number
    generated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    file_url?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesCreateManyInput = {
    id?: number
    payment_id: number
    generated_date?: Date | string
    file_url: string
  }

  export type invoicesUpdateManyMutationInput = {
    generated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    file_url?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_id?: IntFieldUpdateOperationsInput | number
    generated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    file_url?: StringFieldUpdateOperationsInput | string
  }

  export type feedbacksCreateInput = {
    message?: string | null
    rating: number
    submitted_at?: Date | string
    customer: usersCreateNestedOneWithoutFeedbacksInput
    order: ordersCreateNestedOneWithoutFeedbacksInput
  }

  export type feedbacksUncheckedCreateInput = {
    id?: number
    customer_id: number
    order_id: number
    message?: string | null
    rating: number
    submitted_at?: Date | string
  }

  export type feedbacksUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutFeedbacksNestedInput
    order?: ordersUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type feedbacksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksCreateManyInput = {
    id?: number
    customer_id: number
    order_id: number
    message?: string | null
    rating: number
    submitted_at?: Date | string
  }

  export type feedbacksUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateInput = {
    expense_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    expense_date?: Date | string | null
    notes?: string | null
    user?: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    expense_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    expense_date?: Date | string | null
    notes?: string | null
  }

  export type expensesUpdateInput = {
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expensesCreateManyInput = {
    id?: number
    user_id?: number | null
    expense_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    expense_date?: Date | string | null
    notes?: string | null
  }

  export type expensesUpdateManyMutationInput = {
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expensesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type custom_ordersCreateInput = {
    request_description?: string | null
    due_date?: Date | string | null
    notes?: string | null
    orders?: ordersCreateNestedOneWithoutCustom_orderInput
  }

  export type custom_ordersUncheckedCreateInput = {
    id?: number
    order_id?: number | null
    request_description?: string | null
    due_date?: Date | string | null
    notes?: string | null
  }

  export type custom_ordersUpdateInput = {
    request_description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateOneWithoutCustom_orderNestedInput
  }

  export type custom_ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    request_description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type custom_ordersCreateManyInput = {
    id?: number
    order_id?: number | null
    request_description?: string | null
    due_date?: Date | string | null
    notes?: string | null
  }

  export type custom_ordersUpdateManyMutationInput = {
    request_description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type custom_ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    request_description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressesListRelationFilter = {
    every?: addressesWhereInput
    some?: addressesWhereInput
    none?: addressesWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type FeedbacksListRelationFilter = {
    every?: feedbacksWhereInput
    some?: feedbacksWhereInput
    none?: feedbacksWhereInput
  }

  export type ExpensesListRelationFilter = {
    every?: expensesWhereInput
    some?: expensesWhereInput
    none?: expensesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type addressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type feedbacksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type VouchersNullableScalarRelationFilter = {
    is?: vouchersWhereInput | null
    isNot?: vouchersWhereInput | null
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: paymentsWhereInput | null
    isNot?: paymentsWhereInput | null
  }

  export type Custom_ordersNullableScalarRelationFilter = {
    is?: custom_ordersWhereInput | null
    isNot?: custom_ordersWhereInput | null
  }

  export type ordersOrderByRelevanceInput = {
    fields: ordersOrderByRelevanceFieldEnum | ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    shipping_address?: SortOrder
    shipping_method?: SortOrder
    tracking_number?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    voucher_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    shipping_method?: SortOrder
    tracking_number?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    shipping_method?: SortOrder
    tracking_number?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    sub_total?: SortOrder
    shipping_cost?: SortOrder
    discount_amount?: SortOrder
    total_price?: SortOrder
    voucher_id?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type raw_materialsOrderByRelevanceInput = {
    fields: raw_materialsOrderByRelevanceFieldEnum | raw_materialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type raw_materialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    reorder_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type raw_materialsAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    reorder_level?: SortOrder
  }

  export type raw_materialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    reorder_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type raw_materialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    reorder_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type raw_materialsSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    reorder_level?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type addressesOrderByRelevanceInput = {
    fields: addressesOrderByRelevanceFieldEnum | addressesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type addressesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
  }

  export type addressesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
  }

  export type addressesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVoucherTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherType | EnumVoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherType[]
    notIn?: $Enums.VoucherType[]
    not?: NestedEnumVoucherTypeFilter<$PrismaModel> | $Enums.VoucherType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type vouchersOrderByRelevanceInput = {
    fields: vouchersOrderByRelevanceFieldEnum | vouchersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vouchersCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    discount_value?: SortOrder
    discount_type?: SortOrder
    max_discount?: SortOrder
    min_purchase?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vouchersAvgOrderByAggregateInput = {
    id?: SortOrder
    discount_value?: SortOrder
    max_discount?: SortOrder
    min_purchase?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
  }

  export type vouchersMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    discount_value?: SortOrder
    discount_type?: SortOrder
    max_discount?: SortOrder
    min_purchase?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vouchersMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    discount_value?: SortOrder
    discount_type?: SortOrder
    max_discount?: SortOrder
    min_purchase?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vouchersSumOrderByAggregateInput = {
    id?: SortOrder
    discount_value?: SortOrder
    max_discount?: SortOrder
    min_purchase?: SortOrder
    usage_limit?: SortOrder
    current_usage?: SortOrder
  }

  export type EnumVoucherTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherType | EnumVoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherType[]
    notIn?: $Enums.VoucherType[]
    not?: NestedEnumVoucherTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoucherType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoucherTypeFilter<$PrismaModel>
    _max?: NestedEnumVoucherTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InvoicesNullableScalarRelationFilter = {
    is?: invoicesWhereInput | null
    isNot?: invoicesWhereInput | null
  }

  export type paymentsOrderByRelevanceInput = {
    fields: paymentsOrderByRelevanceFieldEnum | paymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_gateway?: SortOrder
    gateway_transaction_id?: SortOrder
    payment_code?: SortOrder
    bank?: SortOrder
    payment_url?: SortOrder
    created_at?: SortOrder
    paid_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_gateway?: SortOrder
    gateway_transaction_id?: SortOrder
    payment_code?: SortOrder
    bank?: SortOrder
    payment_url?: SortOrder
    created_at?: SortOrder
    paid_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_gateway?: SortOrder
    gateway_transaction_id?: SortOrder
    payment_code?: SortOrder
    bank?: SortOrder
    payment_url?: SortOrder
    created_at?: SortOrder
    paid_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PaymentsScalarRelationFilter = {
    is?: paymentsWhereInput
    isNot?: paymentsWhereInput
  }

  export type invoicesOrderByRelevanceInput = {
    fields: invoicesOrderByRelevanceFieldEnum | invoicesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
    generated_date?: SortOrder
    file_url?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
    generated_date?: SortOrder
    file_url?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
    generated_date?: SortOrder
    file_url?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
  }

  export type feedbacksOrderByRelevanceInput = {
    fields: feedbacksOrderByRelevanceFieldEnum | feedbacksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type feedbacksCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    message?: SortOrder
    rating?: SortOrder
    submitted_at?: SortOrder
  }

  export type feedbacksAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
  }

  export type feedbacksMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    message?: SortOrder
    rating?: SortOrder
    submitted_at?: SortOrder
  }

  export type feedbacksMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    message?: SortOrder
    rating?: SortOrder
    submitted_at?: SortOrder
  }

  export type feedbacksSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type expensesOrderByRelevanceInput = {
    fields: expensesOrderByRelevanceFieldEnum | expensesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type expensesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    expense_type?: SortOrder
    amount?: SortOrder
    expense_date?: SortOrder
    notes?: SortOrder
  }

  export type expensesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type expensesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    expense_type?: SortOrder
    amount?: SortOrder
    expense_date?: SortOrder
    notes?: SortOrder
  }

  export type expensesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    expense_type?: SortOrder
    amount?: SortOrder
    expense_date?: SortOrder
    notes?: SortOrder
  }

  export type expensesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type custom_ordersOrderByRelevanceInput = {
    fields: custom_ordersOrderByRelevanceFieldEnum | custom_ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type custom_ordersCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    request_description?: SortOrder
    due_date?: SortOrder
    notes?: SortOrder
  }

  export type custom_ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
  }

  export type custom_ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    request_description?: SortOrder
    due_date?: SortOrder
    notes?: SortOrder
  }

  export type custom_ordersMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    request_description?: SortOrder
    due_date?: SortOrder
    notes?: SortOrder
  }

  export type custom_ordersSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
  }

  export type addressesCreateNestedManyWithoutUserInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput> | addressesCreateWithoutUserInput[] | addressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput | addressesCreateOrConnectWithoutUserInput[]
    createMany?: addressesCreateManyUserInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type feedbacksCreateNestedManyWithoutCustomerInput = {
    create?: XOR<feedbacksCreateWithoutCustomerInput, feedbacksUncheckedCreateWithoutCustomerInput> | feedbacksCreateWithoutCustomerInput[] | feedbacksUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutCustomerInput | feedbacksCreateOrConnectWithoutCustomerInput[]
    createMany?: feedbacksCreateManyCustomerInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutUserInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type addressesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput> | addressesCreateWithoutUserInput[] | addressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput | addressesCreateOrConnectWithoutUserInput[]
    createMany?: addressesCreateManyUserInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type feedbacksUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<feedbacksCreateWithoutCustomerInput, feedbacksUncheckedCreateWithoutCustomerInput> | feedbacksCreateWithoutCustomerInput[] | feedbacksUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutCustomerInput | feedbacksCreateOrConnectWithoutCustomerInput[]
    createMany?: feedbacksCreateManyCustomerInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type addressesUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput> | addressesCreateWithoutUserInput[] | addressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput | addressesCreateOrConnectWithoutUserInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUserInput | addressesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressesCreateManyUserInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUserInput | addressesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUserInput | addressesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomerInput | ordersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomerInput | ordersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomerInput | ordersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type feedbacksUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<feedbacksCreateWithoutCustomerInput, feedbacksUncheckedCreateWithoutCustomerInput> | feedbacksCreateWithoutCustomerInput[] | feedbacksUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutCustomerInput | feedbacksCreateOrConnectWithoutCustomerInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutCustomerInput | feedbacksUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: feedbacksCreateManyCustomerInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutCustomerInput | feedbacksUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutCustomerInput | feedbacksUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutUserNestedInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUserInput | expensesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUserInput | expensesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUserInput | expensesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type addressesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput> | addressesCreateWithoutUserInput[] | addressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput | addressesCreateOrConnectWithoutUserInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUserInput | addressesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressesCreateManyUserInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUserInput | addressesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUserInput | addressesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomerInput | ordersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomerInput | ordersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomerInput | ordersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type feedbacksUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<feedbacksCreateWithoutCustomerInput, feedbacksUncheckedCreateWithoutCustomerInput> | feedbacksCreateWithoutCustomerInput[] | feedbacksUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutCustomerInput | feedbacksCreateOrConnectWithoutCustomerInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutCustomerInput | feedbacksUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: feedbacksCreateManyCustomerInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutCustomerInput | feedbacksUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutCustomerInput | feedbacksUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUserInput | expensesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUserInput | expensesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUserInput | expensesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductInput | order_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductInput | order_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductInput | order_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductInput | order_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductInput | order_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductInput | order_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type vouchersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<vouchersCreateWithoutOrdersInput, vouchersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: vouchersCreateOrConnectWithoutOrdersInput
    connect?: vouchersWhereUniqueInput
  }

  export type order_itemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type paymentsCreateNestedOneWithoutOrderInput = {
    create?: XOR<paymentsCreateWithoutOrderInput, paymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutOrderInput
    connect?: paymentsWhereUniqueInput
  }

  export type feedbacksCreateNestedManyWithoutOrderInput = {
    create?: XOR<feedbacksCreateWithoutOrderInput, feedbacksUncheckedCreateWithoutOrderInput> | feedbacksCreateWithoutOrderInput[] | feedbacksUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutOrderInput | feedbacksCreateOrConnectWithoutOrderInput[]
    createMany?: feedbacksCreateManyOrderInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type custom_ordersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<custom_ordersCreateWithoutOrdersInput, custom_ordersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: custom_ordersCreateOrConnectWithoutOrdersInput
    connect?: custom_ordersWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<paymentsCreateWithoutOrderInput, paymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutOrderInput
    connect?: paymentsWhereUniqueInput
  }

  export type feedbacksUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<feedbacksCreateWithoutOrderInput, feedbacksUncheckedCreateWithoutOrderInput> | feedbacksCreateWithoutOrderInput[] | feedbacksUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutOrderInput | feedbacksCreateOrConnectWithoutOrderInput[]
    createMany?: feedbacksCreateManyOrderInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type custom_ordersUncheckedCreateNestedOneWithoutOrdersInput = {
    create?: XOR<custom_ordersCreateWithoutOrdersInput, custom_ordersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: custom_ordersCreateOrConnectWithoutOrdersInput
    connect?: custom_ordersWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type vouchersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<vouchersCreateWithoutOrdersInput, vouchersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: vouchersCreateOrConnectWithoutOrdersInput
    upsert?: vouchersUpsertWithoutOrdersInput
    disconnect?: vouchersWhereInput | boolean
    delete?: vouchersWhereInput | boolean
    connect?: vouchersWhereUniqueInput
    update?: XOR<XOR<vouchersUpdateToOneWithWhereWithoutOrdersInput, vouchersUpdateWithoutOrdersInput>, vouchersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrderInput | order_itemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrderInput | order_itemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrderInput | order_itemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type paymentsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<paymentsCreateWithoutOrderInput, paymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutOrderInput
    upsert?: paymentsUpsertWithoutOrderInput
    disconnect?: paymentsWhereInput | boolean
    delete?: paymentsWhereInput | boolean
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutOrderInput, paymentsUpdateWithoutOrderInput>, paymentsUncheckedUpdateWithoutOrderInput>
  }

  export type feedbacksUpdateManyWithoutOrderNestedInput = {
    create?: XOR<feedbacksCreateWithoutOrderInput, feedbacksUncheckedCreateWithoutOrderInput> | feedbacksCreateWithoutOrderInput[] | feedbacksUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutOrderInput | feedbacksCreateOrConnectWithoutOrderInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutOrderInput | feedbacksUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: feedbacksCreateManyOrderInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutOrderInput | feedbacksUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutOrderInput | feedbacksUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type custom_ordersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<custom_ordersCreateWithoutOrdersInput, custom_ordersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: custom_ordersCreateOrConnectWithoutOrdersInput
    upsert?: custom_ordersUpsertWithoutOrdersInput
    disconnect?: custom_ordersWhereInput | boolean
    delete?: custom_ordersWhereInput | boolean
    connect?: custom_ordersWhereUniqueInput
    update?: XOR<XOR<custom_ordersUpdateToOneWithWhereWithoutOrdersInput, custom_ordersUpdateWithoutOrdersInput>, custom_ordersUncheckedUpdateWithoutOrdersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type order_itemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrderInput | order_itemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrderInput | order_itemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrderInput | order_itemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<paymentsCreateWithoutOrderInput, paymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutOrderInput
    upsert?: paymentsUpsertWithoutOrderInput
    disconnect?: paymentsWhereInput | boolean
    delete?: paymentsWhereInput | boolean
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutOrderInput, paymentsUpdateWithoutOrderInput>, paymentsUncheckedUpdateWithoutOrderInput>
  }

  export type feedbacksUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<feedbacksCreateWithoutOrderInput, feedbacksUncheckedCreateWithoutOrderInput> | feedbacksCreateWithoutOrderInput[] | feedbacksUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutOrderInput | feedbacksCreateOrConnectWithoutOrderInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutOrderInput | feedbacksUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: feedbacksCreateManyOrderInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutOrderInput | feedbacksUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutOrderInput | feedbacksUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<custom_ordersCreateWithoutOrdersInput, custom_ordersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: custom_ordersCreateOrConnectWithoutOrdersInput
    upsert?: custom_ordersUpsertWithoutOrdersInput
    disconnect?: custom_ordersWhereInput | boolean
    delete?: custom_ordersWhereInput | boolean
    connect?: custom_ordersWhereUniqueInput
    update?: XOR<XOR<custom_ordersUpdateToOneWithWhereWithoutOrdersInput, custom_ordersUpdateWithoutOrdersInput>, custom_ordersUncheckedUpdateWithoutOrdersInput>
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type usersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    upsert?: usersUpsertWithoutAddressesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressesInput, usersUpdateWithoutAddressesInput>, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type ordersCreateNestedManyWithoutVoucherInput = {
    create?: XOR<ordersCreateWithoutVoucherInput, ordersUncheckedCreateWithoutVoucherInput> | ordersCreateWithoutVoucherInput[] | ordersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutVoucherInput | ordersCreateOrConnectWithoutVoucherInput[]
    createMany?: ordersCreateManyVoucherInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<ordersCreateWithoutVoucherInput, ordersUncheckedCreateWithoutVoucherInput> | ordersCreateWithoutVoucherInput[] | ordersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutVoucherInput | ordersCreateOrConnectWithoutVoucherInput[]
    createMany?: ordersCreateManyVoucherInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type EnumVoucherTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoucherType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ordersUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<ordersCreateWithoutVoucherInput, ordersUncheckedCreateWithoutVoucherInput> | ordersCreateWithoutVoucherInput[] | ordersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutVoucherInput | ordersCreateOrConnectWithoutVoucherInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutVoucherInput | ordersUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: ordersCreateManyVoucherInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutVoucherInput | ordersUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutVoucherInput | ordersUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<ordersCreateWithoutVoucherInput, ordersUncheckedCreateWithoutVoucherInput> | ordersCreateWithoutVoucherInput[] | ordersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutVoucherInput | ordersCreateOrConnectWithoutVoucherInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutVoucherInput | ordersUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: ordersCreateManyVoucherInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutVoucherInput | ordersUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutVoucherInput | ordersUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentInput
    connect?: ordersWhereUniqueInput
  }

  export type invoicesCreateNestedOneWithoutPaymentInput = {
    create?: XOR<invoicesCreateWithoutPaymentInput, invoicesUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutPaymentInput
    connect?: invoicesWhereUniqueInput
  }

  export type invoicesUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<invoicesCreateWithoutPaymentInput, invoicesUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutPaymentInput
    connect?: invoicesWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ordersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentInput
    upsert?: ordersUpsertWithoutPaymentInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutPaymentInput, ordersUpdateWithoutPaymentInput>, ordersUncheckedUpdateWithoutPaymentInput>
  }

  export type invoicesUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<invoicesCreateWithoutPaymentInput, invoicesUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutPaymentInput
    upsert?: invoicesUpsertWithoutPaymentInput
    disconnect?: invoicesWhereInput | boolean
    delete?: invoicesWhereInput | boolean
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutPaymentInput, invoicesUpdateWithoutPaymentInput>, invoicesUncheckedUpdateWithoutPaymentInput>
  }

  export type invoicesUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<invoicesCreateWithoutPaymentInput, invoicesUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutPaymentInput
    upsert?: invoicesUpsertWithoutPaymentInput
    disconnect?: invoicesWhereInput | boolean
    delete?: invoicesWhereInput | boolean
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutPaymentInput, invoicesUpdateWithoutPaymentInput>, invoicesUncheckedUpdateWithoutPaymentInput>
  }

  export type paymentsCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<paymentsCreateWithoutInvoiceInput, paymentsUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutInvoiceInput
    connect?: paymentsWhereUniqueInput
  }

  export type paymentsUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<paymentsCreateWithoutInvoiceInput, paymentsUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutInvoiceInput
    upsert?: paymentsUpsertWithoutInvoiceInput
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutInvoiceInput, paymentsUpdateWithoutInvoiceInput>, paymentsUncheckedUpdateWithoutInvoiceInput>
  }

  export type usersCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: usersCreateOrConnectWithoutFeedbacksInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<ordersCreateWithoutFeedbacksInput, ordersUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFeedbacksInput
    connect?: ordersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: usersCreateOrConnectWithoutFeedbacksInput
    upsert?: usersUpsertWithoutFeedbacksInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFeedbacksInput, usersUpdateWithoutFeedbacksInput>, usersUncheckedUpdateWithoutFeedbacksInput>
  }

  export type ordersUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<ordersCreateWithoutFeedbacksInput, ordersUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFeedbacksInput
    upsert?: ordersUpsertWithoutFeedbacksInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutFeedbacksInput, ordersUpdateWithoutFeedbacksInput>, ordersUncheckedUpdateWithoutFeedbacksInput>
  }

  export type usersCreateNestedOneWithoutExpensesInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    upsert?: usersUpsertWithoutExpensesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExpensesInput, usersUpdateWithoutExpensesInput>, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type ordersCreateNestedOneWithoutCustom_orderInput = {
    create?: XOR<ordersCreateWithoutCustom_orderInput, ordersUncheckedCreateWithoutCustom_orderInput>
    connectOrCreate?: ordersCreateOrConnectWithoutCustom_orderInput
    connect?: ordersWhereUniqueInput
  }

  export type ordersUpdateOneWithoutCustom_orderNestedInput = {
    create?: XOR<ordersCreateWithoutCustom_orderInput, ordersUncheckedCreateWithoutCustom_orderInput>
    connectOrCreate?: ordersCreateOrConnectWithoutCustom_orderInput
    upsert?: ordersUpsertWithoutCustom_orderInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutCustom_orderInput, ordersUpdateWithoutCustom_orderInput>, ordersUncheckedUpdateWithoutCustom_orderInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVoucherTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherType | EnumVoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherType[]
    notIn?: $Enums.VoucherType[]
    not?: NestedEnumVoucherTypeFilter<$PrismaModel> | $Enums.VoucherType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumVoucherTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherType | EnumVoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherType[]
    notIn?: $Enums.VoucherType[]
    not?: NestedEnumVoucherTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoucherType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoucherTypeFilter<$PrismaModel>
    _max?: NestedEnumVoucherTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type addressesCreateWithoutUserInput = {
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default?: boolean
  }

  export type addressesUncheckedCreateWithoutUserInput = {
    id?: number
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default?: boolean
  }

  export type addressesCreateOrConnectWithoutUserInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
  }

  export type addressesCreateManyUserInputEnvelope = {
    data: addressesCreateManyUserInput | addressesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutCustomerInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    voucher?: vouchersCreateNestedOneWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
    payment?: paymentsCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutCustomerInput = {
    id?: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentsUncheckedCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCustomerInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput>
  }

  export type ordersCreateManyCustomerInputEnvelope = {
    data: ordersCreateManyCustomerInput | ordersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type feedbacksCreateWithoutCustomerInput = {
    message?: string | null
    rating: number
    submitted_at?: Date | string
    order: ordersCreateNestedOneWithoutFeedbacksInput
  }

  export type feedbacksUncheckedCreateWithoutCustomerInput = {
    id?: number
    order_id: number
    message?: string | null
    rating: number
    submitted_at?: Date | string
  }

  export type feedbacksCreateOrConnectWithoutCustomerInput = {
    where: feedbacksWhereUniqueInput
    create: XOR<feedbacksCreateWithoutCustomerInput, feedbacksUncheckedCreateWithoutCustomerInput>
  }

  export type feedbacksCreateManyCustomerInputEnvelope = {
    data: feedbacksCreateManyCustomerInput | feedbacksCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type expensesCreateWithoutUserInput = {
    expense_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    expense_date?: Date | string | null
    notes?: string | null
  }

  export type expensesUncheckedCreateWithoutUserInput = {
    id?: number
    expense_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    expense_date?: Date | string | null
    notes?: string | null
  }

  export type expensesCreateOrConnectWithoutUserInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput>
  }

  export type expensesCreateManyUserInputEnvelope = {
    data: expensesCreateManyUserInput | expensesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type addressesUpsertWithWhereUniqueWithoutUserInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUpdateWithoutUserInput, addressesUncheckedUpdateWithoutUserInput>
    create: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutUserInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUpdateWithoutUserInput, addressesUncheckedUpdateWithoutUserInput>
  }

  export type addressesUpdateManyWithWhereWithoutUserInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyWithoutUserInput>
  }

  export type addressesScalarWhereInput = {
    AND?: addressesScalarWhereInput | addressesScalarWhereInput[]
    OR?: addressesScalarWhereInput[]
    NOT?: addressesScalarWhereInput | addressesScalarWhereInput[]
    id?: IntFilter<"addresses"> | number
    user_id?: IntFilter<"addresses"> | number
    label?: StringFilter<"addresses"> | string
    recipient?: StringFilter<"addresses"> | string
    phone?: StringFilter<"addresses"> | string
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    province?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    is_default?: BoolFilter<"addresses"> | boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomerInput, ordersUncheckedUpdateWithoutCustomerInput>
    create: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomerInput, ordersUncheckedUpdateWithoutCustomerInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomerInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    customer_id?: IntFilter<"orders"> | number
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    order_date?: DateTimeFilter<"orders"> | Date | string
    sub_total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonFilter<"orders">
    shipping_method?: StringFilter<"orders"> | string
    tracking_number?: StringNullableFilter<"orders"> | string | null
    voucher_id?: IntNullableFilter<"orders"> | number | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    updated_at?: DateTimeFilter<"orders"> | Date | string
  }

  export type feedbacksUpsertWithWhereUniqueWithoutCustomerInput = {
    where: feedbacksWhereUniqueInput
    update: XOR<feedbacksUpdateWithoutCustomerInput, feedbacksUncheckedUpdateWithoutCustomerInput>
    create: XOR<feedbacksCreateWithoutCustomerInput, feedbacksUncheckedCreateWithoutCustomerInput>
  }

  export type feedbacksUpdateWithWhereUniqueWithoutCustomerInput = {
    where: feedbacksWhereUniqueInput
    data: XOR<feedbacksUpdateWithoutCustomerInput, feedbacksUncheckedUpdateWithoutCustomerInput>
  }

  export type feedbacksUpdateManyWithWhereWithoutCustomerInput = {
    where: feedbacksScalarWhereInput
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyWithoutCustomerInput>
  }

  export type feedbacksScalarWhereInput = {
    AND?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
    OR?: feedbacksScalarWhereInput[]
    NOT?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
    id?: IntFilter<"feedbacks"> | number
    customer_id?: IntFilter<"feedbacks"> | number
    order_id?: IntFilter<"feedbacks"> | number
    message?: StringNullableFilter<"feedbacks"> | string | null
    rating?: IntFilter<"feedbacks"> | number
    submitted_at?: DateTimeFilter<"feedbacks"> | Date | string
  }

  export type expensesUpsertWithWhereUniqueWithoutUserInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutUserInput, expensesUncheckedUpdateWithoutUserInput>
    create: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutUserInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutUserInput, expensesUncheckedUpdateWithoutUserInput>
  }

  export type expensesUpdateManyWithWhereWithoutUserInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutUserInput>
  }

  export type expensesScalarWhereInput = {
    AND?: expensesScalarWhereInput | expensesScalarWhereInput[]
    OR?: expensesScalarWhereInput[]
    NOT?: expensesScalarWhereInput | expensesScalarWhereInput[]
    id?: IntFilter<"expenses"> | number
    user_id?: IntNullableFilter<"expenses"> | number | null
    expense_type?: StringNullableFilter<"expenses"> | string | null
    amount?: DecimalNullableFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    expense_date?: DateTimeNullableFilter<"expenses"> | Date | string | null
    notes?: StringNullableFilter<"expenses"> | string | null
  }

  export type order_itemsCreateWithoutProductInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductInput = {
    id?: number
    order_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutProductInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput>
  }

  export type order_itemsCreateManyProductInputEnvelope = {
    data: order_itemsCreateManyProductInput | order_itemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductInput, order_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductInput, order_itemsUncheckedUpdateWithoutProductInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type usersCreateWithoutOrdersInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesCreateNestedManyWithoutUserInput
    feedbacks?: feedbacksCreateNestedManyWithoutCustomerInput
    expenses?: expensesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesUncheckedCreateNestedManyWithoutUserInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutCustomerInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type vouchersCreateWithoutOrdersInput = {
    code: string
    description?: string | null
    discount_value: Decimal | DecimalJsLike | number | string
    discount_type: $Enums.VoucherType
    max_discount?: Decimal | DecimalJsLike | number | string | null
    min_purchase?: Decimal | DecimalJsLike | number | string
    valid_from?: Date | string
    valid_until: Date | string
    usage_limit: number
    current_usage?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vouchersUncheckedCreateWithoutOrdersInput = {
    id?: number
    code: string
    description?: string | null
    discount_value: Decimal | DecimalJsLike | number | string
    discount_type: $Enums.VoucherType
    max_discount?: Decimal | DecimalJsLike | number | string | null
    min_purchase?: Decimal | DecimalJsLike | number | string
    valid_from?: Date | string
    valid_until: Date | string
    usage_limit: number
    current_usage?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vouchersCreateOrConnectWithoutOrdersInput = {
    where: vouchersWhereUniqueInput
    create: XOR<vouchersCreateWithoutOrdersInput, vouchersUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateWithoutOrderInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    product: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrderInput = {
    id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutOrderInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput>
  }

  export type order_itemsCreateManyOrderInputEnvelope = {
    data: order_itemsCreateManyOrderInput | order_itemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutOrderInput = {
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
    invoice?: invoicesCreateNestedOneWithoutPaymentInput
  }

  export type paymentsUncheckedCreateWithoutOrderInput = {
    id?: number
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
    invoice?: invoicesUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type paymentsCreateOrConnectWithoutOrderInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutOrderInput, paymentsUncheckedCreateWithoutOrderInput>
  }

  export type feedbacksCreateWithoutOrderInput = {
    message?: string | null
    rating: number
    submitted_at?: Date | string
    customer: usersCreateNestedOneWithoutFeedbacksInput
  }

  export type feedbacksUncheckedCreateWithoutOrderInput = {
    id?: number
    customer_id: number
    message?: string | null
    rating: number
    submitted_at?: Date | string
  }

  export type feedbacksCreateOrConnectWithoutOrderInput = {
    where: feedbacksWhereUniqueInput
    create: XOR<feedbacksCreateWithoutOrderInput, feedbacksUncheckedCreateWithoutOrderInput>
  }

  export type feedbacksCreateManyOrderInputEnvelope = {
    data: feedbacksCreateManyOrderInput | feedbacksCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type custom_ordersCreateWithoutOrdersInput = {
    request_description?: string | null
    due_date?: Date | string | null
    notes?: string | null
  }

  export type custom_ordersUncheckedCreateWithoutOrdersInput = {
    id?: number
    request_description?: string | null
    due_date?: Date | string | null
    notes?: string | null
  }

  export type custom_ordersCreateOrConnectWithoutOrdersInput = {
    where: custom_ordersWhereUniqueInput
    create: XOR<custom_ordersCreateWithoutOrdersInput, custom_ordersUncheckedCreateWithoutOrdersInput>
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUpdateManyWithoutUserNestedInput
    feedbacks?: feedbacksUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUncheckedUpdateManyWithoutUserNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type vouchersUpsertWithoutOrdersInput = {
    update: XOR<vouchersUpdateWithoutOrdersInput, vouchersUncheckedUpdateWithoutOrdersInput>
    create: XOR<vouchersCreateWithoutOrdersInput, vouchersUncheckedCreateWithoutOrdersInput>
    where?: vouchersWhereInput
  }

  export type vouchersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: vouchersWhereInput
    data: XOR<vouchersUpdateWithoutOrdersInput, vouchersUncheckedUpdateWithoutOrdersInput>
  }

  export type vouchersUpdateWithoutOrdersInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFieldUpdateOperationsInput | $Enums.VoucherType
    max_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    current_usage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vouchersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumVoucherTypeFieldUpdateOperationsInput | $Enums.VoucherType
    max_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    current_usage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrderInput, order_itemsUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrderInput, order_itemsUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type paymentsUpsertWithoutOrderInput = {
    update: XOR<paymentsUpdateWithoutOrderInput, paymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<paymentsCreateWithoutOrderInput, paymentsUncheckedCreateWithoutOrderInput>
    where?: paymentsWhereInput
  }

  export type paymentsUpdateToOneWithWhereWithoutOrderInput = {
    where?: paymentsWhereInput
    data: XOR<paymentsUpdateWithoutOrderInput, paymentsUncheckedUpdateWithoutOrderInput>
  }

  export type paymentsUpdateWithoutOrderInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoicesUpdateOneWithoutPaymentNestedInput
  }

  export type paymentsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoicesUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type feedbacksUpsertWithWhereUniqueWithoutOrderInput = {
    where: feedbacksWhereUniqueInput
    update: XOR<feedbacksUpdateWithoutOrderInput, feedbacksUncheckedUpdateWithoutOrderInput>
    create: XOR<feedbacksCreateWithoutOrderInput, feedbacksUncheckedCreateWithoutOrderInput>
  }

  export type feedbacksUpdateWithWhereUniqueWithoutOrderInput = {
    where: feedbacksWhereUniqueInput
    data: XOR<feedbacksUpdateWithoutOrderInput, feedbacksUncheckedUpdateWithoutOrderInput>
  }

  export type feedbacksUpdateManyWithWhereWithoutOrderInput = {
    where: feedbacksScalarWhereInput
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyWithoutOrderInput>
  }

  export type custom_ordersUpsertWithoutOrdersInput = {
    update: XOR<custom_ordersUpdateWithoutOrdersInput, custom_ordersUncheckedUpdateWithoutOrdersInput>
    create: XOR<custom_ordersCreateWithoutOrdersInput, custom_ordersUncheckedCreateWithoutOrdersInput>
    where?: custom_ordersWhereInput
  }

  export type custom_ordersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: custom_ordersWhereInput
    data: XOR<custom_ordersUpdateWithoutOrdersInput, custom_ordersUncheckedUpdateWithoutOrdersInput>
  }

  export type custom_ordersUpdateWithoutOrdersInput = {
    request_description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type custom_ordersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    customer: usersCreateNestedOneWithoutOrdersInput
    voucher?: vouchersCreateNestedOneWithoutOrdersInput
    payment?: paymentsCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    payment?: paymentsUncheckedCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutOrdersNestedInput
    voucher?: vouchersUpdateOneWithoutOrdersNestedInput
    payment?: paymentsUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentsUncheckedUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutAddressesInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    orders?: ordersCreateNestedManyWithoutCustomerInput
    feedbacks?: feedbacksCreateNestedManyWithoutCustomerInput
    expenses?: expensesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutCustomerInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAddressesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
  }

  export type usersUpsertWithoutAddressesInput = {
    update: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type usersUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    feedbacks?: feedbacksUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ordersCreateWithoutVoucherInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    customer: usersCreateNestedOneWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
    payment?: paymentsCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutVoucherInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentsUncheckedCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutVoucherInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutVoucherInput, ordersUncheckedCreateWithoutVoucherInput>
  }

  export type ordersCreateManyVoucherInputEnvelope = {
    data: ordersCreateManyVoucherInput | ordersCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutVoucherInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutVoucherInput, ordersUncheckedUpdateWithoutVoucherInput>
    create: XOR<ordersCreateWithoutVoucherInput, ordersUncheckedCreateWithoutVoucherInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutVoucherInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutVoucherInput, ordersUncheckedUpdateWithoutVoucherInput>
  }

  export type ordersUpdateManyWithWhereWithoutVoucherInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutVoucherInput>
  }

  export type ordersCreateWithoutPaymentInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    customer: usersCreateNestedOneWithoutOrdersInput
    voucher?: vouchersCreateNestedOneWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
    feedbacks?: feedbacksCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutPaymentInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutOrderInput
    custom_order?: custom_ordersUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutPaymentInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
  }

  export type invoicesCreateWithoutPaymentInput = {
    generated_date?: Date | string
    file_url: string
  }

  export type invoicesUncheckedCreateWithoutPaymentInput = {
    id?: number
    generated_date?: Date | string
    file_url: string
  }

  export type invoicesCreateOrConnectWithoutPaymentInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutPaymentInput, invoicesUncheckedCreateWithoutPaymentInput>
  }

  export type ordersUpsertWithoutPaymentInput = {
    update: XOR<ordersUpdateWithoutPaymentInput, ordersUncheckedUpdateWithoutPaymentInput>
    create: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutPaymentInput, ordersUncheckedUpdateWithoutPaymentInput>
  }

  export type ordersUpdateWithoutPaymentInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutOrdersNestedInput
    voucher?: vouchersUpdateOneWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
    feedbacks?: feedbacksUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type invoicesUpsertWithoutPaymentInput = {
    update: XOR<invoicesUpdateWithoutPaymentInput, invoicesUncheckedUpdateWithoutPaymentInput>
    create: XOR<invoicesCreateWithoutPaymentInput, invoicesUncheckedCreateWithoutPaymentInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutPaymentInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutPaymentInput, invoicesUncheckedUpdateWithoutPaymentInput>
  }

  export type invoicesUpdateWithoutPaymentInput = {
    generated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    file_url?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    generated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    file_url?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsCreateWithoutInvoiceInput = {
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
    order: ordersCreateNestedOneWithoutPaymentInput
  }

  export type paymentsUncheckedCreateWithoutInvoiceInput = {
    id?: number
    order_id: number
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_gateway?: string
    gateway_transaction_id?: string | null
    payment_code?: string | null
    bank?: string | null
    payment_url?: string | null
    created_at?: Date | string
    paid_at?: Date | string | null
    expires_at: Date | string
    updated_at?: Date | string
  }

  export type paymentsCreateOrConnectWithoutInvoiceInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutInvoiceInput, paymentsUncheckedCreateWithoutInvoiceInput>
  }

  export type paymentsUpsertWithoutInvoiceInput = {
    update: XOR<paymentsUpdateWithoutInvoiceInput, paymentsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<paymentsCreateWithoutInvoiceInput, paymentsUncheckedCreateWithoutInvoiceInput>
    where?: paymentsWhereInput
  }

  export type paymentsUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: paymentsWhereInput
    data: XOR<paymentsUpdateWithoutInvoiceInput, paymentsUncheckedUpdateWithoutInvoiceInput>
  }

  export type paymentsUpdateWithoutInvoiceInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ordersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentsUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_gateway?: StringFieldUpdateOperationsInput | string
    gateway_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_code?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutFeedbacksInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesCreateNestedManyWithoutUserInput
    orders?: ordersCreateNestedManyWithoutCustomerInput
    expenses?: expensesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesUncheckedCreateNestedManyWithoutUserInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutFeedbacksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
  }

  export type ordersCreateWithoutFeedbacksInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    customer: usersCreateNestedOneWithoutOrdersInput
    voucher?: vouchersCreateNestedOneWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
    payment?: paymentsCreateNestedOneWithoutOrderInput
    custom_order?: custom_ordersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentsUncheckedCreateNestedOneWithoutOrderInput
    custom_order?: custom_ordersUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutFeedbacksInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFeedbacksInput, ordersUncheckedCreateWithoutFeedbacksInput>
  }

  export type usersUpsertWithoutFeedbacksInput = {
    update: XOR<usersUpdateWithoutFeedbacksInput, usersUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFeedbacksInput, usersUncheckedUpdateWithoutFeedbacksInput>
  }

  export type usersUpdateWithoutFeedbacksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUpdateManyWithoutUserNestedInput
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUncheckedUpdateManyWithoutUserNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ordersUpsertWithoutFeedbacksInput = {
    update: XOR<ordersUpdateWithoutFeedbacksInput, ordersUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<ordersCreateWithoutFeedbacksInput, ordersUncheckedCreateWithoutFeedbacksInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutFeedbacksInput, ordersUncheckedUpdateWithoutFeedbacksInput>
  }

  export type ordersUpdateWithoutFeedbacksInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutOrdersNestedInput
    voucher?: vouchersUpdateOneWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
    payment?: paymentsUpdateOneWithoutOrderNestedInput
    custom_order?: custom_ordersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentsUncheckedUpdateOneWithoutOrderNestedInput
    custom_order?: custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type usersCreateWithoutExpensesInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesCreateNestedManyWithoutUserInput
    orders?: ordersCreateNestedManyWithoutCustomerInput
    feedbacks?: feedbacksCreateNestedManyWithoutCustomerInput
  }

  export type usersUncheckedCreateWithoutExpensesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesUncheckedCreateNestedManyWithoutUserInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type usersCreateOrConnectWithoutExpensesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
  }

  export type usersUpsertWithoutExpensesInput = {
    update: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExpensesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUpdateManyWithoutUserNestedInput
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    feedbacks?: feedbacksUpdateManyWithoutCustomerNestedInput
  }

  export type usersUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUncheckedUpdateManyWithoutUserNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ordersCreateWithoutCustom_orderInput = {
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    customer: usersCreateNestedOneWithoutOrdersInput
    voucher?: vouchersCreateNestedOneWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
    payment?: paymentsCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateWithoutCustom_orderInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentsUncheckedCreateNestedOneWithoutOrderInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersCreateOrConnectWithoutCustom_orderInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustom_orderInput, ordersUncheckedCreateWithoutCustom_orderInput>
  }

  export type ordersUpsertWithoutCustom_orderInput = {
    update: XOR<ordersUpdateWithoutCustom_orderInput, ordersUncheckedUpdateWithoutCustom_orderInput>
    create: XOR<ordersCreateWithoutCustom_orderInput, ordersUncheckedCreateWithoutCustom_orderInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutCustom_orderInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutCustom_orderInput, ordersUncheckedUpdateWithoutCustom_orderInput>
  }

  export type ordersUpdateWithoutCustom_orderInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutOrdersNestedInput
    voucher?: vouchersUpdateOneWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
    payment?: paymentsUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustom_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentsUncheckedUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type addressesCreateManyUserInput = {
    id?: number
    label: string
    recipient: string
    phone: string
    street: string
    city: string
    province: string
    postal_code: string
    is_default?: boolean
  }

  export type ordersCreateManyCustomerInput = {
    id?: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    voucher_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type feedbacksCreateManyCustomerInput = {
    id?: number
    order_id: number
    message?: string | null
    rating: number
    submitted_at?: Date | string
  }

  export type expensesCreateManyUserInput = {
    id?: number
    expense_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    expense_date?: Date | string | null
    notes?: string | null
  }

  export type addressesUpdateWithoutUserInput = {
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addressesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addressesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ordersUpdateWithoutCustomerInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: vouchersUpdateOneWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
    payment?: paymentsUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentsUncheckedUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUpdateWithoutCustomerInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ordersUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type feedbacksUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUpdateWithoutUserInput = {
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expensesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expensesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expense_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expense_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateManyProductInput = {
    id?: number
    order_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyOrderInput = {
    id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type feedbacksCreateManyOrderInput = {
    id?: number
    customer_id: number
    message?: string | null
    rating: number
    submitted_at?: Date | string
  }

  export type order_itemsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type feedbacksUpdateWithoutOrderInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type feedbacksUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyVoucherInput = {
    id?: number
    customer_id: number
    status?: $Enums.OrderStatus
    order_date?: Date | string
    sub_total: Decimal | DecimalJsLike | number | string
    shipping_cost: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_address: JsonNullValueInput | InputJsonValue
    shipping_method: string
    tracking_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ordersUpdateWithoutVoucherInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: usersUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
    payment?: paymentsUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentsUncheckedUpdateOneWithoutOrderNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutOrderNestedInput
    custom_order?: custom_ordersUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: JsonNullValueInput | InputJsonValue
    shipping_method?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}