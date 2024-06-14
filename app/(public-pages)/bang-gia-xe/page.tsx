import QuotePageContent from "@/components/quotePage/QuotePageContent";

export const generateMetadata = () => {
  return {
    title: `Bảng giá xe Peugeot ${new Date().getFullYear()}`,
    description:
      "Cập nhật Bảng giá xe Peugeot 2024 mới nhất tại việt Nam: Giá xe ô tô Peugeot 5008, Peugeot 3008, 508, 408, Peugeot Traveller",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/bang-gia-xe`,
  };
};

const QuotePage = () => {
  return <QuotePageContent />;
};

export default QuotePage;
