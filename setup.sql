CREATE TABLE user (
    id INTEGER NOT NULL PRIMARY KEY,
    github_id INTEGER NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL
);

CREATE INDEX github_id_index ON user(github_id);

CREATE TABLE session (
    id TEXT NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES user(id),
    expires_at INTEGER NOT NULL
);

-- calc_period
create or replace function calculate_total(
  range_arg varchar default 'last_30_days',
  type_arg varchar default null,
) return table(current_amount numeric, previous_amount numeric) as $$ -- Returns number  
declare
  currentStart timestamp;
  currentEnd timestamp;
  previousStart timestamp;
  previousEnd timestamp;
begin 
  currentEnd := now()
  currentStart := case
    when range = 'last_24_hours' then end - interval '24 hours'
    when range = 'last_7_days' then end - interval '7 days'
    when range = 'last_30_days' then end - interval '30 days'
    when range = 'last_12_months' then end - interval '12 months'
    else end - interval '30 days'
  end;
  previousEnd := currentStart - interval '1 second'
  previousStart := currentStart - (currentEnd - currentStart);
  current_amount := (
    select COALESCE(SUM(amount), 0)
    from transactions
    where (
      (type = type_arg or type_arg is null)
      and (created_at between currentStart and currentEnd)
    )
  );
  previous_amount := (
    select COALESCE(SUM(amount), 0)
    from transactions
    where(
      (type = type_arg or type_arg is null) -- the type is type_arg
      and (created_at between previousStart and previousEnd)
    )
  );
  return next;
end;
$$ language plpgsql; --    
  


