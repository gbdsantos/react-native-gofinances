import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export function Dashboard(){
  const date = new Date().getDate(); 
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const currentDate = date + '/' + month + '/' + year;

  const data = [
    {
      amount: "R$ 12.000,00",
      date: currentDate,
      category: {
        icon:'dollar-sign',
        name: "vendas"
      },
      title: "Desenvolvimento de site"
    },
    {
      amount: "R$ 12.000,00",
      date: currentDate,
      category: {
        icon:'dollar-sign',
        name: "vendas"
      },
      title: "Desenvolvimento de site"
    },
    {
      amount: "R$ 12.000,00",
      date: currentDate,
      category: {
        icon:'dollar-sign',
        name: "vendas"
      },
      title: "Desenvolvimento de site"
    }
  ]

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

          <Icon name="power" />
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
          renderItem={ ({ item }) => <TransactionCard data={item} /> }
          showsVerticalScrollIndicator={false}
        />
        
      </Transactions>
    </Container>
  );
}
