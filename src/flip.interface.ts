export interface ListProps {
  id: string;
  status: string;
  sender_bank: string;
  beneficiary_bank: string;
  beneficiary_name: string;
  amount: number;
  date: string;
  created_at: string;
  onPress: () => void;
}
