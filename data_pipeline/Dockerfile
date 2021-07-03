FROM python:3.8
COPY . .

RUN pip install -r scraper/requirements.txt

#CMD ["python", "data_processing/aggregatedcsv2redis.py"]
CMD ["python", "data_pipeline.py"]