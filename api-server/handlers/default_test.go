package handlers

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestDefaultHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/", nil)
	if err != nil {
		t.Logf("%v", err.Error())
		t.FailNow()
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Default)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("Handler returned wrong status code: %v (wanted %v)", status, http.StatusOK)
	}

	expected := `{"Viesti":"Moi vaan!"}`
	if rr.Body.String() != expected {
		t.Errorf("handler returned unexpected body: %v (expected %v)", rr.Body.String(), expected)
	}
}
