from datetime import datetime

def convert_to_date(date_str: str):
    try:
        return datetime.strptime(date_str, "%d/%m/%Y").date()
    except ValueError as e:
        raise ValueError(f"Invalid date format: {date_str}. Expected format is dd/mm/yyyy.") from e
