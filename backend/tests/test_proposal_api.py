"""Backend tests for Locke & Ladder Proposal API"""
import pytest
import requests
import os

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")


class TestRoot:
    """Root API health"""

    def test_root_ok(self):
        resp = requests.get(f"{BASE_URL}/api/")
        assert resp.status_code == 200
        data = resp.json()
        assert data.get("ok") is True
        assert "service" in data


class TestProposalInterest:
    """POST and GET /api/proposal/interest"""

    def test_post_valid(self):
        payload = {
            "name": "TEST_BoardMember",
            "email": "board@test.com",
            "role": "Elder",
            "note": "Test submission",
        }
        resp = requests.post(f"{BASE_URL}/api/proposal/interest", json=payload)
        assert resp.status_code == 200
        data = resp.json()
        assert data["name"] == "TEST_BoardMember"
        assert data["email"] == "board@test.com"
        assert "id" in data
        assert "received_at" in data

    def test_post_invalid_email(self):
        payload = {"name": "Test", "email": "not-an-email"}
        resp = requests.post(f"{BASE_URL}/api/proposal/interest", json=payload)
        assert resp.status_code == 422

    def test_post_missing_name(self):
        payload = {"email": "test@test.com"}
        resp = requests.post(f"{BASE_URL}/api/proposal/interest", json=payload)
        assert resp.status_code == 422

    def test_get_list(self):
        resp = requests.get(f"{BASE_URL}/api/proposal/interest")
        assert resp.status_code == 200
        data = resp.json()
        assert isinstance(data, list)

    def test_post_persists_in_get(self):
        payload = {
            "name": "TEST_Persistence",
            "email": "persist@test.com",
            "role": "Treasurer",
        }
        post_resp = requests.post(f"{BASE_URL}/api/proposal/interest", json=payload)
        assert post_resp.status_code == 200
        created_id = post_resp.json()["id"]

        get_resp = requests.get(f"{BASE_URL}/api/proposal/interest")
        assert get_resp.status_code == 200
        ids = [r["id"] for r in get_resp.json()]
        assert created_id in ids


class TestEngagement:
    """POST /api/proposal/engagement"""

    def test_post_engagement(self):
        payload = {"event": "section_viewed", "section": "hero", "meta": {"time": 5}}
        resp = requests.post(f"{BASE_URL}/api/proposal/engagement", json=payload)
        assert resp.status_code == 200
        assert resp.json().get("ok") is True

    def test_post_engagement_minimal(self):
        payload = {"event": "page_load"}
        resp = requests.post(f"{BASE_URL}/api/proposal/engagement", json=payload)
        assert resp.status_code == 200
