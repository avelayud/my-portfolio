CREATE TABLE employees (
    employee_id VARCHAR PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    role VARCHAR,
    hire_date DATE,
    status VARCHAR
);

CREATE TABLE tables_dim (
    table_id VARCHAR PRIMARY KEY,
    section VARCHAR,
    capacity INT
);

CREATE TABLE menu_items (
    item_id VARCHAR PRIMARY KEY,
    name VARCHAR,
    category VARCHAR,
    cost NUMERIC(8,2),
    price NUMERIC(8,2)
);

CREATE TABLE schedule (
    scheduled_shift_id VARCHAR PRIMARY KEY,
    employee_id VARCHAR REFERENCES employees(employee_id),
    start_scheduled TIMESTAMP,
    end_scheduled TIMESTAMP,
    role VARCHAR
);

CREATE TABLE shifts (
    shift_id VARCHAR PRIMARY KEY,
    employee_id VARCHAR REFERENCES employees(employee_id),
    clock_in TIMESTAMP,
    clock_out TIMESTAMP,
    scheduled_shift_id VARCHAR REFERENCES schedule(scheduled_shift_id),
    location_id VARCHAR
);

CREATE TABLE table_assignments (
    assignment_id VARCHAR PRIMARY KEY,
    employee_id VARCHAR REFERENCES employees(employee_id),
    table_id VARCHAR REFERENCES tables_dim(table_id),
    start_time TIMESTAMP,
    end_time TIMESTAMP
);

CREATE TABLE orders (
    order_id VARCHAR PRIMARY KEY,
    opened_at TIMESTAMP,
    closed_at TIMESTAMP,
    server_employee_id VARCHAR REFERENCES employees(employee_id),
    table_id VARCHAR REFERENCES tables_dim(table_id),
    party_size INT,
    subtotal NUMERIC(10,2),
    discount_amount NUMERIC(10,2),
    tax_amount NUMERIC(10,2),
    service_charge_amount NUMERIC(10,2),
    total_amount NUMERIC(10,2),
    payment_type VARCHAR,
    tip_amount NUMERIC(10,2),
    location_id VARCHAR
);

CREATE TABLE order_items (
    order_item_id VARCHAR PRIMARY KEY,
    order_id VARCHAR REFERENCES orders(order_id),
    item_id VARCHAR REFERENCES menu_items(item_id),
    qty INT,
    line_price NUMERIC(10,2),
    modifiers JSONB
);

CREATE TABLE payments (
    payment_id VARCHAR PRIMARY KEY,
    order_id VARCHAR REFERENCES orders(order_id),
    tender_type VARCHAR,
    amount NUMERIC(10,2),
    tip_amount NUMERIC(10,2),
    processed_at TIMESTAMP
);

CREATE TABLE tip_pool_allocations (
    allocation_id VARCHAR PRIMARY KEY,
    order_id VARCHAR REFERENCES orders(order_id),
    employee_id VARCHAR REFERENCES employees(employee_id),
    allocated_tip_amount NUMERIC(10,2),
    rationale JSONB
);
