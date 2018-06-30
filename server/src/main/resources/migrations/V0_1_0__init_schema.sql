CREATE TABLE events (
  id UUID,
  name VARCHAR(255),
  description text
);

CREATE TABLE raffles (
  id UUID,
  name VARCHAR(255),
  noWinners INT,
  type varchar(255),
  payload json,
  event_id UUID,
  since timestamp,
  until timestamp
);

CREATE TABLE winners (
  id UUID,
  name VARCHAR(255),
  raffle_id UUID
);

CREATE TABLE users (
  id UUID,
  username varchar(255)
);

CREATE TABLE bartolos (
  id UUID,
  name varchar(255),
  description varchar(255),
  status varchar(255)
)
