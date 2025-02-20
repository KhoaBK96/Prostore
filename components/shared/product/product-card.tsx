import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Link href={`/product/${product.slug}`}>
            <Image src={product.iamges![0]} ></Image>
          </Link>
        </CardHeader>
      </Card>
    </>
  );
};

export default ProductCard;
