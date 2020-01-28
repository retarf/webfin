FROM        python
ENV         PYTHONBUFFERED 1 
ENV         PYTHONDONTWRITEBYTECODE 1
COPY        requirements.txt .
RUN         apt update \
            && apt upgrade -y 
RUN         apt install -y apt-utils python3-setuptools vim
RUN         pip install --upgrade pip
RUN         pip install -r requirements.txt
RUN         python -m pip install --upgrade pip
RUN         mkdir /project
COPY        django /project/
WORKDIR     /project
#CMD         gunicorn webfin.wsgi -w 1 -b :$PORT --reload
#CMD         gunicorn webfin.wsgi 
CMD         python manage.py runserver $PORT
