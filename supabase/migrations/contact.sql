create table if not exists contact (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

comment on table contact is 'Table to store contact form submissions';
create policy "Allow insert for all" on contact for insert using (true);