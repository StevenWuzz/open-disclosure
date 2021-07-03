import scraper.scraper
import data_processing.aggregatedcsv2redis

s = scraper.scraper.Scraper()
s.scrape(election_cycle='11/3/2020')
csv2Redis = data_processing.aggregatedcsv2redis.Csv2Redis(filename = "../scraper/aggregated_data/data.csv")
csv2Redis.read_data_sheet()
csv2Redis.setElectionShapeInRedis()
csv2Redis.setCandidateShapeInRedis()
csv2Redis.set_referendums_shape_in_redis()
csv2Redis.set_metadata_shape_in_redis()