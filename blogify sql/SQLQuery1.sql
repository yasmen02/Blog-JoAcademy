create database blogifyProject
create table  Blogifypost(
articleid int primary key identity(1,1),
articlename varchar(500) ,
articleauthor varchar(500) ,
articletitle varchar(500),
articledescription varchar(500),
articleurl varchar(500),
articleurlToImage varchar(500),
articlepublishedAt date,
articlecontent varchar(500)
)
select * from Blogifypost
insert into Blogifypost values('CNBCTV18','CNBCTV18.com','Stock Market Live News Updates','Stock Market Highlights: Indian equity benchmarks BSE Sensex and NSE Nifty50 continued to rise for a second straight day on Thursday led by gains across IT stocks and heavyweights Reliance Industries','https://www.cnbctv18.com/market/stocks/stock-market-news-live-updates-nifty50-bse-sensex-hcl','https://images.cnbctv18.com/wp-content/uploads/2019/07/BSE-Sensex.jpg','2022-04-21T12:17:49Z','Why Saurabh Mukherjea likes HDFC Bank')
insert into Blogifypost values('NDTV News','CNBCTV19.com','Stock Market Live News Updates','Stock Market Highlights: Indian equity benchmarks BSE Sensex and NSE Nifty50 continued to rise for a second straight day on Thursday led by gains across IT stocks and heavyweights Reliance Industries','https://www.cnbctv18.com/market/stocks/stock-market-news-live-updates-nifty50-bse-sensex-hcl','https://images.cnbctv18.com/wp-content/uploads/2019/07/BSE-Sensex.jpg','2022-04-21T12:17:49Z','Why Saurabh Mukherjea likes HDFC Bank')
update Blogifypost set articlename = 'test' where articleid = 1
delete from Blogifypost where articleid = 2
insert into Blogifypost values('Livemint','CNBCTV19.com','Stock Market Live News Updates','Stock Market Highlights: Indian equity benchmarks BSE Sensex and NSE Nifty50 continued to rise for a second straight day on Thursday led by gains across IT stocks and heavyweights Reliance Industries','https://www.cnbctv18.com/market/stocks/stock-market-news-live-updates-nifty50-bse-sensex-hcl','https://images.cnbctv18.com/wp-content/uploads/2019/07/BSE-Sensex.jpg','2022-04-21T12:17:49Z','Why Saurabh Mukherjea likes HDFC Bank')
insert into Blogifypost values('Livemintyy','CNBCTV19.com','Stock Market Live News Updates','Stock Market Highlights: Indian equity benchmarks BSE Sensex and NSE Nifty50 continued to rise for a second straight day on Thursday led by gains across IT stocks and heavyweights Reliance Industries','https://www.cnbctv18.com/market/stocks/stock-market-news-live-updates-nifty50-bse-sensex-hcl','https://images.cnbctv18.com/wp-content/uploads/2019/07/BSE-Sensex.jpg','2022-04-21T12:17:49Z','Why Saurabh Mukherjea likes HDFC Bank')