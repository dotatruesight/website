FROM denoland/deno:1.29.1

# The port that your application listens to.
EXPOSE 80
EXPOSE 443

# Prefer not to run as root.
USER root

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.

CMD ["deno", "task", "start"]