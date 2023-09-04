import { useEffect, useState } from "react";
import "./App.css";
import {
  getTimeZoneDetail,
  getTimeZones,
} from "./common/services/getTimeZones.service";
import FilterDropdown from "./common/components/FilterDropdown/FilterDropdown";
import Card from "./common/components/Card/Card";
import { convert24To12 } from "./common/helpers/convert24To12";

function App() {
  const [timeZones, setTimezones] = useState<Array<string> | null>(null);
  const [timeZonesSelected, setTimeZonesSelected] = useState<
    Array<Record<string, string | number>>
  >([]);

  const getTimeZonesLocal = async () => {
    const _timeZones = await getTimeZones();
    setTimezones(_timeZones);
  };

  const onSelectTimeZone = async (timezone: string) => {
    const timeZoneDetails = await getTimeZoneDetail(timezone);

    if (
      !timeZonesSelected.find((_timezone) => _timezone.timezone === timezone)
    ) {
      setTimeZonesSelected([...timeZonesSelected, timeZoneDetails]);
    }
  };

  const onDeleteTimeZone = (timezone: string) => {
    const newArr = timeZonesSelected.filter(
      (_timezone) => _timezone.timezone !== timezone
    );
    setTimeZonesSelected(newArr);
  };

  useEffect(() => {
    getTimeZonesLocal();
  }, []);

  return (
    <div className="container">
      <h1>Time zones</h1>
      <FilterDropdown
        options={timeZones ?? []}
        placeholder="Add new timezone"
        onSelectOption={onSelectTimeZone}
      />
      {timeZonesSelected.length ? (
        <div className="fav_container">
          {timeZonesSelected.map((timezone) => {
            const date = new Date(timezone.datetime).toLocaleDateString(
              "es-AR"
            );
            const hour = new Date(timezone.utc_datetime);
            return (
              <Card
                onDelete={() => onDeleteTimeZone(timezone.timezone as string)}
              >
                <Card.Title>{timezone.timezone}</Card.Title>
                <Card.Body>
                  <p>{date}</p>
                  <p>{convert24To12(hour)}</p>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
