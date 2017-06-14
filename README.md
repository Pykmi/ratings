# Rating System

## Input Format

The given rating is always tied to a specific transaction by its ID, as well as the ID of the user who sent it. It includes ratings for Overall Condition, Communication between parties, Shipping, and the Product's Condition. Finally it includes a small free comment. All ratings are given as points between 1 and 5.

```json
{
    "transactionid": 1932269264,
    "senderid": 2559702665,
    "overall": 1,
	"communication": 2,
	"shipping": 3,
	"condition": 4,
    "comment": "bad... took too long"
}
```

## Routes

### /rating/new

Creates a new rating record.

### /rating/edit

Modifies an existing record.

### /rating/all

Shows all records (debugging only).

### /rating/:userID

Looks up all records rated by one user.

### /rating/:transactionID

Looks up all records attached to one transaction.
