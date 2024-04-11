import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import { transactions, user, wallet } from "../constants/test-data";
import useTanStackQuery from "../hooks/useTanstackQuery";
import { getTransactions, getUser, getWallet } from "../services";
// import { render, screen } from '@testing-library/react';
vi.mock('axios')
vi.mock('@tanstack/react-query')

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

const { result: fetchUser } = renderHook(() => useTanStackQuery('getUser', getUser), { wrapper });
const { result: fetchWallet } = renderHook(() => useTanStackQuery('getWallet', getWallet), { wrapper });
const { result: fetchTransactions } = renderHook(() => useTanStackQuery('getTransactions', getTransactions), { wrapper });

describe('App', () => {
  it('Renders App', () => {
    render(<App />);
  })
})

describe('Api calls', () => {
  it('Fetch user', async () => {
    if (fetchUser.current !== null) {
      expect(fetchUser.current).toEqual(user)
    }
  })

  it('Fetch wallet', async () => {
    if (fetchWallet.current !== null) {
      expect(fetchWallet.current).toEqual(wallet)
    }
  })

  it('Fetch transaction', async () => {
    if (fetchTransactions.current !== null) {
      expect(fetchTransactions.current).toEqual(transactions)
    }
  })

})