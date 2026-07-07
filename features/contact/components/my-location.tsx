"use client";

import {
	Map as LeafletMap,
	MapMarker,
	MapTileLayer,
	MapTooltip,
	MapZoomControl,
} from "@/shared/components/map";

interface MyLocationProps {
	location: string;
	position: [number, number];
	className?: string;
}

export default function MyLocation({
	location,
	position,
	className,
}: MyLocationProps) {
	return (
		<LeafletMap center={position} zoom={4} className={className}>
			<MapTileLayer />
			<MapMarker position={position}>
				<MapTooltip side="bottom">{location}</MapTooltip>
				<MapZoomControl />
			</MapMarker>
		</LeafletMap>
	);
}
