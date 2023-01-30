import { CartControls } from '@/components/cart';
import { ContinueShopping } from '@/components/ui/ContinueShopping';
import { Layout } from '@/layouts';
import Head from 'next/head';

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between">
            <div className="border-l border-zinc-200">
              {/* add components/ui | common/ContiueShopping.jsx */}
              <ContinueShopping></ContinueShopping>
            </div>

            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
