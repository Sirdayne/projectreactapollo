import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_RATES_QUERY = gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `

export class Rates extends React.PureComponent {
  render() {
    return <Query
        query={GET_RATES_QUERY}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{currency}: {rate}</p>
            </div>
          ));
        }}
      </Query>
  }
}
