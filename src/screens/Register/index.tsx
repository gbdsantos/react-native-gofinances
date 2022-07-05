import React, { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsTypes
} from './styles';

export function Register(){
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }


  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Preço"
          />

          <TransactionsTypes>
            <TransactionTypeButton
              isActive={transactionType === 'up' }
              onPress={() => handleTransactionsTypesSelect('up')}
              title="income"
              type="up"
            />

            <TransactionTypeButton
              isActive={transactionType === 'down' }
              onPress={() => handleTransactionsTypesSelect('down')}
              title="outcome"
              type="down"
            />
          </TransactionsTypes>

          <CategorySelect title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
