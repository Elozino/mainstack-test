export type Transaction = {
  payment_reference: string;
  type: "credit" | "deposit";
  amount: number;
  date: string;
  status: string;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
};

export type TransactionProps = {
  transaction: Transaction[];
  openFilterModal: () => void;
  isFilter: boolean;
};

export type FilterByProps = { title: string };

export type FilterModalProps = {
  close: () => void;
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  transactions: Transaction[];
};
