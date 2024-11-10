CREATE TABLE "identity".person (
	id uuid NOT NULL,
	"name" varchar NULL,
	birthdate date NULL,
	email varchar NULL,
	"identity" varchar NULL,
	type_identity varchar NULL,
	CONSTRAINT person_id PRIMARY KEY (id)
);

CREATE TABLE "identity"."user"  (
	id uuid NOT NULL,
	username varchar NULL,
	password varchar NULL,
	type varchar NULL,
	person_id uuid NULL,
	CONSTRAINT user_id PRIMARY KEY (id),
    FOREIGN KEY (person_id) REFERENCES "identity"."person"(id)
);