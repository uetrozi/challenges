import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab
          onClick={onShowAllEntries}
          isActive={filter === "all" ? true : false}
        >
          All Entries{" "}
          <Badge isActive={filter === "all" ? true : false}>
            {allEntriesCount}
          </Badge>
        </Tab>
        <Tab
          onClick={onShowFavoriteEntries}
          isActive={filter === "favorites" ? true : false}
        >
          Favorites
          <Badge isActive={filter === "favorites" ? true : false}>
            {favoriteEntriesCount}
          </Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              isFavorite={entry.isFavorite}
              id={entry.id}
              onToggleFavorite={onToggleFavorite}
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
