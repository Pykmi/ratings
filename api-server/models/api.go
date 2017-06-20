package models

type Record struct {
	Item          string `json:"item"`
	Sender        string `json:"sender"`
	Seller        string `json:"seller"`
	Saved         string `json:"saved"`
	Overall       string `json:"overall"`
	Communication string `json:"communication"`
	Shipping      string `json:"shipping"`
	Condition     string `json:"condition"`
	Comment       string `json:"comment"`
	SQLCondition  string `json:"sqlcondition"`
}

type Response struct {
	Code  int         `json:"code"`
	Error string      `json:"error"`
	Data  interface{} `json:"data"`
}

type SQLpost struct {
	Table string            `json:"table"`
	Map   map[string]string `json:"map"`
}

type SQLput struct {
	Table     string            `json:"table"`
	Map       map[string]string `json:"map"`
	Condition string            `json:"condition"`
}
