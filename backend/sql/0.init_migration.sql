
-- Create the Client table
CREATE TABLE Client (
    id VARCHAR(36) PRIMARY KEY,     -- UUID or string-based ID
    fullName VARCHAR(255) NOT NULL, -- Full name of the client
    email VARCHAR(255) NOT NULL     -- Email address of the client
);

-- Create the Task table with a foreign key to Client
CREATE TABLE Task (
    id VARCHAR(36) PRIMARY KEY,     -- UUID or string-based ID
    clientId VARCHAR(36),                     -- Foreign key to Client
    title VARCHAR(255) NOT NULL,              -- Title of the task
    description TEXT,                         -- Description of the task
    isCompleted TINYINT(1) DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically set to current timestamp on creation
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Automatically updates timestamp on any update
    FOREIGN KEY (clientId) REFERENCES Client(id) ON DELETE CASCADE -- Task is linked to a Client
);


