"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [1],
  {
    939(e, t, a) {
      const n = [
        {
          label: "Workspace",
          items: [
            {
              key: "dashboard",
              text: "Dashboard",
              href: "/pages/dashboard.html",
              icon: '<path d="M3 12 12 3l9 9"/><path d="M5 10v10h14V10"/>',
            },
            {
              key: "pro",
              text: "Go Pro",
              href: "#",
              badge: { kind: "pro", text: "PRO" },
              icon: '<path d="M12 2 15 8l6.5 1-4.8 4.6L18 20l-6-3-6 3 1.3-6.4L2.5 9 9 8z"/>',
            },
          ],
        },

        {
          label: "Components",
          items: [
            {
              key: "new scan",
              text: "New Scan",
              href: "newScan.html",
              icon: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>',
            },
            {
              key: "Statistics",
              text: "Statistics",
              href: "statistics.html",
              badge: { kind: "new", text: "NEW" },
              icon: '<path d="M3 20V4M7 20v-6M11 20v-10M15 20v-4M19 20V8"/>',
            },
            {
              key: "History",
              text: "History",
              href: "history.html",
              icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 10h10M7 14h7"/>',
            },
          ],
        },
      ];
      function o(e) {
        return `\n    <header class="">\n      <div class="crumbs">\n        ${(function (
          e,
        ) {
          if (!e) return "";
          const t = e
            .split("|")
            .map((e) => e.trim())
            .filter(Boolean);
          return t
            .map(
              (e, a) =>
                `${a > 0 ? '<svg class="sep" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>' : ""}<span${a === t.length - 1 ? ' class="current"' : ""}>${e}</span>`,
            )
            .join("");
        })(e)}\n\n     </div>\n    </header>`;
      }
      function s() {
        const e = document.body,
          t = e.getAttribute("data-active") || "",
          a = e.getAttribute("data-crumbs") || "",
          s = document.querySelector("[data-shell-sidebar]"),
          r = document.querySelector("[data-shell-topbar]"),
          i = document.querySelector("[data-shell-footer]");
        (s &&
          (s.outerHTML = (function (e) {
            const t = n
              .map((t) =>
                (function (e, t) {
                  const a = e.items
                    .map((e) =>
                      e.children
                        ? (function (e, t) {
                            const a = e.children.some((e) => e.key === t)
                                ? " is-open"
                                : "",
                              n = e.children
                                .map((e) => `<a href="${e.href}">${e.text}</a>`)
                                .join("");
                            return `\n    <div class="nav-item-group${a}" data-nav-group>\n      <a class="nav-link" href="javascript:void(0)" data-nav-toggle>\n        <svg viewBox="0 0 24 24">${e.icon}</svg>\n        <span>${e.text}</span>\n        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18 6-6-6-6"/></svg>\n      </a>\n      <div class="nav-submenu">${n}</div>\n    </div>`;
                          })(e, t)
                        : (function (e, t) {
                            const a = e.key === t ? " is-active" : "",
                              n = e.badge
                                ? `<span class="nav-badge ${e.badge.kind}">${e.badge.text}</span>`
                                : "";
                            return `\n    <a class="nav-link${a}" href="${e.href}">\n      <svg viewBox="0 0 24 24">${e.icon}</svg>\n      <span>${e.text}</span>\n      ${n}\n    </a>`;
                          })(e, t),
                    )
                    .join("");
                  return `\n    <nav class="nav-section">\n      <div class="nav-label">${e.label}</div>\n      ${a}\n    </nav>`;
                })(t, e),
              )
              .join("");
            return `\n    <aside class="d-sidebar">\n      <div class="brand">\n        <div class="brand-logo"><svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">\n <path fill="#ffffff" d="M24.8 12.2c-1.2-2.6-3.6-4.2-6.6-4.2c-4.8 0-8.2 3.8-8.2 10s3.4 10 8.2 10c3.1 0 5.5-1.6 6.7-4.3c.4-.9.2-1.9-.6-2.5c-.9-.7-2.1-.5-2.7.5c-.7 1.2-1.8 1.9-3.4 1.9c-2.9 0-4.6-2.5-4.6-5.6s1.7-5.6 4.6-5.6c1.6 0 2.7.7 3.3 1.8c.6 1 1.9 1.3 2.8.7c.8-.6 1-1.6.5-2.5z"/>\n </svg></div>\n        <div class="brand-text">\n          <div class="brand-name">CerebraScan</div>\n          <div class="brand-tag">v4.1.2 · preview</div>\n        </div>\n      </div>\n      ${t}\n      <div class="sidebar-footer">\n        <div class="workspace">\n          <div class="workspace-avatar">DF</div>\n          <div class="workspace-text">\n            <div class="workspace-name">Dr Amina</div>\n            <div class="workspace-role">admin</div>\n          </div>\n          <svg class="workspace-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">\n            <path d="m7 9 5-5 5 5"/><path d="m7 15 5 5 5-5"/>\n          </svg>\n        </div>\n      </div>\n    </aside>`;
          })(t)),
          r && (r.outerHTML = o(a)),
          i && (i.outerHTML = "\n "));
      }
      function r() {
        const e = document.body;
        if (e) {
          if (!document.querySelector(".drawer-backdrop")) {
            const a = document.createElement("div");
            ((a.className = "drawer-backdrop"),
              a.setAttribute("aria-hidden", "true"),
              e.appendChild(a),
              a.addEventListener("click", t));
          }
          (document.addEventListener("click", (a) => {
            if (a.target.closest("[data-drawer-open]"))
              return (
                a.preventDefault(),
                void e.classList.add("has-drawer-open")
              );
            const n = a.target.closest(
              '.d-sidebar a[href]:not([href^="#"]):not([href="javascript:void(0)"])',
            );
            e.classList.contains("has-drawer-open") && n && t();
          }),
            document.addEventListener("keydown", (a) => {
              "Escape" === a.key &&
                e.classList.contains("has-drawer-open") &&
                t();
            }));
        }
        function t() {
          e.classList.remove("has-drawer-open");
        }
      }
      function i() {
        (!(function () {
          const e = document.documentElement,
            t = document.getElementById("themeToggle");
          if (!t) return;
          const a = () => {
            t.innerHTML =
              "dark" === e.getAttribute("data-theme")
                ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
                : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
          };
          (a(),
            t.addEventListener("click", () => {
              const t =
                "dark" === e.getAttribute("data-theme") ? "light" : "dark";
              e.setAttribute("data-theme", t);
              try {
                localStorage.setItem("dash26-theme", t);
              } catch {}
              a();
            }));
        })(),
          (function () {
            const e = document.getElementById("heroDate");
            if (!e) return;
            const t = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })
              .format(new Date())
              .replace(/,/g, "")
              .split(" ");
            e.textContent = `${t[0]} · ${t[1]} ${t[2]} · ${t[3]}`;
          })(),
          document.querySelectorAll("[data-nav-toggle]").forEach((e) => {
            e.addEventListener("click", () => {
              const t = e.closest("[data-nav-group]");
              t && t.classList.toggle("is-open");
            });
          }),
          (function () {
            const e = (e) => {
              document.querySelectorAll(".dd-wrap.is-open").forEach((t) => {
                t !== e && t.classList.remove("is-open");
              });
            };
            (document.querySelectorAll("[data-dropdown]").forEach((t) => {
              const a = t.closest(".dd-wrap");
              a &&
                t.addEventListener("click", (t) => {
                  t.stopPropagation();
                  const n = !a.classList.contains("is-open");
                  (e(a), a.classList.toggle("is-open", n));
                });
            }),
              document.addEventListener("click", (t) => {
                t.target.closest(".dd-wrap") || e();
              }),
              document.addEventListener("keydown", (t) => {
                "Escape" === t.key && e();
              }));
          })(),
          document.querySelectorAll(".todo-check").forEach((e) => {
            e.addEventListener("change", () => {
              const t = e.closest(".todo-item");
              t && t.classList.toggle("is-done", e.checked);
            });
          }),
          document.querySelectorAll("[data-accordion-trigger]").forEach((e) => {
            e.addEventListener("click", () => {
              const t = e.closest("[data-accordion]");
              t && t.classList.toggle("is-open");
            });
          }),
          document.querySelectorAll("[data-tab-group]").forEach((e) => {
            const t = e.querySelectorAll(".tab"),
              a = e.querySelectorAll(".tab-panel");
            t.forEach((e) => {
              e.addEventListener("click", (n) => {
                n.preventDefault();
                const o = e.getAttribute("data-tab-target");
                (t.forEach((t) => t.classList.toggle("is-active", t === e)),
                  a.forEach((e) =>
                    e.classList.toggle(
                      "is-active",
                      e.getAttribute("data-tab-id") === o,
                    ),
                  ));
              });
            });
          }),
          r());
      }
      var l = a(762);
      l.t1.register(...l.$L);
      const d = {
          "revenue-line": (e) => ({
            type: "line",
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "2026",
                  data: [42, 56, 50, 78, 88, 96, 110, 124, 118, 142, 158, 184],
                  borderColor: e.primary,
                  backgroundColor: `${e.primary}20`,
                  tension: 0.35,
                  fill: !0,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                  borderWidth: 2.5,
                },
                {
                  label: "2025",
                  data: [38, 44, 46, 60, 70, 74, 82, 90, 92, 102, 110, 118],
                  borderColor: e.muted,
                  backgroundColor: "transparent",
                  tension: 0.35,
                  fill: !1,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                  borderWidth: 2,
                  borderDash: [4, 4],
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              scales: {
                y: {
                  grid: { color: e.soft, drawBorder: !1 },
                  ticks: { color: e.light },
                },
                x: { grid: { display: !1 }, ticks: { color: e.light } },
              },
            },
          }),
          "channels-bar": (e) => ({
            type: "bar",
            data: {
              labels: [
                "Dice",
                "IoU",
                "Sensitivity",
                "Precision",
                "Recall",
                "F1-score",
                "Accuracy",
              ],
              datasets: [
                {
                  label: "Values",
                  data: [93, 90, 92, 94, 91, 93, 99],
                  backgroundColor: [
                    e.primary,
                    e.success,
                    e.purple,
                    e.info,
                    e.warning,
                    e.pink,
                    e.muted,
                  ],
                  borderRadius: 6,
                  borderSkipped: !1,
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              plugins: { legend: { display: !1 } },
              scales: {
                y: {
                  grid: { color: e.soft, drawBorder: !1 },
                  ticks: { color: e.light },
                },
                x: { grid: { display: !1 }, ticks: { color: e.muted } },
              },
            },
          }),
          "devices-doughnut": (e) => ({
            type: "doughnut",
            data: {
              labels: ["Glioma", "Astrocytoma", "Pituitary Adenomas"],
              datasets: [
                {
                  data: [62, 30, 8],
                  backgroundColor: [e.primary, e.purple, e.info],
                  borderColor: e.bg,
                  borderWidth: 3,
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              cutout: "68%",
              plugins: { legend: { position: "right" } },
            },
          }),
          "sources-radar": (e) => ({
            type: "radar",
            data: {
              labels: [
                "+98%",
                "98%-95%",
                "95%-92%",
                "92%-90%",
                "90%-88%",
                "87%-86%",
              ],
              datasets: [
                {
                  label: "Age +50",
                  data: [4145, 4495, 4795, 3196, 5416, 3306],
                  borderColor: e.primary,
                  backgroundColor: `${e.primary}30`,
                  pointBackgroundColor: e.primary,
                },
                {
                  label: "Age -50",
                  data: [3315, 4299, 3525, 8170, 2452, 3838],
                  borderColor: e.muted,
                  backgroundColor: `${e.muted}20`,
                  pointBackgroundColor: e.muted,
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              scales: {
                r: {
                  angleLines: { color: e.soft },
                  grid: { color: e.soft },
                  pointLabels: { color: e.muted, font: { size: 11 } },
                  ticks: { display: !1 },
                },
              },
            },
          }),
          "mrr-stacked": (e) => ({
            type: "bar",
            data: {
              labels: ["Q1", "Q2", "Q3", "Q4"],
              datasets: [
                {
                  label: "Starter",
                  data: [12, 18, 22, 28],
                  backgroundColor: e.info,
                  borderRadius: 4,
                  stack: "a",
                },
                {
                  label: "Pro",
                  data: [38, 48, 56, 64],
                  backgroundColor: e.primary,
                  borderRadius: 4,
                  stack: "a",
                },
                {
                  label: "Team",
                  data: [22, 28, 36, 44],
                  backgroundColor: e.purple,
                  borderRadius: 4,
                  stack: "a",
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              scales: {
                y: {
                  stacked: !0,
                  grid: { color: e.soft, drawBorder: !1 },
                  ticks: { color: e.light },
                },
                x: {
                  stacked: !0,
                  grid: { display: !1 },
                  ticks: { color: e.muted },
                },
              },
            },
          }),
          "dashboard-monthly": (e) => ({
            type: "line",
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Revenue",
                  data: [42, 38, 56, 50, 78, 70, 96, 88, 118, 102, 144, 168],
                  borderColor: e.primary,
                  backgroundColor: `${e.primary}24`,
                  tension: 0.4,
                  fill: !0,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: e.primary,
                  pointHoverBorderColor: e.bg,
                  pointHoverBorderWidth: 3,
                  borderWidth: 2.5,
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              plugins: { legend: { display: !1 } },
              scales: {
                y: {
                  grid: { color: e.soft, drawBorder: !1 },
                  ticks: { color: e.light, maxTicksLimit: 4 },
                },
                x: {
                  grid: { display: !1 },
                  ticks: { color: e.light, font: { size: 10 } },
                },
              },
            },
          }),
          "sessions-area": (e) => ({
            type: "line",
            data: {
              labels: Array.from({ length: 30 }, (e, t) => `${t + 1}`),
              datasets: [
                {
                  label: "Segmentation",
                  data: [
                    23, 41, 67, 35, 52, 48, 29, 44, 38, 61, 27, 55, 33, 49, 42,
                    36, 58, 31, 45, 39, 50, 47, 34, 28, 51, 19, 37, 42, 31, 31,
                  ],
                  borderColor: e.success,
                  backgroundColor: `${e.success}24`,
                  tension: 0.4,
                  fill: !0,
                  pointRadius: 0,
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: !0,
              maintainAspectRatio: !1,
              plugins: { legend: { display: !1 } },
              scales: {
                y: {
                  grid: { color: e.soft, drawBorder: !1 },
                  ticks: { color: e.light },
                },
                x: {
                  grid: { display: !1 },
                  ticks: { color: e.light, maxTicksLimit: 6 },
                },
              },
            },
          }),
        },
        c = new Map();
      function u() {
        const e = (function () {
          const e = getComputedStyle(document.documentElement);
          return {
            primary: e.getPropertyValue("--primary").trim(),
            success: e.getPropertyValue("--success").trim(),
            danger: e.getPropertyValue("--danger").trim(),
            warning: e.getPropertyValue("--warning").trim(),
            info: e.getPropertyValue("--info").trim(),
            purple: e.getPropertyValue("--purple").trim(),
            pink: e.getPropertyValue("--pink").trim(),
            orange: e.getPropertyValue("--orange").trim(),
            teal: e.getPropertyValue("--teal").trim(),
            text: e.getPropertyValue("--t-base").trim(),
            muted: e.getPropertyValue("--t-muted").trim(),
            light: e.getPropertyValue("--t-light").trim(),
            border: e.getPropertyValue("--border").trim(),
            soft: e.getPropertyValue("--border-soft").trim(),
            bg: e.getPropertyValue("--bg-card").trim(),
          };
        })();
        (!(function (e) {
          ((l.t1.defaults.font.family = "'Inter', system-ui, sans-serif"),
            (l.t1.defaults.font.size = 12),
            (l.t1.defaults.color = e.muted),
            (l.t1.defaults.borderColor = e.soft),
            (l.t1.defaults.plugins.legend.position = "bottom"),
            (l.t1.defaults.plugins.legend.labels.usePointStyle = !0),
            (l.t1.defaults.plugins.legend.labels.padding = 16),
            (l.t1.defaults.plugins.legend.labels.boxWidth = 8),
            (l.t1.defaults.plugins.legend.labels.boxHeight = 8),
            (l.t1.defaults.plugins.tooltip.backgroundColor = e.text),
            (l.t1.defaults.plugins.tooltip.titleColor = e.bg),
            (l.t1.defaults.plugins.tooltip.bodyColor = e.bg),
            (l.t1.defaults.plugins.tooltip.padding = 10),
            (l.t1.defaults.plugins.tooltip.cornerRadius = 6),
            (l.t1.defaults.plugins.tooltip.displayColors = !1));
        })(e),
          document.querySelectorAll("canvas[data-chart-key]").forEach((t) => {
            const a = t.getAttribute("data-chart-key"),
              n = d[a];
            if (!n) return;
            const o = c.get(t);
            (o && o.destroy(), c.set(t, new l.t1(t, n(e))));
          }));
      }
      var p = a(437);
      a(560);
      const m = [
          { name: "Riga", coords: [56.95, 24.1] },
          { name: "New York", coords: [40.71, -74] },
          { name: "San Francisco", coords: [37.77, -122.42] },
          { name: "London", coords: [51.5, -0.12] },
          { name: "Berlin", coords: [52.52, 13.4] },
          { name: "Tokyo", coords: [35.68, 139.69] },
          { name: "Sydney", coords: [-33.86, 151.21] },
          { name: "São Paulo", coords: [-23.55, -46.63] },
          { name: "Cape Town", coords: [-33.92, 18.42] },
          { name: "Dubai", coords: [25.27, 55.3] },
        ],
        v = new Map();
      function h(e) {
        const t = v.get(e);
        if (t) {
          try {
            t.destroy();
          } catch {}
          e.innerHTML = "";
        }
        const a = (function () {
            const e = getComputedStyle(document.documentElement);
            return {
              primary: e.getPropertyValue("--primary").trim(),
              purple: e.getPropertyValue("--purple").trim(),
              soft: e.getPropertyValue("--bg-muted").trim(),
              border: e.getPropertyValue("--border").trim(),
              text: e.getPropertyValue("--t-base").trim(),
              bg: e.getPropertyValue("--bg-card").trim(),
            };
          })(),
          n = new p.A({
            selector: e,
            map: "world",
            backgroundColor: "transparent",
            zoomOnScroll: !1,
            regionStyle: {
              initial: {
                fill: a.soft,
                stroke: a.border,
                strokeWidth: 0.4,
                fillOpacity: 1,
              },
              hover: { fill: a.primary, fillOpacity: 0.5 },
            },
            markers: m,
            markerStyle: {
              initial: { fill: a.primary, stroke: a.bg, strokeWidth: 2, r: 5 },
              hover: { fill: a.purple, stroke: a.bg, strokeWidth: 2, r: 7 },
            },
            labels: { markers: { render: (e) => e.name } },
          });
        v.set(e, n);
      }
      function g() {
        document.querySelectorAll("[data-vmap]").forEach(h);
      }
      var f = a(157),
        b = a(208),
        y = a(376),
        k = a(979),
        w = a(614);
      const x = [
          {
            title: "Q2 kickoff",
            start: "2026-04-01T09:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "Design review",
            start: "2026-04-02T11:00",
            classNames: ["fc-cat-team"],
          },
          {
            title: "Lunch w/ Marcus",
            start: "2026-04-03T13:00",
            classNames: ["fc-cat-personal"],
          },
          {
            title: "🎂 Sara birthday",
            start: "2026-04-05",
            allDay: !0,
            classNames: ["fc-cat-birthday"],
          },
          {
            title: "Standup",
            start: "2026-04-07T10:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "Brand workshop",
            start: "2026-04-07T14:00",
            classNames: ["fc-cat-team"],
          },
          {
            title: "All-hands",
            start: "2026-04-08T15:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "✈ Lisbon trip",
            start: "2026-04-09",
            end: "2026-04-13",
            allDay: !0,
            classNames: ["fc-cat-travel"],
          },
          {
            title: "Investor sync",
            start: "2026-04-14T16:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "📑 Tax deadline",
            start: "2026-04-15",
            allDay: !0,
            classNames: ["fc-cat-finance"],
          },
          {
            title: "Invoice approval",
            start: "2026-04-17T12:00",
            classNames: ["fc-cat-finance"],
          },
          {
            title: "Run with Mira",
            start: "2026-04-20T07:00",
            classNames: ["fc-cat-personal"],
          },
          {
            title: "Earth day talk",
            start: "2026-04-22T14:00",
            classNames: ["fc-cat-team"],
          },
          {
            title: "✓ Dependency merge",
            start: "2026-04-23",
            allDay: !0,
            classNames: ["fc-cat-work"],
          },
          {
            title: "Coffee w/ Rita",
            start: "2026-04-24T10:00",
            classNames: ["fc-cat-personal"],
          },
          {
            title: "PR reviews",
            start: "2026-04-24T15:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "Run · 5K",
            start: "2026-04-25T07:00",
            classNames: ["fc-cat-personal"],
          },
          {
            title: "Dinner @ Carla's",
            start: "2026-04-25T20:00",
            classNames: ["fc-cat-personal"],
          },
          {
            title: "Sprint planning",
            start: "2026-04-27T10:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "Board review",
            start: "2026-04-28T14:00",
            classNames: ["fc-cat-work"],
          },
          {
            title: "Eng review",
            start: "2026-04-28T17:00",
            classNames: ["fc-cat-team"],
          },
          {
            title: "Anya 1:1",
            start: "2026-04-29T11:30",
            classNames: ["fc-cat-team"],
          },
          {
            title: "Newsletter goes out",
            start: "2026-04-30T09:00",
            classNames: ["fc-cat-team"],
          },
          {
            title: "Yoga",
            start: "2026-04-30T19:00",
            classNames: ["fc-cat-personal"],
          },
        ],
        M = {
          Day: "timeGridDay",
          Week: "timeGridWeek",
          Month: "dayGridMonth",
          Agenda: "listWeek",
        };
      let E = null;
      function A(e) {
        if (E)
          try {
            E.destroy();
          } catch {}
        ((E = new f.Vv(e, {
          plugins: [b.A, y.A, k.A, w.Ay],
          initialView: "dayGridMonth",
          initialDate: "2026-04-25",
          headerToolbar: !1,
          height: "100%",
          expandRows: !0,
          dayMaxEvents: 3,
          fixedWeekCount: !1,
          firstDay: 0,
          nowIndicator: !0,
          selectable: !0,
          editable: !0,
          events: x,
          dayHeaderFormat: { weekday: "short" },
        })),
          E.render(),
          (function (e) {
            const t = e.closest(".cal-main") || document,
              a = t.querySelector(".cal-month"),
              n = () => {
                if (!a || !E) return;
                const e = E.getDate(),
                  t = e.toLocaleString("en-US", { month: "long" }),
                  n = e.getFullYear();
                a.innerHTML = `${t} <span class="yr">${n}</span>`;
              };
            t.querySelectorAll(".cal-nav-btn").forEach((e, t) => {
              e.addEventListener("click", () => {
                E && (0 === t && E.prev(), 1 === t && E.next(), n());
              });
            });
            const o = t.querySelector(".cal-today-btn");
            (o &&
              o.addEventListener("click", () => {
                (E.today(), n());
              }),
              t.querySelectorAll(".cal-view-tab").forEach((e) => {
                e.addEventListener("click", () => {
                  const a = e.textContent.trim(),
                    o = M[a] || "dayGridMonth";
                  (t
                    .querySelectorAll(".cal-view-tab")
                    .forEach((t) => t.classList.toggle("is-active", t === e)),
                    E.changeView(o),
                    n());
                });
              }),
              setTimeout(n, 0));
          })(e));
      }
      let L = null,
        C = null,
        S = null,
        D = null,
        T = [],
        N = [],
        V = 0;
      function $(e, t) {
        if (!t) return 1;
        const a = t.toLowerCase(),
          n = e.label.toLowerCase();
        return n === a
          ? 100
          : n.startsWith(a)
            ? 50
            : n.includes(a)
              ? 20
              : e.section.toLowerCase().includes(a)
                ? 5
                : 0;
      }
      function B() {
        D.innerHTML =
          0 === N.length
            ? '<div class="palette-empty">No results</div>'
            : N.map((e, t) => `\n      <div ></div>\n `).join("");
      }
      function P(e) {
        ((N = T.map((t) => ({ item: t, s: $(t, e) }))
          .filter((e) => e.s > 0)
          .sort((e, t) => t.s - e.s)
          .slice(0, 12)
          .map((e) => e.item)),
          (V = 0),
          B());
      }
      function H(e) {
        e &&
          (I(),
          "action" === e.kind && "function" == typeof e.action
            ? e.action()
            : e.href &&
              ("_blank" === e.target
                ? window.open(e.href, "_blank", "noopener")
                : (window.location.href = e.href)));
      }
      function R() {
        const e = D.querySelector(".palette-result.is-selected");
        e &&
          "function" == typeof e.scrollIntoView &&
          e.scrollIntoView({ block: "nearest" });
      }
      function q() {
        (C &&
          !document.contains(C) &&
          ((C = null), (L = null), (S = null), (D = null)),
          C ||
            ((L = document.createElement("div")),
            (L.className = "palette-backdrop"),
            (L.innerHTML =
              '\n  <div class="palette-modal" role="dialog" aria-modal="true" aria-label="Command palette">\n    <div class="palette-input-row">\n      <svg viewBox="0 0 24 24" class="palette-icon" aria-hidden="true">\n        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/>\n        <path d="m21 21-4.3-4.3" fill="none" stroke="currentColor" stroke-width="2"/>\n      </svg>\n      <input class="palette-input" type="text" placeholder="Search pages, actions…" autocomplete="off" spellcheck="false">\n      <kbd class="palette-esc">esc</kbd>\n    </div>\n    <div class="palette-results" role="listbox"></div>\n   </div>\n'),
            document.body.appendChild(L),
            (C = L.querySelector(".palette-modal")),
            (S = L.querySelector(".palette-input")),
            (D = L.querySelector(".palette-results")),
            L.addEventListener("click", (e) => {
              e.target === L && I();
            }),
            S.addEventListener("input", () => P(S.value)),
            S.addEventListener("keydown", (e) => {
              "ArrowDown" === e.key
                ? (e.preventDefault(),
                  (V = Math.min(V + 1, N.length - 1)),
                  B(),
                  R())
                : "ArrowUp" === e.key
                  ? (e.preventDefault(), (V = Math.max(V - 1, 0)), B(), R())
                  : "Enter" === e.key
                    ? (e.preventDefault(), H(N[V]))
                    : "Escape" === e.key && (e.preventDefault(), I());
            }),
            D.addEventListener("click", (e) => {
              const t = e.target.closest(".palette-result");
              t && H(N[Number(t.getAttribute("data-index"))]);
            })),
          0 === T.length &&
            (T = (function () {
              const e = [];
              for (const t of n)
                for (const a of t.items)
                  if (a.children)
                    for (const n of a.children)
                      e.push({
                        kind: "page",
                        label: n.text,
                        section: `${t.label} › ${a.text}`,
                        href: n.href,
                        icon: a.icon,
                      });
                  else
                    a.href &&
                      "#" !== a.href &&
                      e.push({
                        kind: "page",
                        label: a.text,
                        section: t.label,
                        href: a.href,
                        icon: a.icon,
                      });
              return (
                e.push({
                  kind: "action",
                  label: "Toggle theme (light / dark)",
                  section: "Action",
                  action: () => {
                    const e = document.documentElement,
                      t =
                        "dark" === e.getAttribute("data-theme")
                          ? "light"
                          : "dark";
                    e.setAttribute("data-theme", t);
                    try {
                      localStorage.setItem("dash26-theme", t);
                    } catch {}
                    const a = document.getElementById("themeToggle");
                    a && a.click();
                  },
                  icon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
                }),
                e
              );
            })()),
          (S.value = ""),
          P(""),
          document.body.classList.add("has-palette-open"),
          setTimeout(() => S.focus(), 0));
      }
      function I() {
        C && document.body.classList.remove("has-palette-open");
      }
      function W() {
        return document.body.classList.contains("has-palette-open");
      }
      let z = !1;
      function O() {
        (s(),
          i(),
          z ||
            ((z = !0),
            document.addEventListener("click", (e) => {
              e.target.closest("[data-palette-open]") &&
                (e.preventDefault(), q());
            }),
            document.addEventListener("keydown", (e) => {
              if ((e.metaKey || e.ctrlKey) && "k" === e.key)
                return (e.preventDefault(), void (W() ? I() : q()));
              if ("/" === e.key && !W()) {
                const t =
                    document.activeElement && document.activeElement.tagName,
                  a =
                    document.activeElement &&
                    document.activeElement.isContentEditable;
                "INPUT" === t ||
                  "TEXTAREA" === t ||
                  "SELECT" === t ||
                  a ||
                  (e.preventDefault(), q());
              }
            })),
          (function () {
            if (!document.querySelector("canvas[data-chart-key]")) return;
            (u(),
              new MutationObserver((e) => {
                e.some((e) => "data-theme" === e.attributeName) && u();
              }).observe(document.documentElement, { attributes: !0 }));
          })(),
          (function () {
            if (!document.querySelector("[data-vmap]")) return;
            (g(),
              new MutationObserver((e) => {
                e.some((e) => "data-theme" === e.attributeName) && g();
              }).observe(document.documentElement, { attributes: !0 }));
          })(),
          (function () {
            const e = document.querySelector("[data-fc]");
            if (!e) return;
            (A(e),
              new MutationObserver((e) => {
                e.some((e) => "data-theme" === e.attributeName) &&
                  E &&
                  E.render();
              }).observe(document.documentElement, { attributes: !0 }));
          })());
      }
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", O)
        : O();
    },
  },
  (e) => {
    e.O(0, [707, 311, 96], () => {
      return ((t = 939), e((e.s = t)));
      var t;
    });
    e.O();
  },
]);
