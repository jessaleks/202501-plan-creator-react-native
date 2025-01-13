CREATE TABLE `Activity` (
	`id` text PRIMARY KEY NOT NULL,
	`date` integer NOT NULL,
	`length` integer NOT NULL,
	`feeling` text,
	`wasInterrupted` integer,
	`timestamp` integer,
	`numberOfSessions` integer,
	`sessionLength` integer,
	`breakLength` integer
);
