-- Table: public.Vehicles

-- DROP TABLE IF EXISTS public."Vehicles";

CREATE TABLE IF NOT EXISTS public."Vehicles"
(
    "VehicleId" bigint NOT NULL,
    "Description" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "VehiclePlate" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "VehicleColor" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    "VehicleDoors" integer NOT NULL,
    "VehicleLicenseNumber" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("VehicleId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Vehicles"
    OWNER to minqfqlc;

COMMENT ON TABLE public."Vehicles"
    IS 'Vehiculos como usuarios';
	

-- Table: public.UserBookingTrip

-- DROP TABLE IF EXISTS public."UserBookingTrip";

CREATE TABLE IF NOT EXISTS public."UserBookingTrip"
(
    "UserBookingTripId" bigint NOT NULL,
    "IdTrip" bigint NOT NULL,
    "UserBookingTripDateInit" date NOT NULL,
    "UserBookingTripDateEnd" date,
    "UserTenentId" bigint NOT NULL,
    CONSTRAINT "UserBookingTrip_pkey" PRIMARY KEY ("UserBookingTripId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserBookingTrip"
    OWNER to minqfqlc;
	

-- Table: public.UserTrip

-- DROP TABLE IF EXISTS public."UserTrip";

CREATE TABLE IF NOT EXISTS public."UserTrip"
(
    "UserTripId" bigint NOT NULL,
    "UserTripDateAcept" date NOT NULL,
    "UserTripDateEnd" date,
    "VehicleId" bigint NOT NULL,
    "UserTripEarnings" numeric(10,0),
    "UserTripWaitingTime" character varying(10) COLLATE pg_catalog."default",
    "TripId" bigint NOT NULL,
    "UserTripStatus" bit(1) NOT NULL,
    CONSTRAINT "UserTrip_pkey" PRIMARY KEY ("UserTripId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserTrip"
    OWNER to minqfqlc;
	
-- Table: public.Persons

-- DROP TABLE IF EXISTS public."Persons";

CREATE TABLE IF NOT EXISTS public."Persons"
(
    "PersonId" bigint NOT NULL,
    "PersonName" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    "PersonPhone" character varying(25) COLLATE pg_catalog."default",
    "PersonAddress" character varying(100) COLLATE pg_catalog."default",
    "PersonStatus" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    "UserId" bigint NOT NULL,
    CONSTRAINT "Persons_pkey" PRIMARY KEY ("PersonId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Persons"
    OWNER to minqfqlc;
	

-- Table: public.Trips

-- DROP TABLE IF EXISTS public."Trips";

CREATE TABLE IF NOT EXISTS public."Trips"
(
    "TripId" bigint NOT NULL,
    "TripDescription" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "TripDate" date NOT NULL,
    "TripStatus" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "TripOrigin" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    "TripDestination" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    "TripValue" numeric(10,0) NOT NULL,
    CONSTRAINT "Trips_pkey" PRIMARY KEY ("TripId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Trips"
    OWNER to minqfqlc;

COMMENT ON TABLE public."Trips"
    IS 'Para los viajes';

-- Table: public.Users

-- DROP TABLE IF EXISTS public."Users";

CREATE TABLE IF NOT EXISTS public."Users"
(
    "UserId" bigint NOT NULL,
    "UserName" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "UserPassword" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "UserType" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    "UserStatus" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to minqfqlc;
	

