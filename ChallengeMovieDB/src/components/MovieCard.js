import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {StarRating} from './StarRating';

export const MovieCard = props => {
  const {element} = props;

  const {
    item: {title, id, poster_path, release_date, vote_average},
  } = element;
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.image}
        key={id}
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
        alt={`Cover of the movie ${title}`}
      />
      <View style={styles.content}>
        <Title style={styles.title}>{title}</Title>
        {/*categorias*/}
        <Paragraph style={styles.title}>{release_date}</Paragraph>
        {/*mostrar apenas o ano*/}
        <StarRating rating={vote_average} />
      </View>
    </Card>
  );
};
// api de genero
const styles = StyleSheet.create({
  card: {
    // marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
    width: '90%',
    borderRadius: 10,
  },
  image: {backgroundColor: 'white', width: '50%'},
  content: {backgroundColor: 'green'},
  title: {padding: 16},
});
