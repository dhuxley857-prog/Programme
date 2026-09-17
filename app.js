const HX_PROGRAMME = { name: 'HX Programme', modules: ['Dashboard','Master Programme','Look Ahead','At Risk Register','Procurement'], statuses: ['Not Started','On Track','Blocked','Delayed','Complete'], procurementRisk: { enabled: true, trigger: 'Missed or forecast-missed upstream procurement milestone', levels: ['Upcoming','Watch','At Risk','Critical'] } };

window.HX_PROGRAMME = HX_PROGRAMME;