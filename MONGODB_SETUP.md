# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account
1. Go to https://cloud.mongodb.com/
2. Sign up for a free account
3. Create a new project

## Step 2: Create a Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select a cloud provider and region
4. Name your cluster (e.g., "notekeeper")
5. Click "Create Cluster"

## Step 3: Create Database User
1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `notekeeper-user`
5. Password: Generate a secure password (no special characters)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

## Step 4: Configure Network Access
1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

## Step 5: Get Connection String
1. Go to "Database" in left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your actual password

Example connection string:
```
mongodb+srv://notekeeper-user:yourpassword@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
```