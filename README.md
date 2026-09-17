# HX Programme
Construction-first programme management.

## Implemented prototype
Master WBS/activity register; start, finish, duration, progress and status; FS/SS/FF/SF predecessor logic with lead/lag; successor recalculation; B01 baseline snapshot; look-ahead architecture; site updates without overwriting baseline; timestamped update history; Blocked/Delayed escalation; At Risk Register; procurement chains calculated backwards from construction start; stock, bespoke and subcontract procurement templates; milestone completion tracking; Upcoming/Watch/At Risk/Critical states; automatic procurement-to-risk escalation before site activity delay; dashboard KPIs; CSV export; mobile responsive UI; local persistence for prototype testing.

## Production architecture
Core entities: projects, users, project_members, tasks, dependencies, baselines, procurement_milestones, progress_updates, risks, risk_actions, evidence, notifications, audit_events.

Roles: Administrator, Project Director, Project Manager, Planner, Site Manager, QS/Commercial, Procurement, Subcontractor, Client/Viewer.

Notification events: procurement milestone approaching/missed; activity blocked/delayed; critical-path exposure; risk escalated; action overdue; task assigned; look-ahead update due.

Future HXcom integration keys: project_id, cost_code, boq_line_id, procurement_package_id, subcontract_id, variation_id, valuation_line_id.