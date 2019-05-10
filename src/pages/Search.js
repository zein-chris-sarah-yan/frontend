import React from "react"
import { Link } from "react-router-dom"

import SearchNav from "../components/SearchNav"
import DefaultImg from "../assets/images/default-image.jpeg"
import Rating from "../assets/thumbnail/five-star.png"
import styled from "@emotion/styled"
import { getBestRestaurants } from "../utils/api"

const Container = styled.div`
  background-color: #f5f1e8;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const Card = styled.div`
  margin: 50px 5px;
  padding: 30px 30px 0px 30px;
  text-align: center;
  border-radius: 30px;
`

const H5 = styled.h5`
  margin-top: 20px;
`

const Img = styled.img`
  width: 250px;
`

const H4 = styled.h4`
  margin: 50px 0px 0px 100px;
`

const H44 = styled.h4`
  margin-left: 100px;
`

const Star = styled.img`
  width: 100px;
`

const best = [
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  },
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  },
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  },
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  }
]

class Search extends React.Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    getBestRestaurants().then(response => {
      console.log(response)
      this.setState({
        restaurants: response
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <SearchNav />
          <H4>Best Seller</H4>
          <Div>
            {this.state.restaurants.map((item, index) => {
              return (
                <Card key={index}>
                  <Link to="/details">
                    <Img src={item.restaurant.featured_image} alt="" />
                  </Link>
                  <H5>{item.restaurant.name}</H5>
                  <Star
                    src={item.restaurant.user_rating.aggregate_rating}
                    alt=""
                  />
                </Card>
              )
            })}
          </Div>
        </Container>

        <Container>
          <H44>Recommendation</H44>
          <Div>
            {best.map((best, index) => {
              return (
                <Card key={index}>
                  <Link to="/details">
                    <Img src={best.image} alt="" />
                  </Link>
                  <H5>{best.title}</H5>
                  <Star src={best.rating} alt="" />
                </Card>
              )
            })}
          </Div>
        </Container>

        <Container>
          <H44>Nearest</H44>
          <Div>
            {best.map((best, index) => {
              return (
                <Card key={index}>
                  <Link to="/details">
                    <Img src={best.image} alt="" />
                  </Link>
                  <H5>{best.title}</H5>
                  <Star src={best.rating} alt="" />
                </Card>
              )
            })}
          </Div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Search
