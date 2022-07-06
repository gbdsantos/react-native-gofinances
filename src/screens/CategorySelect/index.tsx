import React from 'react';
import { FlatList } from 'react-native';

import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import {
  Category,
  Container,
  Footer,
  Header,
  Icon,
  Name,
  Separator,
  Title
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  closeSelectCategory: () => void;
  setCategory: (category: Category) => void;
}

export function CategorySelect({
  category,
  closeSelectCategory,
  setCategory
}: Props){
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={ (item) => item.key }
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <Category
            isActive={category.key === item.key}
            onPress={() => handleCategorySelect(item)}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        style={{ flex: 1, width: '100%'}}
      />

      <Footer>
        <Button
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  );
}
