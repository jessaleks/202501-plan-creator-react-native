PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_Activity `
(
    `
    id
    `
    text
    PRIMARY
    KEY
    NOT
    NULL,
    `
    length
    `
    integer
    NOT
    NULL,
    `
    createdAt
    `
    integer,
    `
    wasInterrupted
    `
    integer,
    `
    numberOfSessions
    `
    integer,
    `
    sessionLength
    `
    integer,
    `
    breakLength
    `
    integer
);
--> statement-breakpoint
INSERT INTO `__new_Activity `("id", "length", "createdAt", "wasInterrupted", "numberOfSessions", "sessionLength",
                              "breakLength")
SELECT "id", "length", "createdAt", "wasInterrupted", "numberOfSessions", "sessionLength", "breakLength"
FROM ` Activity `;--> statement-breakpoint
DROP TABLE ` Activity `;--> statement-breakpoint
ALTER TABLE `__new_Activity ` RENAME TO ` Activity `;--> statement-breakpoint
PRAGMA foreign_keys=ON;