#importing libraries
from datetime import date
import matplotlib.pyplot as plt
import yfinance as yf
from math import floor
from termcolor import colored as cl
plt.rcParams['figure.figsize'] = (18,10)
plt.style.use('fivethirtyeight')


#getting stock data
day = date.today()
yearfromday = day.replace(year=day.year-1)
stockdata = yf.download('NVDA', yearfromday.strftime('%Y-%m-%d'))
#change NVDA to get stock from selected in web app
#why does it only work with nvidia
#

#MACD 26d EMA, 12d EMA, 9d EMA
ema1 = stockdata.Close.ewm(span=12, adjust=False).mean()
ema2 = stockdata.Close.ewm(span=26, adjust=False).mean()
macd = ema1 - ema2
signal = macd.ewm(span = 9, adjust = False).mean()
histo = macd - signal

def macdplot(price, macd, signal, histo):
    #price plot
    ax1 = plt.subplot2grid((7,1), (0,0), rowspan = 4, colspan = 1)
    #oscillator plot
    ax2 = plt.subplot2grid((7,1), (5,0), rowspan = 3, colspan = 1)

    ax1.plot(price, color = 'black', linewidth = 2)
    ax1 .set_title('Historical Stock Price')
    ax1.set_ylabel('Price ($)')
    ax2.set_title('MACD Oscillator')
    '''
    ax2.plot(macd, color = 'purple', linewidth = 1, label = 'MACD')
    ax2.plot(signal, color = 'orange', linewidth = 1, label = 'Signal')
    '''

    for i in range(len(price)):
        if str(histo[i])[0] == '-':
            ax2.bar(price.index[i], histo[i], color = '#de3163')
        else:
            ax2.bar(price.index[i], histo[i], color = '#40e0d0')

    plt.legend(loc = 'lower left')
macdplot(stockdata.Close, macd, signal, histo)
plt.show()


#have stock selection in web app
#get something to get google finance data of stock that is selected
#do stuff with moving averages
#plot graph and buy/sell signals
#display graph and signal in web app

