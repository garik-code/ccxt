'use strict'

// ----------------------------------------------------------------------------

const log       = require ('ololog')
    , ansi      = require ('ansicolor').nice
    , chai      = require ('chai')
    , expect    = chai.expect
    , assert    = chai.assert

/*  ------------------------------------------------------------------------ */

module.exports = (exchange, market, method) => {

    const format = {
        'id':     'btcusd',   // string literal for referencing within an exchange
        'symbol': 'BTC/USD',  // uppercase string literal of a pair of currencies
        'base':   'BTC',      // uppercase string, base currency, 3 or more letters
        'quote':  'USD',      // uppercase string, quote currency, 3 or more letters
        'active': true,       // boolean, market status
        'precision': {        // number of decimal digits "after the dot"
            'price': 8,       // integer
            'amount': 8,      // integer
            'cost': 8,        // integer
        },
        'limits': {           // value limits when placing orders on this market
            'amount': {
                'min': 0.01,  // order amount should be > min
                'max': 1000,  // order amount should be < max
            },
            'price': {
                'min': 0.01,  // order price should be > min
                'max': 1000,  // order price should be < max
            },
            'cost':  { // order cost = price * amount
                'min': 0.01,  // order cost should be > min
                'max': 1000,  // order cost should be < max
            },
        },
        'info': {}, // the original unparsed market info from the exchange
    }

    expect (market).to.have.all.keys (format)

    assert (!('lot' in market), '`lot` field leftover in ' + exchange.id + ' ' + market['symbol'])

    // log (market)

    const { high, low, vwap, baseVolume, quoteVolume } = ticker

}