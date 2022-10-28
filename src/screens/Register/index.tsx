import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import { CategorySelect } from '../CategorySelect';

import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsTypes
} from './styles';

interface FormData {
  [name: string]: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),

  amount: Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
});

type NavigationProps = {
  navigate: (screen: string) => void;
}

export function Register() {
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState('');

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const { navigate } = useNavigation<NavigationProps>();
  const collectionKey = '@gofinances:transactions';

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecion o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selcione a categoria');
    }

    const newTransaction = {
      id: String(uuid.v4()),
      date: new Date(),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    try {
      const localStorageData = await AsyncStorage.getItem(collectionKey);
      const parsedData = localStorageData ? JSON.parse(localStorageData) : [];

      const dataFormatted = [
        ...parsedData,
        newTransaction
      ]

      await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria'
      });

      navigate('Listagem');

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível salve');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              autoCapitalize="sentences"
              autoCorrect={false}
              control={control}
              error={errors.name && errors.name.message}
              name="name"
              placeholder="Nome"
            />
            <InputForm
              control={control}
              error={errors.amount && errors.amount.message}
              keyboardType="numeric"
              name="amount"
              placeholder="Preço"
            />

            <TransactionsTypes>
              <TransactionTypeButton
                isActive={transactionType === 'up'}
                onPress={() => handleTransactionsTypesSelect('up')}
                title="income"
                type="up"
              />

              <TransactionTypeButton
                isActive={transactionType === 'down'}
                onPress={() => handleTransactionsTypesSelect('down')}
                title="outcome"
                type="down"
              />
            </TransactionsTypes>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>

          <Button
            onPress={handleSubmit(handleRegister)}
            title="Enviar"
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            closeSelectCategory={handleCloseSelectCategoryModal}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
