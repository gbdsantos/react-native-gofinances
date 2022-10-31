import React, { useEffect, useState } from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const currentDate = date + '/' + month + '/' + year;

  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const collectionKey = '@gofinances:transactions';
    const loadedData = await AsyncStorage.getItem(collectionKey);

    const transactions = loadedData ? JSON.parse(loadedData) : [];

    const transactionsFormatted: DataListProps = transactions
      .map((item: DataListProps) => {
        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency'
          });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(item.date);

        return {
          id: item.id,
          date,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
        }
      });

    setData(transactionsFormatted);
  }

  useEffect(() => {

  }, []);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/21063343?v=4' }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Guilherme</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => { }}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards

      >
        <HighlightCard
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 01 de junho"
          title="Entradas"
          type="income"
        />
        <HighlightCard
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 03 de junho"
          title="Saídas"
          type="outcome"
        />
        <HighlightCard
          amount="R$ 16.141,00"
          lastTransaction="01 à 06 de junho"
          title="Total"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
        />

      </Transactions>
    </Container>
  );
}
