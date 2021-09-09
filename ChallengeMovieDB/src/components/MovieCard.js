import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

export const MovieCard = props => {
  const {element} = props;
  // console.log(element);

  const {
    item: {title, id, poster_path, release_date, vote_average},
  } = element;
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.cover}
        key={id}
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
        alt={`Cover of the movie ${title}`}
      />
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{title}</Title>
        {/*categorias*/}
        <Paragraph style={styles.title}>{release_date}</Paragraph>
        {/*mostrar apenas o ano*/}
        <Paragraph style={styles.title}>{vote_average}</Paragraph>
        {/*em estrelas*/}
      </Card.Content>
    </Card>
  );
};
// https://api.themoviedb.org/3/genre/movie/list?api_key=5e4dbaf48b58268cbff212cb6e5c98a0&language=en-US api de genero
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
  },
  cover: {backgroundColor: 'white', width: '50%'},
  content: {backgroundColor: 'yellow'},
  title: {padding: 16},
});
