import {
  cartContext,
  CartControls,
  CartDisplay,
  CartTotals,
} from '@/components/cart';
import { ContinueShopping } from '@/components/ui/ContinueShopping';
import { Layout } from '@/layouts';
import Head from 'next/head';
import { useContext } from 'react';

const CartPage = () => {
  const { cartProducts, loading } = useContext(cartContext);

  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>

          <section className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <CartDisplay></CartDisplay>

              {/* coupon form */}
              {/* ignore Update Cart button */}
            </div>

            <aside className="col-span-4">
              <CartTotals></CartTotals>

              <div>
                {!loading ? (
                  <button
                    type="button"
                    title="Proceed to checkout"
                    onClick={() => {
                      console.log(cartProducts);
                    }}
                  >
                    Proceed to checkout
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
