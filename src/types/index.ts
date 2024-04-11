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
  handleFilterTransaction: () => void;
  clearFilter: () => void;
  handleSelectTimeFrame: (title: string) => void;
  transactionType: string[];
  transactionStatus: string[];
  selectedBtnTimeframe: string | undefined;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setTransactionType: React.Dispatch<React.SetStateAction<string[]>>;
  setTransactionStatus: React.Dispatch<React.SetStateAction<string[]>>;
};
