#importing libraries
import pandas as pd
import numpy as np
import datetime
import matplotlib.pyplot as plt
import yfinance as yf
plt.style.use('ggplot')

#getting stock data
stockdata = yf.download('NVDA', '2021-01-28')

stockdata['Close'].plot(figsize=(15,7))
plt.ylabel('Close Price')
plt.title('NVidia Close Price')
plt.show()
#yo it fuckin works

#have stock selection in web app
#get something to get google finance data of stock that is selected
#do stuff with moving averages
#plot graph and buy/sell signals
#display graph and signal in web app

