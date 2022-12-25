FROM denoland/deno:1.25.0

ARG GIT_REVISION
RUN git rev-parse HEAD | export DENO_DEPLOYMENT_ID=$1
# ENV DENO_DEPLOYMENT_ID=${(git rev-parse HEAD)}

WORKDIR /app

COPY . .
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["run", "-A", "main.ts"]