import React, { useState, useEffect, useRef, Fragment } from "react";
import { cleanCrypto, getChange } from "../Data/queries";
import { Button, Progress, Spinner } from "reactstrap";
import { Pie } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import {
  Title,
  CurrenciesContainer,
  CurrenciesList,
  CurrenciesImg,
  ProgressContainer,
  ListContainerHeader,
  Total,
} from "../StyledComponents/Table.style";
import chevronRight from "../Assets/Pictures/chevron-right.png";

const getConversionCurrency = (cryptoCurrenciesAmount, changeValues) => {
  let results = {};
  const currencies = Object.keys(cryptoCurrenciesAmount);
  currencies.forEach((currency) => {
    results[currency] =
      cryptoCurrenciesAmount[currency] / changeValues[currency];
  });
  return results;
};

const getCurrencies = (cryptoCurrenciesAmount) => {
  const currencies = Object.keys(cryptoCurrenciesAmount);
  return currencies;
};

const getCurrenciesValues = (cryptoCurrenciesAmount, changeValues) => {
  const currencies = Object.keys(cryptoCurrenciesAmount);
  let total = getSumAmountCurrencies(
    cryptoCurrenciesAmount,
    changeValues
  ).toFixed(0);

  let results = [];
  if (currencies.length >= 0) {
    currencies.map((currency) => {
      results.push(
        (
          (getConversionCurrency(cryptoCurrenciesAmount, changeValues)[
            currency
          ].toFixed(0) /
            total) *
          100
        ).toFixed(2)
      );
    });
  }
  return results;
};

const loader = () => {
  return (
    <>
      <Spinner></Spinner>
      <Title>Data is loading....</Title>
    </>
  );
};

const renderCurrencyList = (cryptoCurrenciesAmount, changeValues) => {
  const currencies = Object.keys(cryptoCurrenciesAmount);
  let currenciesName = "";
  let total = getSumAmountCurrencies(
    cryptoCurrenciesAmount,
    changeValues
  ).toFixed(0);

  return (
    <Fragment>
      {currencies.length >= 0
        ? currencies.map((currency, index) => {
            switch (currency) {
              case "BTC":
                currenciesName = "Bitcoin";
                break;
              case "ETH":
                currenciesName = "Ethereum";
                break;
              case "DASH":
                currenciesName = "Dash";
                break;
              case "BAT":
                currenciesName = "Basic Attention Token";
                break;
              case "USDC":
                currenciesName = "USD Coin";
                break;
              default:
                currenciesName = "";
            }

            let percentage = (
              (getConversionCurrency(cryptoCurrenciesAmount, changeValues)[
                currency
              ].toFixed(0) /
                total) *
              100
            ).toFixed(2);

            let euroValue = getConversionCurrency(
              cryptoCurrenciesAmount,
              changeValues
            )[currency].toFixed(0);

            return (
              <>
                <CurrenciesList key={index}>
                  <CurrenciesImg>
                    <div
                      className={`img-currency--${currency}`}
                      // alt={currency}
                    />
                    <p>{currenciesName}</p>
                  </CurrenciesImg>
                  <ProgressContainer>
                    {percentage !== NaN ? (
                      <>
                        <Progress
                          value={percentage}
                          className={`percentage-currency--${currency}`}
                        />
                        <p>{percentage} %</p>
                      </>
                    ) : (
                      loader
                    )}
                  </ProgressContainer>
                  <p>
                    {cryptoCurrenciesAmount[currency]} {currency}
                  </p>
                  <p>{euroValue} €</p>
                </CurrenciesList>
              </>
            );
          })
        : loader}
    </Fragment>
  );
};

const getSumAmountCurrencies = (cryptoCurrenciesAmount, changeValues) => {
  const currencies = Object.keys(cryptoCurrenciesAmount);
  let sum = 0;

  if (currencies.length >= 0) {
    currencies.map((currency) => {
      sum += getConversionCurrency(cryptoCurrenciesAmount, changeValues)[
        currency
      ];
    });
  }
  return sum;
};

const Tables = () => {
  const [cryptoCurrenciesAmount, setCryptoCurrenciesAmount] = useState([]);
  const [changeValues, setchangeValues] = useState({});
  const [hasErrorOccured, setHasErrorOccured] = useState(false);
  const [showList, setShowList] = useState(true);

  let chartReference = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const _fetchCrypto = () => {
      try {
        const data = cleanCrypto();
        setCryptoCurrenciesAmount(data);
      } catch (error) {
        setHasErrorOccured(
          "Une erreur est survenu lors de la récupération des valeurs des crypto-monnaies : ",
          error
        );
      }
    };
    const _fetchChange = async () => {
      try {
        const change = await getChange();
        setchangeValues(change);
      } catch (error) {
        setHasErrorOccured(
          "Une erreur est survenu lors du chargement des changes des différentes devices : ",
          error
        );
      }
    };
    _fetchCrypto();
    _fetchChange();

    setInterval(() => {
      _fetchChange();
    }, 10000);

    return () => clearInterval(_fetchChange);
  }, [cryptoCurrenciesAmount]);

  const crypto = {
    labels: getCurrencies(cryptoCurrenciesAmount),
    datasets: [
      {
        label: "Crypto Currencies",
        data: getCurrenciesValues(cryptoCurrenciesAmount, changeValues),
        backgroundColor: [
          "#f7941a",
          "#6480e3",
          "#008ce7",
          "#ff5000",
          "#367ccc",
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    showScale: false,
  };

  const listRender = () => {
    setShowList(true);
  };

  const chartRender = () => {
    setShowList(false);
  };

  if (Object.keys(cryptoCurrenciesAmount).length >= 0) {
    return (
      <Fragment>
        <CurrenciesContainer>
          <ListContainerHeader>
            <Title>Votre portefeuille</Title>
            <div></div>
            <Button color="primary" onClick={() => listRender()}>
              Liste
            </Button>
            <Button color="primary" onClick={() => chartRender()}>
              Graphique
            </Button>
          </ListContainerHeader>
          {showList ? (
            <>
              <Fade>
                <ul>
                  {renderCurrencyList(cryptoCurrenciesAmount, changeValues)}
                </ul>
                <Total>
                  <Title>
                    Solde total ≈{" "}
                    {getSumAmountCurrencies(
                      cryptoCurrenciesAmount,
                      changeValues
                    ).toFixed(0)}{" "}
                    €
                    <img
                      src={chevronRight}
                      className="chevron-right"
                      alt="chevron-right"
                    />
                  </Title>
                </Total>
              </Fade>
            </>
          ) : (
            <Fade>
              <Pie
                ref={(el) => (chartReference = el)}
                data={crypto}
                options={options}
                height={500}
                width={300}
              />
            </Fade>
          )}
        </CurrenciesContainer>
      </Fragment>
    );
  } else {
    return (
      <>
        <Spinner></Spinner>
        <Title>
          Aucune valeur de crypto-monnaie n’est disponible pour le moment
        </Title>
      </>
    );
  }
};

export default Tables;
