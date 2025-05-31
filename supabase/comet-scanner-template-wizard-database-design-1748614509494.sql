--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (PGlite 0.2.0)
-- Dumped by pg_dump version 16.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = off;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET escape_string_warning = off;
SET row_security = off;

--
-- Name: meta; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA meta;


ALTER SCHEMA meta OWNER TO postgres;

--
-- Name: vector; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA public;


--
-- Name: EXTENSION vector; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION vector IS 'vector data type and ivfflat and hnsw access methods';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: embeddings; Type: TABLE; Schema: meta; Owner: postgres
--

CREATE TABLE meta.embeddings (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    content text NOT NULL,
    embedding public.vector(384) NOT NULL
);


ALTER TABLE meta.embeddings OWNER TO postgres;

--
-- Name: embeddings_id_seq; Type: SEQUENCE; Schema: meta; Owner: postgres
--

ALTER TABLE meta.embeddings ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME meta.embeddings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: migrations; Type: TABLE; Schema: meta; Owner: postgres
--

CREATE TABLE meta.migrations (
    version text NOT NULL,
    name text,
    applied_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE meta.migrations OWNER TO postgres;

--
-- Name: answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answers (
    id bigint NOT NULL,
    question_id bigint,
    user_id bigint,
    answer_text text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.answers OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.answers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.answers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id bigint NOT NULL,
    name text NOT NULL,
    description text
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: code_snippets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.code_snippets (
    id bigint NOT NULL,
    template_id bigint,
    snippet_code text NOT NULL,
    condition jsonb
);


ALTER TABLE public.code_snippets OWNER TO postgres;

--
-- Name: code_snippets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.code_snippets ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.code_snippets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: media; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.media (
    id bigint NOT NULL,
    file_path text NOT NULL,
    media_type text NOT NULL,
    uploaded_by bigint,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.media OWNER TO postgres;

--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.media ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.media_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permissions (
    id bigint NOT NULL,
    user_id bigint,
    permission_type text NOT NULL
);


ALTER TABLE public.permissions OWNER TO postgres;

--
-- Name: permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.permissions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id bigint NOT NULL,
    template_id bigint,
    question_text text NOT NULL,
    question_type text NOT NULL,
    validation_rules jsonb,
    "order" integer NOT NULL
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.questions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: template_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.template_categories (
    template_id bigint,
    category_id bigint
);


ALTER TABLE public.template_categories OWNER TO postgres;

--
-- Name: template_versions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.template_versions (
    id bigint NOT NULL,
    template_id bigint,
    version_number integer NOT NULL,
    changes text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.template_versions OWNER TO postgres;

--
-- Name: template_versions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.template_versions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.template_versions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: templates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.templates (
    id bigint NOT NULL,
    name text NOT NULL,
    base_code text NOT NULL,
    metadata jsonb,
    created_by bigint,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.templates OWNER TO postgres;

--
-- Name: templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.templates ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.templates_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    password_hash text NOT NULL,
    role text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: embeddings; Type: TABLE DATA; Schema: meta; Owner: postgres
--



--
-- Data for Name: migrations; Type: TABLE DATA; Schema: meta; Owner: postgres
--

INSERT INTO meta.migrations VALUES ('202407160001', 'embeddings', '2025-05-30 07:26:09.89+00');


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.answers OVERRIDING SYSTEM VALUE VALUES (1, 1, 2, 'Red', '2025-05-30 13:33:02.193+00');
INSERT INTO public.answers OVERRIDING SYSTEM VALUE VALUES (2, 2, 3, 'True', '2025-05-30 13:33:02.193+00');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES (1, 'Category 1', 'Description for category 1');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES (2, 'Category 2', 'Description for category 2');


--
-- Data for Name: code_snippets; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.code_snippets OVERRIDING SYSTEM VALUE VALUES (1, 1, 'Snippet code 1', '{"condition": "if color is Red"}');
INSERT INTO public.code_snippets OVERRIDING SYSTEM VALUE VALUES (2, 2, 'Snippet code 2', '{"condition": "if likes coding"}');


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.media OVERRIDING SYSTEM VALUE VALUES (1, '/images/sample1.png', 'image', 1, '2025-05-30 13:33:02.193+00');
INSERT INTO public.media OVERRIDING SYSTEM VALUE VALUES (2, '/images/sample2.png', 'image', 2, '2025-05-30 13:33:02.193+00');


--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.permissions OVERRIDING SYSTEM VALUE VALUES (1, 1, 'content_management');
INSERT INTO public.permissions OVERRIDING SYSTEM VALUE VALUES (2, 1, 'media_upload');
INSERT INTO public.permissions OVERRIDING SYSTEM VALUE VALUES (3, 1, 'system_access');
INSERT INTO public.permissions OVERRIDING SYSTEM VALUE VALUES (4, 2, 'media_upload');
INSERT INTO public.permissions OVERRIDING SYSTEM VALUE VALUES (5, 3, 'system_access');


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.questions OVERRIDING SYSTEM VALUE VALUES (1, 1, 'What is your favorite color?', 'multiple_choice', '{"options": ["Red", "Blue", "Green"]}', 1);
INSERT INTO public.questions OVERRIDING SYSTEM VALUE VALUES (2, 1, 'Do you like coding?', 'true_false', '{}', 2);


--
-- Data for Name: template_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.template_categories VALUES (1, 1);
INSERT INTO public.template_categories VALUES (2, 2);


--
-- Data for Name: template_versions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.template_versions OVERRIDING SYSTEM VALUE VALUES (1, 1, 1, 'Initial version', '2025-05-30 13:33:02.193+00');
INSERT INTO public.template_versions OVERRIDING SYSTEM VALUE VALUES (2, 2, 1, 'Initial version', '2025-05-30 13:33:02.193+00');


--
-- Data for Name: templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.templates OVERRIDING SYSTEM VALUE VALUES (1, 'Template 1', 'Base code 1', '{"description": "Sample template 1"}', 1, '2025-05-30 13:33:02.193+00');
INSERT INTO public.templates OVERRIDING SYSTEM VALUE VALUES (2, 'Template 2', 'Base code 2', '{"description": "Sample template 2"}', 2, '2025-05-30 13:33:02.193+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (1, 'admin1', 'admin1@example.com', 'hashed_password1', 'admin', '2025-05-30 13:30:05.302+00');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (2, 'user1', 'user1@example.com', 'hashed_password2', 'user', '2025-05-30 13:30:05.302+00');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (3, 'user2', 'user2@example.com', 'hashed_password3', 'user', '2025-05-30 13:30:05.302+00');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (4, 'user3', 'user3@example.com', 'hashed_password4', 'user', '2025-05-30 13:30:05.302+00');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (5, 'user4', 'user4@example.com', 'hashed_password5', 'user', '2025-05-30 13:30:05.302+00');


--
-- Name: embeddings_id_seq; Type: SEQUENCE SET; Schema: meta; Owner: postgres
--

SELECT pg_catalog.setval('meta.embeddings_id_seq', 1, false);


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answers_id_seq', 2, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 2, true);


--
-- Name: code_snippets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.code_snippets_id_seq', 2, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.media_id_seq', 2, true);


--
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permissions_id_seq', 5, true);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questions_id_seq', 2, true);


--
-- Name: template_versions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.template_versions_id_seq', 2, true);


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.templates_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: embeddings embeddings_pkey; Type: CONSTRAINT; Schema: meta; Owner: postgres
--

ALTER TABLE ONLY meta.embeddings
    ADD CONSTRAINT embeddings_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: meta; Owner: postgres
--

ALTER TABLE ONLY meta.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (version);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: code_snippets code_snippets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.code_snippets
    ADD CONSTRAINT code_snippets_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: permissions permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: template_versions template_versions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.template_versions
    ADD CONSTRAINT template_versions_pkey PRIMARY KEY (id);


--
-- Name: templates templates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.templates
    ADD CONSTRAINT templates_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: answers answers_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);


--
-- Name: answers answers_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: code_snippets code_snippets_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.code_snippets
    ADD CONSTRAINT code_snippets_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id);


--
-- Name: media media_uploaded_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_uploaded_by_fkey FOREIGN KEY (uploaded_by) REFERENCES public.users(id);


--
-- Name: permissions permissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: questions questions_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id);


--
-- Name: template_categories template_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.template_categories
    ADD CONSTRAINT template_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: template_categories template_categories_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.template_categories
    ADD CONSTRAINT template_categories_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id);


--
-- Name: template_versions template_versions_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.template_versions
    ADD CONSTRAINT template_versions_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id);


--
-- Name: templates templates_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.templates
    ADD CONSTRAINT templates_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

