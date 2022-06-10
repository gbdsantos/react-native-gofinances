import React from 'react';
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
  Title
} from './styles';

export function Dashboard(){
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
        <TransactionCard />
      </Transactions>
    </Container>
  );
}
