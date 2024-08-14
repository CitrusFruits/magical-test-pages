const gitLogTimestamps = `1676499058 [sc-12990] Increase Andrew and Dennis' code owners scope
1676496435 [sc-12999] Add more context to sendgrid logs
1676486997 [sc-12415] server: Adds creationMethod enum to mappings table
1676486997 [sc-12415] server: Adds autoCreateMappingsCopyPaste feature flag
1676486997 [sc-12415] ext: Creates mapping for variable on copy and paste
1676486997 [sc-12415] ext: Adds logging events for copy-paste action
1676486997 [sc-12415] common: Updates Mapping type to support creationMethod
1676484931 [sc-12969] Restore case insensitive matching to non-teams users
1676482986 [sc-12988] server: Create team or share shortcut email replies to sharer instead of hello@
1676478078 [sc-3541] use rollup-plugin-define instead of rollup-plugin-replace
1676478078 [sc-3541] restart build on manifest change
1676478078 [sc-3541] implement manifest transformation for build script
1676478078 [sc-3541] generate entry points from manifest & associated html files
1676478078 [sc-3541] add readme to \`/scripts\` directory
1676478078 [sc-3541] add perf timing plugin
1676478078 [sc-3541] add file copy/watcher tests
1676478078 [sc-3541] add file copier/watcher to build script
1676478078 [sc-3541] add build unit tests
1676478078 [sc-3541] add barebones build script
1676476907 [sc-12978] remove background-init-alarms.ts
1676424754 [sc-12283] server: Send email when user shares shortcut or transfer
1676424754 [sc-12283] Add templateId for share shortcut or transfer to team email
1676422371 [sc-12952] consolidate ready promises, make ready promises typesafe
1676422309 [sc-12952] explicitly define undefined variables
1676420587 [sc-12835] server: addContactsToSendgridLists() should only add contacts with valid email addresses
1676420584 [sc-12835] Refactor isEmail() function to common repo
1676420547 [sc-12835] server: Reduce sendgrid.ts SENDGRID_CONTACTS_BATCH_SIZE
1676415035 [sc-12284] server: Send email to workspace users when team is created
1676415035 [sc-12284] Add templateId for user on workspace creating a team
1676415035 [sc-12284] Add helper functions
1676411891 [sc-12933] ext: Change create workspace graphic
1676411891 [sc-12933] ext: Add gradient border to join workspace button
1676411140 [sc-12965] Server: Remap equivalent mappings that come in
1676411140 [sc-12965] Server: Re-arrange code block for mappings diff-ing
1676411140 [sc-12965] Server: Adding unit test that catches the disabled => enabled remapping flow
1676410413 [sc-12910] Redirect join and create routes based on user state
1676407483 [sc-12638] Handle error message with valid trigger in panel
1676407483 [sc-12638] Handle error message with valid trigger in options page
1676407483 [sc-12638] Check if trigger starts with alphanumeric character in helper
1676406709 [sc-12977] server: Turn off FF for autoDisplayDropdownForExistingMappings
1676405563 [sc-12966] Remove poor performing sites from autofill suggestion config
1676401918 [sc-12813] Add mButtonTriggered in drpodown invoke reason type
1676399476 [sc-12525] Get savedSnippets and derived data from store at the top level
1676399476 [sc-12525] Delete import/export buttons from sidebar
1676399476 [sc-12525] Add import/export to profile button
1676398866 [sc-12971] server: Ramp showMButtonOnInputFocus to 100%
1676390300 [sc-12834] ext. Support panel - ensure toggle btn stays visible when open
1676390300 [sc-12834] ext. Support panel - consolidate gem button styles - also reduce jank in guided transfer interfaces - hide guided transfer interfaces when support panel is open
1676390300 [sc-12834] ext. Support panel - button & link restyle
1676390300 [sc-12834] ext. Support options - prevent image loading jank
1676390300 [sc-12834] ext. Icons - create separate question mark icon
1676390300 [sc-12834] ext. FAB - transition improvements
1676390300 [sc-12834] ext. FAB - prevent main button taking focus on mousedown - default behavior is for the browser to retain implicit focus on an element after it is clicked. This isn't typically shown to the user with a visible focus state, but on some pages the default behavior is to make this focus location explicit when the user re-opens the tab. In our case, this was resulting in the hover state of our fab triggering unexpectedly if the user leaves and returns to the tab after clicking the FAB. - an alternate solution would be to track the \`mousedown\` state of the fab, and avoid setting the internal focus state when \`mousedown\` is \`true\`.
1676340166 [sc-12493] ext: Remove unused recommended-transfer css from guided transfer dialog
1676340166 [sc-12493] ext: Remove recommended transfers from guided transfers dialog
1676336339 [sc-12956] Ramp up team shortcut expansion to 30%
1676326018 [sc-12905] server: Check if user in deny list before creating or joining workspace
1676326018 [sc-12905] server: Add tests to cover deny list cases
1676323812 [sc-12949] Add @typescript-eslint/init-declarations rule
1676310739 [sc-12935] server: Turn on one-click transfers for elgibile users
1676307740 [sc-12215] Fix upsert conflict causing issues with domain change
1676256504 [sc-12921] ext: Lowercase 'Team' in 'Share to Team'
1676140039 [sc-12890] Add eslint rules for closing tag location and max expression per line
1676073507 [sc-12539] ext: Make snippet icons for team snippets right-aligned
1676073507 [sc-12539] ext: Make share snippet button wider in peek
1676073507 [sc-12539] ext: Make checklist larger when there are more than 3 teams
1676073507 [sc-12539] ext: Fix alignment and color of title and subtitle
1676073507 [sc-12539] ext: Add gray divider to share peek/modals
1676066584 [sc-12578] ext: use destUriToTabTitle to populate gem title tooltips
1676066584 [sc-12578] ext: copy changes for 1-ct gem tooltips
1676056836 [sc-12884] extension: handle insufficient scope error in 1-CT
1676056836 [sc-12884] background: Add ability to close a target tab
1676054592 [sc-12830] ext: Move time saved panel banner into own folder
1676054592 [sc-12830] ext: Create join workspace banner in panel
1676054592 [sc-12830] ext: Add hasDismissedJoinWorkspaceBanner to panel tabState
1676053591 [sc-12173] Don't filter dropdown if we have passed in conflicts
1676051700 [sc-11940] Keydown to dropdown visible perf tests
1676046694 [sc-12808] Coerce array.length into a boolean when using it as a condition for showing component
1676045354 [sc-12875] ext: Update create workspace graphic
1676004866 [sc-11289] Add rule banning floating promises
1676003065 [sc-12173] Fix expansion conflict dropdown for shortcuts with variables on multiple elements
1675985735 [sc-12710] ext: Removes nubank from autodisplay config
1675985735 [sc-12710] common: Stop autodisplaying dropdown on Hubspot
1675985735 [sc-12710] common: Remove 'type' from autosuggest disallowed element attribute values
1675981330 [sc-12846] Parallelize jest tests and split lint/check/unit into seperate tests
1675978716 [sc-12173] Shortcut trigger expansion conflicts edge cases
1675975782 [sc-12856] Ramp transfer sharing to all workspaces
1675975782 [sc-12856] Delete allow list of workspaces for team transfers
1675971256 [sc-12158] ext: Order teams in workspace alphabetically
1675961829 [sc-12575] nit: fix 1-CT prompt positioning
1675961829 [sc-12575] ext: rename generic magic google sheets autofill error
1675961829 [sc-12575] ext: prompt different help card states for corresponding error cases
1675961829 [sc-12575] ext: fix one-ct launch from panel transfer cards
1675961829 [sc-12575] ext: create separate error types for 1CT
1675961829 [sc-12575] ext: Limit 1-click transfer variables to 25
1675961829 [sc-12575] ext: Check that sheet details were properly saved before creating mappings
1675961829 [sc-12575] ext: Add properties to 1-ct help card
1675961829 [sc-12575] Remove error handlers from components, panel and gems
1675933044 [sc-12448] ext: m-button dropshadow and logo gif update
1675921213 [sc-12840] Update create workspace image
1675921213 [sc-12840] Add the environment to the create workspace onboarding URL
1675919990 [sc-12838] Use redux app selector instead of store.getState()
1675910766 [sc-12835] server: Batch calls to sendgrid PUT /v3/marketing/contacts API
1675910766 [sc-12767] server: Convert all registered users to the PRO_BETA_COHORT.MANUAL_ADD_USING_EMAIL_DOMAIN cohort
1675908702 [sc-12788] ext: Support panel refactor - separate hooks
1675908702 [sc-12788] ext: Support panel refactor - move to separate folder
1675908702 [sc-12788] ext: Support panel - button style changes
1675908702 [sc-12788] ext: Support panel - add "Book a live demo" button
1675906127 [sc-12344] ext: Add feature flag for canCreateWorkspace
1675906127 [sc-12344] ext: Add create workspace graphic
1675906127 [sc-12344] ext: Add create workspace button
1675904319 [sc-12741] ext. Manage/Share transfer dialogs - ensure dialogs take focus
1675904319 [sc-12741] ext. Manage/Share transfer dialogs - consolidate styles
1675903030 [sc-12775] Ext: Store transferId context in removeMapping (can be a shared or private transfer)
1675903030 [sc-12775] Ext: Properly merge enabled/disabled mappings for a destination based on priority for the private transfer.
1675903030 [sc-12775] Ext: Prioritize private transfer over shared transfers
1675903030 [sc-12775] Ext: Pass along srcTab information so the private copy of a transfer uses the users' own source and destination data
1675903030 [sc-12775] Ext: Match input field to existing destinations for dropdown
1675903030 [sc-12775] Ext: Don't show unmap section for shared transfers
1675903030 [sc-12775] Ext: Add asterix to group title for a shared transfer
1675901105 [sc-12260] ext: Update facepile css to be center-aligned
1675901105 [sc-12260] ext: Set \`teamWithCoworkerInfoCache\` with workspace available to user
1675901105 [sc-12260] ext: Put ActionTabButton into own file to follow eslint rule
1675901105 [sc-12260] ext: Display join workspace card in workspace
1675901105 [sc-12260] ext: Create join workspace card hooks
1675901105 [sc-12260] ext: Create join workspace card component
1675901105 [sc-12260] ext: Add tracking for join workspace events
1675901105 [sc-12260] ext: Add local storage \`teamWithCoworkerInfoCache\`
1675901105 [sc-12260] Create RPC methods to join workspace
1675901105 [sc-12260] Add unit tests for updating join workspace details
1675889934 wip: Add react/jsx-first-prop-new-line eslint rule
1675882477 [sc-12134] ext: Organize the components z-index into variables and adjust for m-button
1675880080 [sc-10674] Allow users to import shorcuts in an empty workspace
1675878187 [sc-12790] ext: Remove Pro Beta (variable) upgrade desktop notification as it is outdated/no longer needed
1675876573 [sc-12759] ext: Add Calendly script/styles to options CSP 
1675876573 [sc-12759] ext: (workspace) Add "Book a live demo" button - move \`options-navbar\` to its own folder - refactor \`options-navbar\` hooks to separate file - add types for Calendly - add new tracking event \`navbar.bookDemo\`
1675876573 [sc-12759] common/server: deprecate \`showGetStartedInNavBar\` feature flag
1675874116 [sc-12640] Remove tip for triggers that start with alphanumeric character
1675871791 [sc-12173] ext: Update tab state so dropdown on conflict shows shortcuts only
1675871791 [sc-12173] ext: Shortcut expansion for teams
1675871791 [sc-12173] Add FF for teamsShortcutExpansion
1675870194 [sc-12520] make perf logging more readable
1675867983 [sc-12777] Server: Filter on transfer.creatorUserId when deleting a mapping.
1675866558 [sc-12777] Add unit test to catch issue where user can delete another user's transfer mappings
1675831036 [sc-12632] ext: Launch transfer-remaining when launching existing 1-ct
1675827759 [sc-12695] server: enable transfer sharing for users in allowed workspaces
1675827759 [sc-12695] server: Alphabetize feature flags in \`getFeatureFlagsForRequest\`
1675827759 [sc-12695] server: Add list of workspaces to enable team transfers on
1675817326 [sc-12767] server: Convert all users registered with gmail emails to the PRO_BETA_COHORT.MANUAL_ADD_USING_EMAIL_DOMAIN cohort
1675814505 [sc-12630] Ext: The displayValue of the magic suggestion should also include current field and dedupe
1675809267 [sc-10924] ext: Bump up options page perf test bounds
1675808041 [sc-12693] ext: Update extension name
1675807907 [sc-12694] Update CODEOWNERS
1675806423 [sc-12756] Server: Fix issue where multiple duplicate mappings were being returned on transfer upsert
1675806423 [sc-12756] Server: Dedupe mappings by source+dest for incoming transfers
1675806423 [sc-12756] Server: Add unit test to catch duplicate mappings issue
1675805124 [sc-11966] ext: Clear snippets between tests
1675804106 [sc-12738] ext: Remove unused Transfer JSON-RPC methods
1675804106 [sc-12738] ext: Remove top-level transfer storage key
1675804106 [sc-12738] ext: Remove team transfers from global state
1675792730 [sc-12521] Fix mapped variable overflow on transfer panel
1675789303 [sc-12458] modify tab state to show simplified dropdown when applicable
1675789303 [sc-12458] modify find labels api to be a bit more flexible
1675789303 [sc-12458] Show a very rudementary version of the simplified dropdown
1675784470 [sc-12694] Update CODEOWNER file
1675748253 [sc-12724] Server: Renaming variables to do with mappings in transfersHandler.upsert
1675748253 [sc-12724] Server: Be defensive and guard against data issues when error flows happen - no transfer mappings for a transfer
1675735828 [sc-12503] Add same empty state to unjoined workspaces transfers tab as the shortcuts tab
1675731836 [sc-12424] Server: Re-enable disabled transfers if a new mapping is created for it in legacy mapping flow
1675731836 [sc-12424] Server: Add unit test to cover scenario for a new mapping re-enabling a transfer
1675730352 [sc-12593] Server: Add unit test to cover scenario existing mapping needing to be remapped
1675730352 [sc-12593] Ext: Pass mapping ID along to mappingsToCreate
1675730352 [sc-12593] Ext: Don't combine auto mappings and existing mappings and don't filter out placeholder mappings
1675730352 [sc-12593] Dedupe mappings by destination + source ids
1675730352 [sc-11828] Server: Handle an existing mapping when attempting to insert transfer mappings
1675727488 [sc-12706] ext. Styling for "Manage transfer"  panel peek & workspace modal
1675727488 [sc-12706] ext. Copy change: "edit transfer" > "manage transfer"
1675726389 [sc-12702] ext: Display page titles instead of URLs for default transfer label
1675726389 [sc-12702] Remove 60 character limit for custom transfer name
1675725502 [sc-12714] Server: Empty out name and description field when disabling transfer.
1675708933 [sc-12601] ext. (workspace) Call \`joinWorkspaceTeamAndUpdateData\` on join
1675708933 [sc-12601] ext. (workspace) Add user updates to \`joinWorkspaceTeamAndUpdateData\`
1675700823 [sc-12634] ext: 1-Click transfer help card styling fixes
1675654384 [sc-12512] Update MR template for user-facing features
1675654384 [sc-12512] Clarify that summary should include more context
1675652618 [sc-12345] ext: Collapse personal shortcuts by default in the panel for teams users
1675651808 [sc-12510] Upgrade node-postgres library to latest
1675650437 [sc-12669] Only select all teams by default in the share dialog and not in the edit transfer flows
1675650437 [sc-12669] Include forgotten avatar css file for edit transfer peek panel
1675475558 [sc-11828] Update transfer edit form to only use TransferViewData
1675475558 [sc-11828] Rename destUri to destUrl to sync up the UserTransferView with the RecommendedTransferView
1675475558 [sc-11828] Pull out submit button text into prop
1675475558 [sc-11828] Move transfer edit specific pieces from share transfer dialog into the common transfer edit form body component (refactoring and renaming will come later)
1675475558 [sc-11828] Implement post submit action for the transfer edit form
1675475558 [sc-11828] Implement a method for partially updating for a transfer so clients don't need to have the full transfer objects to make an update (can update name field only for example)
1675475558 [sc-11828] Hook in transfer edit component into the peek panel
1675475558 [sc-11828] Add in rest of the content for the edit transfer dialog
1675463626 [sc-12629] Don't filter user's own transfers from other teams in the panel
1675463626 [sc-12625] Include team transfers when they update
1675463626 [sc-12625] Include team transfers in updating bg-transfers observable
1675456718 [sc-10946] Add previous sibling heuristic to label finding
1675450242 [sc-12560] ext: Show smart suggestion opt-in dialog after shortcut fill and expansion - Add website event to close the smart suggestion dialog from webflow CTAs
1675450242 [sc-12560] ext: Add smartSuggestionOptInSeen to user onboarding and getUserOnboardingFromStore helper
1675450242 [sc-12560] ext: Add smart suggestion opt-in dialog to content-ui and the associated dialog props to tab state
1675450242 [sc-12560] Add smart suggestion opt-in dialog for painted door test - Add app config for the smart suggestion dialog frame url
1675450242 [sc-12560] Add feature flag for smart suggestion opt in dialog
1675448201 [sc-12462] ext: Show trasfers tab behind guided transfers dialog
1675448201 [sc-12462] ext: Navigate to personal shortcuts when user clicks create shortcut from checklist
1675445889 [sc-11647] ext: Get reference to magic compose text span to update text suggestion directly as user types
1675445889 [sc-11647] ext: Continue showing magic compose as user types letters matching the first name suggestion
1675445889 [sc-11647] ext: Cache settings for magic compose that don't change
1675445889 [sc-11647] ext: Add more info to 'magical-compose.fill' and 'magical-compose.dismiss' events
1675445889 [sc-11647] ext: Add ignore keys for magic compose
1675439032 [sc-12582] Launch transfers using destUrl instead of destUri
1675439032 [sc-12582] Add \`destUrl\` to  \`TransferViewUserEntityDetail\`
1675437935 [sc-12559] ext: Fixes share peek opening on snippet create
1675437935 [sc-12559] ext: Fixes checked collection state on newly created snippet
1675436672 [sc-12447] ext: Remove browser alarms to clear shareTransferModal local storage
1675436672 [sc-12447] ext: Change share transfer modal prompt requirements
1675436672 [sc-12447] Update unit tests for share transfer modal
1675436672 [sc-12447] Update ui test to invoke share transfer modal upon 2nd magic fill
1675412469 [sc-12526] Add mButtonDisplayRulesOverride feature flag
1675412197 [sc-12526] Make sure we show m-button as fallback if no autoDiplayDropdown
1675393244 [sc-12358] ext: Do not show suggestions on certain input elements or elements containing 'search' as an attribute  value
1675371138 [sc-12531] ext: Update panel and workspace transfer card names with modal change
1675369951 [sc-12531] ext: Change default source title to domain url
1675367350 [sc-12552] ext. Add teamTransfers update to background data sync
1675364978 [sc-12568] Do not share variables on some sites within workspaces
1675363955 [sc-12567] Reduce health tracking sampling rate from 1% to 0.01%
1675361987 [sc-12558] fix logout and initialize background cookies
1675361523 [sc-12564] server: disable 1-ct for users
1675355017 [sc-12477] common: Remove Google Drive autoDisplayDropdownMatchRules
1675355017 [sc-12477] common: Prophylactically remove potentially dirty Hubspot autoDisplayDropdownMatchRules
1675288012 [sc-1249] Add max items simplified dropdown property to app config
1675286426 [sc-11498] UI Test for creating shortcuts with placeholders in the panel
1675284599 [sc-12232] ext: Add test for new 'withTitle' property
1675284599 [sc-12232] ext: Add a prop to Text component to add a title attribute
1675281500 [sc-12536] Fix workspaceSharedLabelIds query
1675274372 [sc-8385] move browser notification listeners to their own file
1675274372 [sc-8385] move background server initializations to their own file
1675274372 [sc-8385] move alarm specific code into background-alarms.ts
1675274372 [sc-8385] migrate background lifecycle code from background.ts cookies and install/update specific files
1675274372 [sc-8385] add background startup diagnostics
1675274372 [sc-8385] Wrap omnibox listener initializations in a function call
1675274372 [sc-8385] Move startup listeners to their own file
1675272507 [sc-12529] Filter out disabled transfers from the workspace
1675267473 [sc-12507] Server: Remove mapping_id uniqueness constraint, so we can share mappings when we share transfers
1675267473 [sc-12507] Server: Avoid trying to insert mappings that already exist in the DB
1675267473 [sc-12507] Ext: Append originalUrl to destinations from an existing transfer when it's being cloned.
1675267473 [sc-12507] Ext: Add team transfer mappings to tab state so they destination matching works
1675267473 [sc-12507] Ext: Add case when there's a mapping to be saved that belongs to another user (aka it was shared)
1675267472 [sc-12507] Ext: Don't override destUri with destLaunchUrl
1675263838 [sc-12481] extension: remove drift live chat support
1675263837 [sc-12481] server: disable drift chat feature flag
1675210775 [sc-12216] server: Migration to add url sources to website section templates
1675210775 [sc-12216] ext: Allow url sources on website section templates to be reenabled
1675207098 [sc-12485] When making delete transfer API call, stringify request body
1675207098 [sc-12485] Use \`deleteTransfer\` RPC method instead of \`deleteMappings\`
1675207098 [sc-12485] Modify \`deleteTransfers\` to delete one transfer by id and rename
1675204206 [sc-12308] ext: Prompt share transfer modal upon MagicFill all in Google Sheets
1675204206 [sc-12308] Update background autofill unit test for share transfer modal
1675203081 [sc-12455] ext: Add views to the dropdown
1675203081 [sc-12455] Add feature flag for simplified dropdown, dropdownSimplifiedViewEnabled
1675200634 [sc-11743] ext: Validate transfer name input before sharing
1675198857 [sc-12453] break out logic from dropdown.tsx into dropdown.hooks.ts
1675197711 [sc-12483] ext. (panel) Transfers tab - exclude priv. transfers from teams list
1675193609 [sc-11836] ext. (wksp) Team transfers - show team transfers
1675193609 [sc-11836] ext. (wksp) Team transfers - show shortcuts/transfers tabs for teams
1675193609 [sc-11836] ext. (wksp) Team transfers - add \`workspaceTransfers\` to wksp state
1675193609 [sc-11836] ext. (wksp) Team transfers - add "no transfers yet" view
1675193609 [sc-11836] ext. (wksp) Team transfers - "Private" link preserves datatype - Now that the team pages will have tabs, we need to ensure that navigating back to the Private page preserves the currently selected tab
1675193609 [sc-11836] ext. (wksp) Refactor transfers page - make components more atomic - make components more atomic - naming adjustments
1675193609 [sc-11836] ext. (wksp) Refactor transfers page - data/tracking hooks
1675193609 [sc-11836] ext. (wksp) Refactor transfers page - break out \`AccessDenied\` view
1675193609 [sc-11836] ext. (wksp) Refactor transfers page - \`TransfersRecommended\` view
1675193609 [sc-11836] ext. (wksp) Refactor transfers page - \`TransfersPrivate\` view
1675193609 [sc-11836] ext. (wksp) Refactor transfers page - \`TransferCardList\` view
1675193609 [sc-11836] ext. (wksp) Bugfix - don't build team transfers URL w/out featureflag
1675193609 [sc-11836] ext. (shared) Refactor \`useDestURIToTabTitle\` - \`useDestURIToTabTitle\` wasn't cleaning up its localStorage subscriptions - new generic \`useLocalStorageState\` can later be exported elsewhere if it has wider utility
1675193609 [sc-11836] ext. (shared) Add \`creatorUserId\` prop to transfer view data objects
1675193609 [sc-11836] ext. (panel) Transfers tab - add team Transfers - \`useExtensionTransfersData\` is broken out to shared location so that it can be used in the workspace as well
1675193609 [sc-11836] ext. (panel) Transfer card list - disable edit/remove for shared transfers
1675193609 [sc-11836] ext. (panel) Tab content section should use div instead of li - the parent was previously changed from ol to div
1675193609 [sc-11836] ext. (panel) Refactor transfers tab - move types to separate file
1675193609 [sc-11836] ext. (panel) Refactor transfers tab - move to own folder & rename
1675193609 [sc-11836] ext. (panel) Refactor transfers tab - move hooks to separate file
1675193609 [sc-11836] ext. (panel) Refactor transfer card list - break out help cards
1675193609 [sc-11836] ext. (panel) Refactor transfer card list - avoid eslint disable
1675188763 [sc-11555] UI Test: filling a team shortcut via the dropdown
1675188181 [sc-12446] server: Increase autoDisplayDropdownForExistingMappings feature flag to 50%
1675182853 [sc-11746] ext: Allow checking and unchecking of modal
1675182853 [sc-11745] Share transfer upon "Apply" click
1675182853 [sc-11745] Add UI test for share transfer modal
1675182852 [sc-11746] ext: Add tracking on modal load and close
1675182852 [sc-11745] ext: Fix route for adding transfers
1675179360 [sc-12384] ext: Styling for 1-CT gems
1675179360 [sc-12384] ext: Make gsheets favicon available
1675179360 [sc-12384] ext: Change launch new 1-CT in panel open state
1675179360 [sc-12384] ext: 1-Ct prompt styling to account for new button
1675178825 [sc-12469] Reduce health event sample rate on staging
1675119555 [sc-11992] ext: remove 1-click transfers TabContentSection
1675107263 [sc-11992] Combine one-click and user transfers into my transfers section
1675105283 [sc-12313] server: Prefer .where() over .modify() in findByEmailDomainsKnexQueryBuilder to preserve correct parentheses
1675097711 [sc-11798] Server: Account for enabling/disabling existing mappings so it doesn't run into DB conflicts
1675097711 [sc-11798] Ext: When adding a mapping after launching a team transfer, create a private copy of the transfer with the mapping added
1675097711 [sc-11798] Ext: Save last used transfer ID in autofill-forms
1675097711 [sc-11798] Ext: Modify the POST body to transfer upsert to account for mappings moving from disabled to enabled.
1675097711 [sc-11798] Ext: Change getMappingsForDestUri to return enabled and disabled mappings as an object instead of just enabled mappings
1675097711 [sc-11798] Ext: Cache the disabled mappings from tab state in autofill-forms so we can also match selections with existing mappings (currently we only look at enabled mappings)
1675097711 [sc-11798] Ext: Add disabledMappings to standardSelect, so we can attempt to re-enable a matching mapping that already exists but is just disabled
1675097711 [sc-11798] Ext: Add disabledDestMappings to tab state
1675097711 [sc-11798] Ext: (in Google Sheets) When adding a mapping after launching a team transfer, create a private copy of the transfer with the mapping added
1675097711 [sc-11798] Copy team transfer to private if you unmap after launching the team transfer
1675094057 [sc-5826] Lazily create tabStates only when needed
1675090927 [sc-12411] server: Migration to disable transfers with no enabled mappings
1674859846 [sc-12402] server: Add version update email for 3.29
1674856685 [sc-12410] ext: Add numTransfers property to team-share-dialog tracking events
1674848605 [sc-12407] server: Don't use read-only knex for \`getByTransferId\`
1674845474 [sc-8386] Restrict mutationObserver to document body
1674842842 [sc-11827] ext. Transfer edit - peek panel state management
1674842842 [sc-11827] ext. Transfer edit - open transfer edit peek from card in panel - also add support to refocus the transfer card after the edit peek panel is closed
1674842842 [sc-11827] ext. Transfer edit - create stub for \`TransferEditFormBody\`
1674842842 [sc-11827] ext. Transfer edit - change menu label to "Manage"
1674842842 [sc-11827] ext. Transfer edit - add peek panel stub
1674842842 [sc-11827] ext. Transfer edit - add panel/context to right-rail root
1674842842 [sc-11827] ext. Transfer edit - add gear icon
1674842842 [sc-11827] ext. Transfer edit (workspace) - use Edit Transfer dialog for transfers
1674842842 [sc-11827] ext. Transfer edit (workspace) - add transfer edit dialog
1674842842 [sc-11827] ext. Refactor (transfers page) - use hooks for dispatch, callbacks
1674842842 [sc-11827] ext. Refactor (edit transfer dialog) - move to separate folder/file
1674842842 [sc-11827] ext. Refactor (edit transfer dialog) - move hooks to separate file
1674842842 [sc-11827] eslint: fix property name in custom rule message
1674842048 [sc-12348] server: exclude user uuids from tests
1674842048 [sc-12348] server: Add appropriate check to set feature flags
1674842010 [sc-12348] server: Add cohort of eligible 1-CT users
1674838021 [sc-11461] Ramp variable health tracking to 1% of users
1674833787 [sc-12119] ext. Transfer cards - use transfer ID as key in collections
1674833787 [sc-12119] ext. Transfer card list - remove unnecessary key - the key is assigned by the consumer of \`TransferCardListItem\` (\`TransferCardList\`)
1674833787 [sc-12119] ext. Refactor (transfer cards) - renames for clarity
1674799779 [sc-12326] ext: Filter out transfer from options page
1674781497 [sc-12354] server: Ramp showMButtonOnFocus to 50%
1674769398 [sc-12359] server: Remove offending Hubspot autoDisplayDropdown matcherRules
1674769398 [sc-12359] server: Add back some Salesforce autoDisplayDropdown rules for Airbnb's instance specifically
1674765816 [sc-12213] ext: Gates autodisplay dropdown on mappings behind feature flag
1674763266 [sc-12213] ext: Updates autodisplay tracking events based on type
1674763188 [sc-12213] ext: Shows autodisplay dropdown when mappings exist
1674759010 [sc-12336] server: Adds feature flag for auto display dropdowns based off mappings
1674757210 [sc-12328] Filter out disabled transfers by default
1674757210 [sc-12328] Factor in disabled transfers to re-enable a transfer instead of creating a new one.
1674684812 [sc-12287] ext: Checklist tour should only show for users who don't have a JTBD set or have it set to messaging
1674678098 [sc-11617] server: Turn on self-serve for all new users
1674678098 [sc-11617] server: Remove unused validated-companies.ts
1674678098 [sc-11617] server: Deprecate createOrAddNewUserToCompanyWorkspace
1674674346 [sc-12292] server: Delete \`transfers\` and \`transfer-mappings\` when deleting a snippet
1674670898 [sc-11738] Update tabState with the transferId from a magic fill
1674670898 [sc-11738] Update css file path from previous MR
1674670898 [sc-11738] Shorten repeat time to display share transfer dialog
1674670898 [sc-11738] Remove props that we do not need anymore
1674670898 [sc-11738] Make width for modal wider to match design spec
1674670898 [sc-11738] Ext: Pass in transferId when doing a form magic fill
1674670898 [sc-11738] Do not display share transfer modal with placeholder dialogs
1674669835 [sc-12068] ext. Transfer card - support \`isDecorativeOnly\` prop - \`isDecorativeOnly\` is used in cases where we only want to use the transfer card as a decorative element that can't be interacted with
1674669835 [sc-12068] ext. Transfer card - support 'transfer saved animation' arrow style
1674669835 [sc-12068] ext. Transfer card - remove unused ref
1674669835 [sc-12068] ext. Refactor - rename \`TransferCardData\` to \`TransferViewData\` - there's no reason to couple these data structures to \`TransferCard\`
1674669835 [sc-12068] ext. Refactor - clean up \`TransferCardData\` types
1674669117 [sc-12298] server: Add trymagical.com to list of magical employee email domains
1674668284 [sc-12241] server: Remove user from existing drip if they join or create a workspace
1674668284 [sc-12241] server: Add user to workspace creator or joiner email drips if they self-serve workspaces
1674663742 [sc-12229] Migration to backfill source_workspace_labels table
1674661767 [sc-12252] Server: Fix return model for transfer upsert route
1674661767 [sc-12252] Ext: Replace mappingsForDestUri for transfersForDestUri
1674661767 [sc-12252] Ext: Change Transfer ID type to officially be UUIDV4
1674661767 [sc-12252] Ext: Add transferId to dropdown payload for magic fills
1674661767 [sc-12252] Ext: Add private transfers to the dropdown state
1674661767 [sc-12252] Ext: Add private transfers to the dropdown component
1674661767 [sc-12252] Ext: Add background functions to retrieve guided transfers (both private + shared) for a given destUri
1674657343 [sc-11721] server: Simplify join workspace onboarding copy
1674603841 [sc-12154] server: Turn off canCreateTeams by default for Magical employees
1674603343 [sc-12270] server: Update company workspace backpopulation to use new customFields format
1674593063 [sc-12270] server: Add stricter types to send grid contact
1674591812 [sc-12270] server: addContactsToSendgridLists() should not send emails if in dev mode
1674591802 [sc-12270] server: Snake case contact variables before sending to sendgrid contacts API
1674585593 [sc-12240] tests: update unit tests with new Transfer type
1674583132 [sc-12240] ext: Add destUrl to extension transfer type
1674582728 [sc-12240] ext: Rename function: toGuidedTransferData
1674582728 [sc-12240] ext: Check if google sheetUri when populating tab state trasnfers
1674577141 [sc-12238] ext: nit styling changes for 1-CT prompt
1674577141 [sc-12238] ext: launch new 1-CT gem  hide tooltip when prompt is open
1674577141 [sc-12238] ext: configure transfer-remaining modal, launched from new 1-ct gem
1674577141 [sc-12238] ext: close prompt before saving mappings
1674577141 [sc-12238] ext: close notification prompt when transfering existing
1674577141 [sc-12238] ext: Add variables check to rendering one-ct prompt
1674574993 [sc-11723] trigger user api data update more frequently for teams users
1674574993 [sc-11723] move alarms to their own file
1674574993 [sc-11723] clean up alarms in background.ts
1674515753 [sc-12145] Rollout additional batch of workspaces (batch #8)
1674511057 [sc-9083] Don't allow new deploy pipelines to fail
1674505582 [sc-11700] Share variable labels within workspaces
1674498331 [sc-12233] common/server: Ramp autoDisplayDropdownOnWebsites to 100%
1674495272 [sc-12246] add caret to 1ct help card
1674261472 [sc-11987] Fix onboarding to show JTBD again if not completed before
1674253241 [sc-12187] server: Add competitor domains to deny list for self-serve
1674251616 [sc-12196] ext: Re-escape ampersands in SnippetBodyEditor to fix failing to render HTML
1674250228 [sc-12114] ext: (transfer card) Refactor - file structure for types, hooks, etc. For transfer card-related components: - move to separate folder - separate hooks and types into separate files
1674250228 [sc-12114] ext. (transfer card) Refactor - use default export for single-export files
1674250228 [sc-12114] ext. (transfer card) Refactor - use \`browser.runtime.getURL\` for css urls
1674250228 [sc-12114] ext. (transfer card) Refactor - destructure component params in signature vs body
1674248690 [sc-12222] server: Fix join condition to use \`collection-transfer-items\`
1674245169 [sc-11909] Server: Add source launch fields to transfer object with encryption + decryption logic
1674245169 [sc-11909] Server: Add dest launch url to transfer object
1674245169 [sc-11909] Server/DB: Add source launch fields to transfers table and backfill data from recent_website_sections
1674245169 [sc-11909] Server/DB: Add dest launch url to transfers table
1674245169 [sc-11909] Ext: Pass in source launch and dest launch information when creating a transfer
1674245169 [sc-11909] Ext: Hook source launch and dest launch fields into extension model
1674241644 [sc-12198] ext: Implements max-lines lint rule
1674237424 [sc-12197] ext: Implements react/no-multi-comp lint rule
1674223533 [sc-11813] Integrate shared transfers' mappings for the dropdown groups
1674223533 [sc-11813] Add guided teamTransfers in drpodown state
1674223533 [sc-11813] Add getGuidedTeamTransfers method in Transfer API
1674223533 [sc-11813] Add 'variableGroupCount' and 'sharedVariableGroupCount' for autofill invoke track event
1674223533 [sc-11813] Add 'fromSharedTransfer' in autofill selected track event
1674199747 [sc-11793] Server: Use enabled flag when deleting and adding mappings
1674199747 [sc-11793] Server: Do not return mappings that were unmapped to older clients by checking in transfer_mappings
1674199747 [sc-11793] Server/Common: Add disabledMappings to Transfer object
1674199747 [sc-11793] Ext: Remove unused flows that call the /mappings save endpoint
1674199747 [sc-11793] Ext: Fix bug in server-transfers POST call
1674199747 [sc-11793] Ext/Common: Update createMapping function to use transfer endpoint
1674192163 [sc-11793] Server/DB: Add enabled flag to transfers
1674192163 [sc-11793] Server/DB: Add enabled flag and last updated at time to transfer mappings
1674192163 [sc-11793] Server/Common: Use enabled flag when deleting and upserting transfers
1674180171 [sc-12036] server: Delete transfers from collections when user deletes transfers
1674180171 [sc-12036] ext: Update all teams transfers from server when updating team snippets
1674180171 [sc-12036] ext: Store team transfers in local storage and global state
1674180171 [sc-12036] ext: Server api for add/remove transfers from collection
1674180171 [sc-12036] ext: Reorder \`SnippetCollectionsServerApi\` keys alphabetically
1674180171 [sc-12036] ext: Rename tag and collection utils to specify for shortcuts
1674180171 [sc-12036] ext: Remove deleted transfers from \`snippetCollections\` local storage
1674180171 [sc-12036] ext: Mock linkedom in more tests
1674180171 [sc-12036] ext: Background manager for add/remove transfers from collections
1674180171 [sc-12036] ext: Add util functions for adding/removing transfers from collections
1674180171 [sc-12036] ext: Add \`transferIds\` to \`SnippetCollectionMetadata\`
1674180170 [sc-12306] common: Add \`teamTransfers\` to global state
1674180170 [sc-12036] ext: Add \`teamTransfers\` local storage key
1674168604 [sc-12087] server: Set flags if user skips self-serve pages
1674168604 [sc-12087] Fix urgent bug for skipping writing company name on personal company creation
1674168604 [sc-12087] Add onboarding flags for skipping join and create self-serve pages
1674165684 [sc-11344] ext: refactors dialog and panel component names and locations to support new panel
1674165684 [sc-11344] ext: implements panel toggle for snippet accordion
1674165684 [sc-11344] ext: Supports panel in snippet edit mode
1674165684 [sc-11344] ext: Renames share-teams to share-snippets-teams
1674165684 [sc-11344] ext: Move share panel hooks to hooks file
1674165684 [sc-11344] ext: Implements panel animation
1674165684 [sc-11344] ext: Implements basic panel
1674164558 [sc-12130] only pass new information for /default-source-labels route
1674164558 [sc-12130] add optional query parameter to default-source-labels route to limit results to records updated after a certain timestamp
1674164558 [sc-12130] add index for "updated_at" column for both source and source_default_labels
1674161915 [sc-12033] Launch new 1-CT prompt styling
1674161409 [sc-12033] ext: add one-click transfer prompt to notification storage
1674161409 [sc-12033] ext: Thread in try 1-CT prompt
1674161409 [sc-12033] ext: Show launch new transfer button from panel when open
1674161409 [sc-12033] ext: Control display logic of one-click transfer prompt
1674161409 [sc-12033] ext: Add 1-CT prompt help card
1674156476 [sc-11991] ext: Use new Sendgrid template for auto adding invited team members
1674156476 [sc-11991] ext: Rename joinWorkspaceTeam method to joinWorkspaceTeams to better reflect what the function does
1674156476 [sc-11991] ext: Rename joinTeamAndUpdateData and add early return if user already in team
1674156476 [sc-11991] ext: Refactor background-omnibox unit tests to avoid unnecessary mocking
1674156476 [sc-11991] ext: Read teamIdToJoin cookie on install and add user to team
1674156476 [sc-11991] ext: Move snippet-collection-utils that shouldn't be in shared/ into content-scripts/
1674156476 [sc-11991] ext: Make workspaceId optional on workspace.team.join tracking event
1674156476 [sc-11991] ext: Add hasUserJoinedWorkspaceTeam to UserApi
1674154783 [sc-12144] Use extenral runner for migrations
1674153830 [sc-10384] ext: Update teams backpopulation to use a teams sendgrid drip instead of single send template - Use the new custom field to set the company name for the users being backpopulated. This custom field will get pulled into the drip email
1674153830 [sc-10384] ext: Add support for custom sendgrid fields in addContactsToSendgridLists
1674150763 [sc-11989] ext: add ability to transfer all tabs in 1-CT to google sheets
1674150763 [sc-11989] ext: Add handlers for different transfer remaining cases
1674150763 [sc-11989] Styling for transfer remaining help card
1674150763 [sc-11989] Conditionally launch transfer remaining card from gems
1674150763 [sc-11989] Add conditional rendering for 1-CT help card if launchedFromNew transfer gem
1674148774 [sc-11695] server: Include private variables created by other workspace users in website section responses
1674129216 [sc-12144] Move migration into earlier stage in pipeline
1674092004 [sc-11959] Use constant variable for one day in minutes
1674092004 [sc-11959] Update share transfer team dialog to style properly on content UI
1674092004 [sc-11959] Prompt share transfer dialog on unique domains 1 sec after MagicFill
1674092004 [sc-11959] Fix alphabetical order of defaultTabState()
1674092004 [sc-11959] Create local storage to track team sharing modal unique opens per day
1674092004 [sc-11959] Clear share transfer modal local storage every 24 hours
1674092004 [sc-11959] Allow modal to close via x button click
1674092004 [sc-11959] Add unit tests for share transfer to teams dialog
1674092004 [sc-11959] Add send mock RPC function that can pass in URL
1674079580 [sc-12144] Add npm build to new migration pipeline
1674076663 [sc-11236] server: export PROVISIONED_PRO_BETA_USERS_LIST_ID const from sendgrid
1674076663 [sc-11236] server: addContactsToSendgridLists() should return void instead of Response
1674076663 [sc-11236] server: addContactsToSendgridLists() should return early if empty list of  contacts are passed in
1674076663 [sc-11236] server: Migrations to add more variable enabled domains
1674075911 [sc-12144] Update CI pipeline to add an option to run migrations before deployment
1674068568 [sc-12009] ext: Transfer card - move overlay outside of button - this allows the overlay to properly intercept pointer events that would otherwise get picked up by the button
1674068568 [sc-12009] ext: Transfer card - allow consumers to provide overlay component
1674068568 [sc-12009] ext: Transfer card - add delete confirmation overlay
1674068568 [sc-12009] ext: Refactor \`TransferCardSuccess\` for better composability - \`TransferCardOverlay\` is a generic overlay that can be used for a wider variety of message types - \`TransferCardOverlaySuccess\` uses \`TransferCardOverlay\` to show the (unchanged) success overlay
1674052616 [sc-11979] ext: Update 1-CT help card to prompt google access grant
1674052616 [sc-11979] ext: Check if user has previously authenticated before launching new 1-CT
1674022412 [sc-11834] server: Move /share/install Webflow code to share-install.js
1674022412 [sc-11834] server: Add user to team or set teamIdToJoin cookie on team share link
1674022412 [sc-11834] ext: Add website event for joining team
1674021321 [sc-12069] ext: Rename shortcutBodyFocused and shortcutTriggerFocused to better reflect what they do
1674021321 [sc-12069] ext: Rename saved and unsaved to better reflect what they are
1674021321 [sc-12069] ext: Remove setTimeout from startCreateSnippetTour and instead allow tour to resize appropriately
1674021321 [sc-12069] ext: Prevent checklist tour from starting if options page has search params
1674020270 [sc-11332] common: Make FILL_STRATEGIES_V2 urlRegexes more specific
1674020270 [sc-11332] common: Fix style-matching issues on Outlook
1673984487 [sc-11818] server: Add new Sendgrid templateId for auto adding invited team members
1673984487 [sc-11818] ext: Use teamId instead of boolean in team sharing URL logic
1673984487 [sc-11818] ext: Refactor ShareAppDialog to avoid conditional isTeamsSidebar logic
1673984487 [sc-11818] ext: Move join team logic into helper function
1673984486 [sc-11818] ext: Fix array index issue in TeamSidebar
1673977630 [sc-12058] server: explicitly invoke bump/tag script with \`sh\` on deploy
1673969366 [sc-11830] Fix placeholder focus race condition
1673943688 [sc-11303] Migrate getMappingsForDestUri from MappingManager to TransferManager and deprecate the MappingsManager flow
1673943688 [sc-11303] Deprecate mappingsv2 from ui tests
1673943688 [sc-11303] Deprecate mappingsV2
1673943687 [sc-11303] Pull transfers from server to store into local storage
1673943687 [sc-11303] Add \`TransferServerAPI\`.
1673943687 [sc-11303] Add \`TransferManager\` local storage provider.
1673943687 [sc-11303] Add \`TransferAPI\` for local storage.
1673894101 [sc-12089] Show banner to have users vote for us on product hunt kitty awards
1673717375 [sc-12062] ext: Don't call maybeStartCreateSnippetTour() for guest users
1673717304 [sc-12062] ext: Create snippet tour should not show for users who have completed the checklist
1673651594 [sc-12065] ext: Prevent checklist tour from opening on incorrect pages
1673651594 [sc-12065] ext: Extract isOpen.valueOf() from maybeStartCreateSnippetTour to avoid unnecessary function updates
1673650131 [sc-11736] ext: Use \`OverflowDropdown\` in \`TransferCard\` - use the new \`OverflowDropdown\` instead of \`SelectDropdown\`   - \`SelectDropdown\` is currently only used by \`TransferCard\`, has many customizations, and diverges from the dropdown used by the variables overflow. This will allow us to remove \`SelectDropdown\` and streamline. - add a new SVG icon \`LightningBoltIcon\` for use in the transfer card overflow menu - add transfer card overflow options \`Edit\`, \`Launch\` - Rename \`Delete\` -> \`Remove\` menu item
1673650131 [sc-11736] ext: Transfer card - hide source logo for 1CT
1673650131 [sc-11736] ext: Transfer card - add placeholder "Edit" overflow option - this forces display of the "Edit" option for testing purposes. Followup tickets will implement edit behavior.
1673650131 [sc-11736] ext: Refactor - break out \`TransferCardListItem\` and hooks - move the internal \`Card\` component into a separate file \`transfer-card-list-item\` - from \`transfer-card-list-item\`, break out \`transfer-card-list-item.hooks.ts\` to separate state logic - clearly label deprecated code for the old transfer card. This will remain in use as long as the transfer team sharing feature flag exists and is off.
1673650131 [sc-11736] ext: Refactor - \`TransferSuccessComponent\` -> \`TransferCardSuccess\` - reorganizing code to better indicate the transfer success component's coupling with the card
1673650131 [sc-11736] ext: Refactor - \`TransferCardsComponent\` -> \`TransferCardList - reorganizing code to more accurately present the transfer cards component as a collection of \`transfer-card\`
1673650131 [sc-11736] ext: Fix transfer card label overflow for long words
1673650131 [sc-11736] ext: Ensure transfer/shortcut dropdowns don't overlap sticky panel header
1673650131 [sc-11736] ext: Always set \`title\` attr for transfer card - reqs are evolving here, but we decided to rely more heavily on browser tooltips to explain the card's activation behavior for lack of a better quick solution - todo: replace \`title\` attr usage with a tooltip component when we have one - remove shared hook \`useHasOverflow\`, as it no longer has any usages
1673650131 [sc-11736] ext: Adjust \`TransferCard\` styling in list - minor style adjustments to bring the transfer card more in line with the latest mockups, which are more condensed and introduce the possibility of the source logo being hidden - reorganization of CSS custom properties with clearer defaults and Magical-specific prefixing for outer scope variables
1673650131 [sc-11736] ext: Adapt \`VariableDropdown\` into generic \`OverflowDropdown\` - \`VariableDropdown\` has the exact styling we need for the transfer cards and is nearly already generic, so we'll adapt it into a generic dropdown for overflow menus - replace existing usages of \`VariableDropdown\` with the new generic \`OverflowDropdown\` - in the future, we might want to make \`OverflowDropdown\` into an even more generic component for use cases beyond just overflow menus
1673647297 [sc-11814] server: Use \`/collections\` for collections routes
1673643204 [sc-11814] server: Getting collections should also return transfer ids
1673643204 [sc-11814] server: Get all transfers for a workspace id
1673643204 [sc-11814] server: Create a collection with initial transfer ids
1673643204 [sc-11814] server: Add/remove transfers from a collection
1673643203 [sc-11814] server: Use exported \`SNIPPET_COLLECTION_ITEMS_TABLE_NAME\` from snippet collection model
1673643203 [sc-11814] server: Rename \`snippet_collections\` table to \`collections\`
1673643203 [sc-11814] server: Rename \`SnippetCollections\` models to \`Collections\`
1673643203 [sc-11814] server: Rename \`SnippetCollection\` type to \`Collection\`
1673643203 [sc-11814] server: Create collection transfer items table
1673630856 [sc-12010] server: Ramp autoDisplayDropdownOnWebsites from 10% to 50%
1673629065 [sc-11584] ext: Prevent maybeStartCreateSnippetTour from being called multiple times
1673627434 [sc-11978] Add ability to search all variable when a mapping exists
1673626384 [sc-11973] common: Change chrome rateAppURL back to CWS
1673624656 [sc-11737] Move checkbox component into its own folder
1673624656 [sc-11737] Create boilerplate modal for Share Transfer to Teams
1673560984 [sc-12002] server: Use navToUrl for onboarding redirects
1673553962 [sc-11980] ext: Set max number of transfer gems to 5
1673552383 [sc-11955] server: Add missing updateUserData query params for onboarding routes
1673546254 [sc-11788] ext: Snippet body width should be accurate in panel when there are no variables
1673546254 [sc-11788] ext: Remove 'Already Shared' text beside teams in share team dialog
1673546254 [sc-11788] ext: Only show snippet preview if one snippet selected in share team dialog
1673539277 [sc-11885] common: Remove extraneous backslashes from autoDisplayDropdownMatchrulesV2
1673539277 [sc-11885] common: Fix Salesforce Lightning autoDisplayDropdownMatchRulesV2
1673535334 [sc-11833] server: Remove unused POST
1673535334 [sc-11833] server: Have onboarding pages call windowRedirect in head.js
1673535334 [sc-11833] server: Edit tests for self-serve pages in onboarding flow
1673535334 [sc-11833] server: Add conditions for turning on self-serve for staging build testing
1673492147 Revert "[sc-11236] server: Migrations to add more variable enabled domains"
1673476998 [sc-11236] server: Migrations to add more variable enabled domains
1673467835 [sc-11866] server: Bumping up the version gate to account for extension changes to change from using mappings to transfers
1673455243 [sc-11325] panel: Transfers tab display for empty 1-CT section
1673455243 [sc-11325] ext: cursor styling for one-click gems and tooltips
1673455243 [sc-11325] ext: Hide tooltips for 1-CT if help cards are open
1673455243 [sc-11325] ext: Add sectionType TransfersCardsComponent in panel for conditional rendering
1673455243 [sc-11325] ext: Add image for empty transfers section state for 1-CT
1673453322 [sc-9146] Use chrome-webstore-upload to upload to chrome web store
1673447330 [sc-11607] Move 'magicComposeEnabled' FF to BETA_USER_FEATURE_FLAGS
1673394313 [sc-9083] Dockerize server, added CI pipelines to build docker image + deploy to EB, and added terraform config
1673388733 [sc-10774] Add completion callback for shortcut rows to exit editor mode
1673383590 [sc-11611] Call self-serve routes from head.js
1673382147 [sc-11352] ext: Update workspace tour step styles
1673382147 [sc-11352] ext: Stop showing workspace photo in tour
1673382147 [sc-11352] ext: Rename /walkthrough files
1673382147 [sc-11352] ext: Remove shortcut-autoselect and remove navigation buttons where unnecessary in tour
1673382147 [sc-11352] ext: Remove negative margins from options sidebar buttons
1673382147 [sc-11352] ext: Prevent checklist tour from starting if workspace tour already open
1673382147 [sc-11352] ext: Move checklist tour functions into tour folder
1673382147 [sc-11352] ext: Handle mask clicks in workspace tour
1673382147 [sc-11352] ext: Fix workspace tour padding and mask border
1673382147 [sc-11352] ext: Auto-advance tour on shortcut select
1673382147 [sc-11352] ext: Auto-advance tour on share click and after share dialog closes
1673382147 [sc-11352] ext: Animate checkboxes during 'select shortcut' step of workspace tour using CheckboxIsAnimatedContext
1673382147 [sc-11352] ext: A11y review for options-shortcut-row.tsx
1673381042 [sc-11322] ext: shows share icon for all snippets in right rail
1673381042 [sc-11322] ext: Rename and restructure share-team-dialog into dedicated directory with hooks, types and utils
1673381042 [sc-11322] ext: Moves remaining hooks to hooks file
1673381042 [sc-11322] ext: Creates ShareTeamCheckbox component
1673376037 [sc-10681] Remove source map references from js files before packaging prod release
1673362117 [sc-11416] Migration to fix placeholder destinations used in multiple shortcuts
1673314634 [sc-11383] server: Save a transfer when an older client posts a mapping
1673314634 [sc-11383] server: Posting an existing transfer with more mappings should add the mapping to the transfer
1673314634 [sc-11383] server: Don't allow newer clients to fetch and post mappings
1673314634 [sc-11383] server: Deleting a mapping should delete its transfer mapping
1673314449 [sc-11383] server: Use \`uniqBy\` instead of \`uniq\` to get unique base urls
1673314449 [sc-11383] server: Migration to add unique index on mapping id in transfer mappings
1673312642 [sc-11777] server: Populate creatorUserId when upserting records into the db
1673312642 [sc-11777] server: Add creatorUserId to snippet collection items table
1673305333 [sc-11495] Use react best practices for keys in 1-CT gems
1673305333 [sc-11495] Add testing storage helper: setRecentWebsiteSections
1673305333 [sc-11495] Add 1-CT to google sheets ui test
1673303537 [sc-11732] ext: Use \`TransferCard\` in workspace transfers page.
1673303537 [sc-11732] ext: Use \`TransferCard\` in panel \`TransferCardsComponent\`.
1673303537 [sc-11732] ext: Remove \`TransfersPageCard\`. - replaced by \`TransferCard\`
1673303537 [sc-11732] ext: Fix lint warnings in \`transfers-page\`.
1673303537 [sc-11732] ext: Export \`TransferCardType\` for use in transfer card shared component.
1673303537 [sc-11732] ext: Add shared transfer card component \`TransferCard\`.
1673303537 [sc-11732] ext: Add \`shouldFadeIn\` prop to \`TransferSuccessComponent\`.
1673288447 [sc-11807] ext: Remove redundant calls to UserManager.hasTeams() before calling updateAllTeamSnippetsFromServer()
1673288447 [sc-11807] ext: Remove event listener for button which no longer exists
1673288447 [sc-11807] ext: Fetch teams data after user signs in
1673288447 [sc-11807] Remove unused env var OAUTH_SUCCESS_NEW_REDIRECT_URL
1673288447 [sc-11807] Remove unused 'use-cases' queryParam
1673286899 [sc-11424] ext: Show server error message on signup only if server is unreachable
1673286899 [sc-11424] ext: Fix 'Go back' button functionality on signup server error message page
1673286899 [sc-11424] ext: Change styling on 'Go back' button on signup server error message page
1673285634 [sc-11302] server: Migration to infer transfer data from mappings
1673284042 [sc-10738] Trim notification counts from page titles in dropdown
1673281372 [sc-11726] server: Enable \`transferTeamSharing\` for Magical employees.
1673281372 [sc-11726] common: Add \`transferTeamSharing\` feature flag to \`FeatureFlags\`.
1673279901 [sc-11787] ext: Reduce importer textarea width
1673039115 [sc-11050] Only remove source maps from prod release
1673029308 [sc-11752] Revert test logging changes that affect performance tests
1673029308 [sc-11752] Reduce timeout for options page performance test from 5 minutes to 45 seconds
1673029308 [sc-11752] Add ALLOW_NETWORK check for ui tests
1673027870 [sc-11685] Ext: Clean up how we send events via the amplitude client in batch.
1673027870 [sc-11685] Ext: Batch variable health json-rpc calls from content scripts
1673027870 [sc-11685] Common: Pull 1000 ms in a second into a named constant for common app config
1673027870 [sc-11685] Common: Add new amplitude browser configs for variable health client
1673023146 [sc-11749] ext: Reset Amplitude userId from '00000000-0000-0000-0000-000000000000'
1673021011 [sc-11077] server: Wrap getNextUserDetailPageURL for future routing changes
1673021011 [sc-11077] server: Tracking on create and join workspace
1673021011 [sc-11077] server: Remove outdated check for 'validated companies' on teammembers route
1673021011 [sc-11077] server: Prevent user from creating multiple workspaces
1673021011 [sc-11077] server: Ensure user is seeing teammates for a workspace they can be added to
1673021011 [sc-11077] server: Create and join workspace webflow code
1672960697 [sc-11104] Change optimal select exception from error to warn
1672953214 [sc-11197] Disable the sites that can not apply the new trigger insertion strategy
1672953214 [sc-11197] Apply fill strategy to insert the trigger for m-button with clear after filling
1672953214 [sc-11197] Add ui test for m button dropdown trigger insertion
1672938962 [sc-11500] Ext: Only broadcast global state updates to every tab if the key being updated is on the allowlist
1672938962 [sc-11500] Ext: Notify tab with global state when it becomes active
1672938962 [sc-11500] Ext: Extract notify tab logic to background-notify-tab
1672938962 [sc-11500] Ext: Add predicate parameter for custom skipping logic when broadcasting to all tabs
1672938962 [sc-11500] Common: Add app config for GlobalState keys that should always be broadcasted with notifyAll - now certain keys will be excluded from always broadcasting
1672926554 [sc-11722] Apply snippet without date variable in the gdoc test
1672864878 [sc-9427] ext: Skip more gdocs.ui.test.ts tests that rely on state from the 2022 tests
1672862672 [sc-11647] ext: Allow magic compose span to be inserted into HTMLElements and Text elements
1672862584 [sc-11036] add hot reload for MV3
1672862514 [sc-9427] ext: Skip gdocs.ui.test.ts tests that rely on the year being 2022
1672443536 [sc-11462] server: Upserting conflicting transfer with different id should update the original transfer
1672443536 [sc-11462] server: Update mappings when there's a conflict on inserting
1672443536 [sc-11462] server: Models for creator user id, website section id, dest uri unique constraint
1672443536 [sc-11462] common: Add website section id and dest uri to transfers interface
1672438604 [sc-11462] server: Migration to add website section id and dest uri to transfers table
1672433420 [sc-10471] Update mappings-used statistics after successful 1-CT to googleSheet
1672421440 [sc-10471] options page: unsubscribe localStorage subscribers
1672421440 [sc-10471] Use entity statistics when inferring transfers from mappings
1672421440 [sc-10471] Pass transfers to panel from tabState, same as gem column
1672414764 [sc-11478] ext: The mapped scenario should return show all option even the mapped source is missing
1672409522 [sc-11295] Fix tests with unmatched cases by returning missing result
1672335421 [sc-11295] server: Insert new source/label/match/website section for WebPT
1672335421 [sc-11295] Add a regexp-replace src. modifier for WebPT's Full Name
1672023317 [sc-11497] Add test for variabled shortcut in options page
1672023164 [sc-11497] Add class to variable picker as selector for UI tests
1671835930 [sc-10289] Pass logging prefs to driver when getting a new web driver
1671835930 [sc-10289] Change \`console.log\` to \`console.info\` for perf tests
1671835670 [sc-9840] Remove \`idleOnPage\` calls to wait for content scripts loading and use helper instead
1671835670 [sc-9840] Add helpers for waiting for content scripts to load in a new tab
1671835670 [sc-10289] Use  a \`PerformanceObserver\` rather than \`driver.wait\` to find performance markers
1671835279 [sc-11634] Write E2E test that loads signup page
1671835279 [sc-11634] Create end-to-end extension test job
1671824239 [sc-11622] Add UI test to fill placeholder dialog with variables
1671820551 [sc-11554] ext: UI test - Expanding a shortcut with placeholders via dropdown
1671820551 [sc-11554] ext: Add form field test util \`getFieldContentWhenItMatches\`
1671820551 [sc-11554] ext: Add dropdown test util \`getDropdownItemElementFor\`
1671819525 [sc-11632] Implements react/no-unstable-nested-components
1671818435 [sc-11631] Implements react/no-array-index-key
1671818435 [sc-11631] Adds eslint-interactive helper script
1671815980 [sc-11259] Query tabs without url hash params in \`openOrFocusTab\`
1671815980 [sc-11259] Add UI test for opening the workspace from the panel
1671814248 [sc-11628] Implements eslint-plugin-jsx-a11y
1671805013 [sc-11558] display m button in target element frame
1671753777 [sc-11501] ext: Fix overflow on ShareView in the panel
1671740192 [sc-11313] Update variable-pick UI test to repro the panel disappearing bug
1671740192 [sc-11313] Modify SrcElement interface to handle missing labels
1671731923 [sc-11502] ext: Make selected panel tab styling stay consistent on hover
1671657780 [sc-10286] Use the Typescript version of the space-before-function-paren rule
1671657780 [sc-10286] Update docs for running UI tests in Docker
1671657780 [sc-10286] Auto-fix space-before-function-paren eslint violations
1671657760 [sc-10286] Teach executeAsyncScript how to map between WebElement <=> Element
1671649978 [sc-11514] server: Update and add tests for setSessionVersion to handle null session version values
1671638703 [sc-11320] Updates js styles to css stylesheet, fixes key prop
1671638703 [sc-11320] Renames folders to kebab case
1671638703 [sc-11320] Renames CannedShortcuts to StaticShortcuts to reflect its lack of variables
1671638703 [sc-11320] Refactors the TeamShortcutsDropdown
1671638703 [sc-11320] Refactors the TabContentSection
1671638703 [sc-11320] Refactors the SnippetRow
1671638703 [sc-11320] Refactors the CannedShortcutsDropdown
1671638703 [sc-11320] Refactors hooks to use default exports
1671638703 [sc-11320] Moves hooks, styles, utils to new naming format
1671633875 [sc-11467] server: Add version update email for 3.26
1671608722 [sc-11295] ext: Return early in \`getElementsForSelectors\` for \`url\` sources
1671608722 [sc-11295] ext: Preserve legacy behaviour that modified SrcMatch don't get rich text
1671608722 [sc-11295] ext: Modified variables dialog only support first and last name splits
1671608722 [sc-11295] ext: Don't allow splitting variables modified via metadata.modifiers
1671607414 [sc-11295] Support regexp-match and existing modifiers in VariableMetadata
1671599040 [sc-11295] ext: Move variable modifier application to its function
1671599040 [sc-11295] ext: Create SrcModifierWithNoArgs interface
1671595168 [sc-11295] Make VariableMetadata.parentSourceId optional
1671594798 [sc-11295] Rename SrcModifier to SrcModifierType
1671573896 [sc-11195] ext: Store srcId on maybeStoreLastCopiedCandidateVariable
1671573896 [sc-11195] ext: Add source label tracking to placeholder.dialog.paste
1671572507 [sc-10720] Ext: Remove srcSelectors from Snippet object
1671572507 [sc-10720] Ext: Remove srcBaseUrls from Snippet object
1671572507 [sc-10720] Ext: Remove sources from Snippet object
1671572507 [sc-10720] Ext: Remove sourceIds from extension Snippet object
1671572371 [sc-10720] Server: Update outdated documentation about clone-private-labels
1671572371 [sc-10720] Ext: Remove deprecated call to clone-private-labels and add documentation
1671572058 [sc-11473] Add feature flags for move and delete columns in Google sheets
1671572000 [sc-11480] Fix m-button promotion banner copy
1671569859 [sc-11318] Updates Share icon to user arrow
1671567713 [sc-11466] Extract fill related tracking events to background-autofill to clean up import cycles
1671566629 [sc-11496] mock background-global-state in background-omnibox test
1671564283 [sc-11408] server: Change autoDisplayDropdownOnWebsites feature flag to 10%
1671559298 [sc-10879] server: Tests for createorjoinworkspace
1671559298 [sc-10879] server: POST for createorjoinworkspace for new onboarding pages
1671559298 [sc-10879] server: Helper handler func for create & join workspace
1671559298 [sc-10879] server: Check if user is in workspace before redirect
1671550517 [sc-10783] preserve and store tab state in session storage
1671481056 [sc-11467] server: Generate new local dev SSL cert
1671248965 [sc-10722] Ext: Make sure to pass along label information from the labeledPlaceholders field.
1671248965 [sc-10722] Ext: Add unit tests that would have caught labelId issue
1671247086 [sc-11457] ext: Set height for readonly shortcut body editor in panel to be a set height to avoid extra panel scrolling
1671246173 [sc-11457] ext: Remove margin from the tag button in panel shortcut edit view to provide more space for shortcut editor content
1671246118 [sc-11457] ext: Revert max-height setting on shortcut body field to allow for more content to be visible in panel - This does mean the entire shortcut edit view will scroll as it did before with the tags being out of view unless scrolled
1671246041 [sc-11457] ext: Reduce max-height for variable picker so it takes up less space in the editor
1671236181 [sc-11454] ext: Clear \`mostRecentCharCode\` buffer when opening the dropdown from keyup
1671233796 [sc-11427] server: Delete unused \`sourcesHandler.getForUser\` \`featureFlags\` arg
1671233796 [sc-11427] server: Delete unused \`findPrivateCreatedByDifferentUserWithMatchers\` and \`findPlaceholdersForUser\` Source model methods
1671233796 [sc-11427] ext: Delete legacy *sourceV1 storage cleanup code from release M
1671228277 [sc-11453] ext: showMenuForConfig: check if the dropdown should be modal
1671224015 [sc-11381] Generate new placeholder destinations for new shortcuts if already used by another shortcut
1671214460 [sc-11432] ext: Fix width and height of body-field div and iframe in disabled SnippetEdit state
1671214460 [sc-11432] ext: Fix CannedShortcutsAccordionItem section title
1671214460 [sc-11432] ext: Change copy in TeamsShortcutAccordionItem empty state
1671212930 [sc-11311] ext: Move share team dialog styling into dedicated css file
1671212353 [sc-11311] ext: Add a select all teams toggle to ShareTeamDialog
1671208531 [sc-11430] Opens share modal for all teams users # Please enter the commit message for your changes. # Please enter the commit message for your changes. Lines starting # with '#' will be ignored, and an empty message aborts the commit. # # Date: Fri Dec 16 07:42:59 2022 -0800 # # On branch sc-11430 # Changes to be committed: # modified: extension/src/content-scripts/right-rail/snippets/shortcuts-common.tsx #
1671172562 [sc-11275] ext: Change <ul> to <div> for tab-list to fix padding issues
1671172274 [sc-11275] ext: Change title of private shortcuts in panel to 'Private' if user has teams
1671172224 [sc-11275] ext: Rename 'dropdown-component' to 'accordion-item'
1671172224 [sc-11275] ext: Redesign SnippetEdit view only banner
1671172224 [sc-11275] ext: Change creatorUser on SharedDecryptedSnippet to be WorkspaceUser to allow imageUrl access
1671139451 [sc-11227] ext: Add tracking for null state of Teams shortcut dropdown
1671139451 [sc-11227] ext: Add snippet.edit tracking for Teams panel snippets
1671139451 [sc-11227] ext: Add section expansion tracking for Teams shortcut dropdown in panel
1671139451 [sc-11227] ext: Add impression tracking for Teams shortcut dropdown in panel
1671139451 [sc-11227] Add feature flag teamsAccordionItemPanelTrackingEnabled to gate panel tracking
1671136025 [sc-11404] Use tsc for type checking tests to reduce memory
1671126266 [sc-11312] ext: Show snippet preview in ShareTeamDialog from workspace team sharing flows
1671125534 [sc-11312] ext: Show snippet preview in ShareTeamDialog from panel team sharing flows
1671125534 [sc-11312] ext: ShareTeamDialog should render a snippet preview when snippetPreview prop is provided
1671123534 [sc-11312] ext: Remove custom text in ShareTeamDialog when snippet is newly created
1671123345 [sc-11312] ext: Team share dialog should not preserve previous props upon opening
1671068741 [sc-11398] modify \`isBackgroundPage()\` to work in an MV3 context
1671065381 [sc-11398] use new action button api in MV3
1671065381 [sc-11398] move \`isSelectorValid\` to content scripts
1671065381 [sc-11398] disable simpleReloader in rollup for MV3
1671063326 [sc-11382] ext: Remove step counter in CreateOrEditTeamDialog
1671063326 [sc-11382] ext: Fix styling on 'Create team' button in options sidebar
1671063326 [sc-11382] ext: Fix margins on CreateOrEditTeamDialog CTAs
1671063326 [sc-11382] ext: Change create team CTA text to 'Create team'
1671058364 [sc-11389] Add root-level npm script: \`ci:all\`
1671057150 [sc-11390] Add rateAppURLs to AppConfig, change rateAppURL to G2 if user is not on Edge
1671054951 [sc-11374] Create models for lookup of GSheet metadata
1671054951 [sc-11374] Create models for creation of GSheet metadata
1671054951 [sc-11374] Add models for deletion of GSheet metadata
1671053795 [sc-11393] server: POST sessions/guest should use unshortenUuid defined in utils
1671052422 [sc-11278] ext: Rename body-field-wrapper class to editor-wrapper
1671052422 [sc-11278] ext: Remove panel header bottom padding
1671052422 [sc-11278] ext: Convert SnippetBodyEditor wrapper divs into flex elements to fix spacing issues
1671050710 [sc-10758] server: Turn on autoDisplayDropdown for 20% of users
1671050710 [sc-10758] Manually update autoDisplayDropdownMatchRulesV2 to remove dirty matcherRules
1671045693 [sc-11387] Change filter to use isMappingForSpreadsheetCellDestination
1671041632 [sc-11376] ext: Pass the URL argument to \`getFrameBoundingClientRect\` instead of using .replace on its body
1671041632 [sc-10757] ext: Request \`scripting\` permission for MV3
1671041632 [sc-10757] ext: Add \`getFrameData\` comment indicating it's broken with MV3
1671038663 [sc-11120] server: Transfers routes
1671038663 [sc-11120] server: Transfers handler
1671038663 [sc-11120] server: Add transfer model for getting transfers with unaggregated mappings from DB
1671038662 [sc-11120] common: \`Transfer\` interface and create helper function
1671038615 [sc-11120] server: Use \`Date\` instead of \`string\` for \`TransferMapping.createdAt\`
1671038615 [sc-11120] server: Add mapping model and handler to get mappings with destinations (and matchers) by mapping id
1671038615 [sc-11120] server: Add a helper function to generate sql that builds jsonb object from destination row
1671038615 [sc-11120] server: Add a helper function for normalizing mappings when getting from DB
1671038615 [sc-11120] common: Rename \`Transfer\` to \`DBTransfer\` and move it to common
1671035998 [sc-11375] server: Ramp magicCompose to 100% of users
1671026024 Revert "[sc-11236] server: Migrations to add more variable enabled domains"
1671011974 [sc-11083] Remove the unnecessary divider at the end of shortcut group
1671011974 [sc-11083] Adjust the last li's margin bottom in the dropdown
1670983030 [sc-11236] server: Migrations to add more variable enabled domains
1670983029 [sc-11236] server: setProBetaCohortByEmailDomains should return users data for updated users
1670976312 [sc-10747] Bump extension/src/ui-tests/variables/linkedin.perf.test.ts fcp to 18 due to intermittent failures
1670974264 [sc-10747] use content scripts to generate innerText contents
1670973961 [sc-10747] remove references to "document" in background-snippets
1670972921 [sc-10747] fix typos in background-snippets.*
1670970992 [sc-10662] Reduce flaky-ness of UI test by waiting for panel content to load and disabling non-working retries for variable-pick.ui.test
1670954010 [sc-10319] server: Update tests for new redirects
1670954010 [sc-10319] server: Flag create & join user flows for magical employees only
1670954010 [sc-10319] server: Create isMagicalEmail helper function
1670954010 [sc-10319] server: Add redirects for create and join workspace during onboarding
1670954010 [sc-10319] server: Add new redirect urls for join and create workspace
1670940403 [sc-10932] ext: Use window selection to determine where to append magic compose suggestion
1670916887 [sc-11321] ext: Wrap "No Content" in brackets to differentiate from regular values
1670916887 [sc-11321] ext: Change SrcMatch.missing to \`false\` in last case of getElementsForSelectors
1670916734 [sc-10662] Disable variable-pick.ui.test.ts due to a high failure rate.
1670916173 [sc-11073] Deployment to Production server should happen automatically proceeding promotion
1670897526 [sc-11307] Workaround: Add br.linkedin.com to BASE_URLS_PRIVATE_BY_DEFAULT
1670867809 [sc-10805] Use rollup plugin to set MV3 manifest  host permissions
1670867809 [sc-10805] Add custom rollup plugin to modify manifest.json after bundling
1670864983 [sc-11271] remove \`window\` references from \`cannotUseStorage()\` calls
1670651785 [sc-10969] server: Disable M Button for < v3.27.0
1670618144 [sc-10969] Start m-button with 10% in phase 1
1670618144 [sc-10969] Reorganize M button to specific folder and add onboarding panel
1670618144 [sc-10969] Dropdown m-button promotion banner
1670618144 [sc-10969] Create m-button utils with shared functions
1670618144 [sc-10969] Clear the trigger while using m-button for dropdown
1670618144 [sc-10969] Add more m-button match rules
1670618144 [sc-10969] Add m-button onboarding ui test
1670616519 [sc-11232] Feature flag panel UI - TabComponents
1670616519 [sc-11232] Feature flag 1-click transfers tabState logic
1670615652 [sc-11155] ext: Test and fix that the dropdown modal filter is focused on display
1670602960 [sc-11246] Move excelAlphaColumnToIndex to google-sheets.ts
1670599593 [sc-10954] server: showVariablesOnboarding feature flag should be based on proBetaCohort
1670599593 [sc-10954] server: Make a user model function to set proBetaCohort
1670599593 [sc-10954] server: Make a helper for findByEmailDomainsKnexQueryBuilder()
1670599593 [sc-10954] server: Add migration to set proBetaCohort for users within VARIABLE_ENABLED_DOMAINS
1670599593 [sc-10954] common: Add new PRO_BETA_COHORT to identify users being added manually by email domain
1670572650 [sc-11194] ext: Rename param in maybeShowTryVariabledShortcutsView to be more reflective of what it is
1670572650 [sc-11194] Prefer .some() to .find() when a boolean return type is sufficient
1670572650 [sc-11194] Add lint rule to prefer .some() over .find() in specific cases
1670570478 [sc-7602] server: Disable \`--verbose\` for jest to avoid OOM
1670565566 [sc-7602] ext: Change saveSourceWithLabel to only take a \`LabeledSrcSelector\`
1670565566 [sc-7602] Rename 'saveNewSourceWithLabel' method to 'saveSourceWithLabel'
1670565566 [sc-7602] Narrow SourceVariableHighlightProps.srcElement to only include \`ElementSrc\`
1670565566 [sc-7602] Move \`SiteSrcSelector\`, \`SrcSelector\`, \`isElementSrc\` and \`isUrlSrc\` to common/
1670565566 [sc-7602] Move \`SiteSrcSelectorForUpdate\` to common/
1670565566 [sc-7602] Move BaseSource/ElementSrc/UrlSrc models to common/
1670565566 [sc-7602] Make all BaseSource members required
1670565566 [sc-7602] Log an error if a label doesn't save in \`saveSourceWithLabel\` to replace TODO
1670565566 [sc-7602] Delete moved \`saveNewPlaceholder\` RPC method
1670565566 [sc-7602] Add interfaces for unsaved variables
1670560162 [sc-11128] Select relevant website section to pass into variable component
1670560162 [sc-11128] Make localStorage json-rpc call once in dropdown and pass it down to variable groups.
1670560162 [sc-11128] Fix tab state performance regression
1670560162 [sc-11128] Add inputs argument for guided-transfers-dialog when fetching website sections
1670540338 [sc-11102] change UUID shortening strategy to be more browser friendly
1670539636 [sc-10848] Implements no-unsantized eslint plugin
1670536279 [sc-11108] ext: Use random fun emoji on team creation instead of fallback emoji
1670536279 [sc-11108] ext: Add a null no snippets state for CreateOrEditTeamDialog's ShareSnippet step
1670535196 [sc-10315] server: Replace personal email domains with npm package, add deny list conditions
1670535196 [sc-10315] server: Add tests for personal email and deny list helper functions
1670535196 [sc-10315] server: Add free-email-domains package
1670534463 [sc-11154] server: Ramp magic compose from 10% to 50% of variablesEnabled users
1670533207 [sc-10813] Use local storage instead of cookie for Amplitude - use Cookie Store API to link up with any "legacy" cookies still in the browser - continue linking with "guest" cookies when no extension cookie is found - remove "legacy" cookies after migration
1670533207 [sc-10813] Check for \`document\` before removing legacy Amplitude cookie
1670533207 [sc-10813] Add barebones typing for Cookie Store API.
1670533207 [sc-10813] Add Amplitude session storage provider
1670531522 [sc-10991] ext: Do not show TagDropdown and only show Teams tags in SnippetEdit disabled state
1670531522 [sc-10186] ext: Update shortcut trigger styling in panel
1670531522 [sc-10186] ext: Update help-card design
1670531522 [sc-10186] ext: Show team snippets in panel
1670531522 [sc-10186] ext: Fix return type of getJoinedCollections and add early return for undefined teams argument
1670531522 [sc-10186] ext: Define TEAMS_FALLBACK_EMOJI as ❓
1670531522 [sc-10186] ext: Add TeamShortcutsDropdownComponent
1670530329 [sc-10807] Implement queueToNewGSheet in gem buttons
1670522566 [sc-11094] Handle this.current becoming null while waiting on getFrameData()
1670519247 [sc-10807] Trigger transfer remaining from panel cards
1670519247 [sc-10807] Styling commit for gem buttons
1670519247 [sc-10807] Launch transfer remaining from gems
1670519247 [sc-10807] Add transfer remaining help card
1670519239 [sc-10807] Add transfer remaining to fab props
1670515804 [sc-11153] server: Add migration to create and back populate next batch of company workspaces - Note this batch was large and is split into two migrations due to OOM errors during test execution
1670481226 [sc-11125] ext: Fix 'undefined' next to team name if no emoji
1670478737 [sc-10621] Delete stitches table
1670478245 [sc-10878] server: Use helper with /GET onboard
1670478245 [sc-10878] server: Add new redirect urls for onboarding route
1670478245 [sc-10878] server: Add helper to redirect user onboarding, add unit tests
1670478245 [sc-10878] server: Add POST for onboarding, which updates user info and calls redirect helper
1670469806 [sc-10793] Modify createGSheetsMagicFillRequestBody to autofill label names
1670469806 [sc-10793] Implement 1CT to new Google sheet
1670469806 [sc-10793] Create method to update Google sheet title
1670469806 [sc-10793] Create method to make mappings for 1CT to new sheet
1670469806 [sc-10793] Add unit tests
1670469773 [sc-10793] Create method to create new Google sheet
1670468564 [sc-11045] Revert standardSelected param changes
1670468564 [sc-11045] Create email to a tag helper function
1670468564 [sc-11045] Create column index to alpha column helper function
1670447838 [sc-11010] Unit tests for transfers models
1670447838 [sc-11010] Models layer for transfers
1670447838 [sc-11010] Models layer for transfer mappings
1670447838 [sc-11010] Create \`transfers\` table
1670447838 [sc-11010] Create \`transfer_mappings\` table
1670445018 [sc-10991] ext: Rename ShortcutDropdownComponent and refactor arguments
1670445018 [sc-10991] ext: Open ShareTeamDialog from SnippetRow share button if teams enabled
1670445018 [sc-10991] ext: Fix tag alignment in snippet edit view in panel
1670445018 [sc-10991] ext: Do not show TagDropdown and only show Teams tags in SnippetEdit disabled state
1670445018 [sc-10991] ext: Create a disabled edit state in SnippetEdit
1670445018 [sc-10991] ext: Allow the body field in the panel SnippetEdit view to expand to fill the panel
1670445018 [sc-10991] ext: Add view only banner to SnippetEdit disabled state
1670367657 [sc-10785] Restore padding to "Rate the app" modal
1670361348 [sc-11090] Change clientHeight check to querySelector instead of lastElementChild
1670349975 [sc-10939] Tests for find-labels.ts file
1670349975 [sc-10939] Lay the groundwork for label finding with first heuristic
1670342251 [sc-10752] ext: Use scripting namespace in register-content-script with MV3
1670342251 [sc-10752] ext: Correctly await all injections before resolving returned promise
1670341630 [sc-11034] ext: change margin on tag dropdown to only show on options page
1670330923 [sc-10990] ext: Support opening \`CreateOrEditTeamDialog\` via options deeplink
1670330923 [sc-10990] ext: Move CreateOrEditTeamDialog Step enum to dialog-utils
1670330923 [sc-10990] ext: Enforce string return type on getRandomFunEmoji
1670330923 [sc-10990] ext: Change fallback emoji in CreateOrEditTeamDialog to ❓
1670330923 [sc-10990] ext: Allow \`CreateOrEditTeamDialog\` to be opened directly to snippet sharing
1670313765 [sc-11080] Make sure the closeDropdown API will be called with given or default options
1670297422 [sc-9427] ext: Use more consistent naming for event handlers
1670297422 [sc-9427] ext: Show filter input at top of modal dropdown
1670297422 [sc-9427] ext: Show dropdown on Google Docs
1670297422 [sc-9427] ext: Rename test to keep alongside of other gdocs test
1670297422 [sc-9427] ext: Remove mention text upon replacement in gdocs
1670297422 [sc-9427] ext: Reduce duplication within gdocs.dropdown test
1670297422 [sc-9427] ext: Move gdoc keycode handling into getKeyCode
1670297422 [sc-9427] ext: Limit some Dropdown messages to specific source frame
1670297422 [sc-9427] ext: Fixup replaceText to deal with modified triggerInfo
1670297422 [sc-9427] ext: Dropdown should only be modal on gdocs for triggers in the document
1670297422 [sc-9427] ext: Display dropdown as a modal on Google Docs
1670297422 [sc-9427] ext: Combine gdocs test files and reduce duplication
1670297422 [sc-9427] ext: Close the dropdown if the backdrop is clicked
1670297422 [sc-9427] ext: Cache and forward the search string in Google Docs
1670297422 [sc-9427] ext: Adjust positions of popup
1670297422 [sc-9427] ext: Add some docs for commandEvent
1670297422 [sc-9427] ext: Add automated test for dropdown in gdocs
1670297422 [sc-9427] ext: Add a return type to getKeyCode
1670271746 [sc-10323] server: Add test for route to return matching workspaces for user domain
1670271746 [sc-10323] server: Add route to return matching workspaces for user domain
1670267948 [sc-10612] Launch 1CT from panel buttons
1670267948 [sc-10612] Feature flag 1-CT
1670267948 [sc-10612] Conditional rendering for 1CTs under fab
1670267948 [sc-10612] Add one-click panel components
1670267623 [sc-10612] Add transfers to TabState
1670243739 [sc-11081] ext: Add recommended-transfers-view.css to manifest
1670124980 [sc-11002] ext: Manually call \`TributeEvents.input\` after a delay from \`keydown\`
1670124980 [sc-11002] ext: Clear the dropdown trigger (in addition to the shortcut trigger) when the placeholder dialog opens
1670124980 [sc-11002] ext: Add logging to \`Tribute.showMenuFor\`
1670124980 [sc-11002] ext: Add a UI test for the dropdown in CKEditor v5 35.3.2
1670124980 [sc-11002] Skip wysiwyg/lib from eslint
1670124934 [sc-11002] ext: Use \`TributeEventHTMLElement\` type for \`this\` of TributeEvents event listeners
1670124934 [sc-11002] ext: Remove unused triggerChar args
1670124934 [sc-11002] ext: Make event optional for \`keyupAndInputHelper\` and \`input\` in TributeEvents
1670110947 [sc-11076] server: Set one month as default referral cookie max age
1669998049 [sc-11058] ext: Change 'Team Sharing' button string to 'Share to team' in panel
1669995074 [sc-10523] Update health batch size to 100
1669995074 [sc-10523] Enable variable health sampling in production from server config
1669995074 [sc-10523] Disable variable health tracking for tests
1669955403 [sc-11028] server: Ramp magic compose to 10% of variablesEnabled users
1669924686 [sc-10971] ext: Set a custom onClickNext prop for multi level checklist content to allow expanding of the next checklist item
1669924686 [sc-10971] ext: Rename openComponent to openMultiLevelComponent - Since this function is primarily used when multi level checklist is enabled this function name was more clear as there are other functions called openComponent
1669924686 [sc-10971] ext: Add an optional prop to Checklist Content that is a custom function for the Next button
1669921300 [sc-11020] make json rpc clients resiliant to background process restarts
1669917081 [sc-10792] Add unit tests for one click transfer to remaining source pages
1669917063 [sc-10792] 1CT remaining srcMatches logic
1669915969 [sc-11008] ext: Remove console spam from ui test
1669913174 [sc-10759] convert background-variable-health.ts to use @amplitude/analytics-browser
1669913174 [sc-10759] add unit test for backround-tracking asserting device retrieved from cookie validity
1669913174 [sc-10759] add support for 'z' parameter in /sessions/uninstall
1669913174 [sc-10759] Replace amplitude-js with @amplitude/analytics-browser
1669913174 [sc-10759] Change uninstall URL formatting to stay under 255 characters
1669912238 [sc-10992] Set m-button to invisible when hiding the dropdown
1669912238 [sc-10992] Reset the m-button state when navigation is committed
1669912238 [sc-10992] Fix m-button showing logic
1669912238 [sc-10992] Add m-button UI test
1669911360 [sc-11032] Change saveMapping parameter from single mapping to array of mappings
1669909190 [sc-10757] ext: Replace tabs.executeScript with scripting.executeScript
1669900162 [sc-11028] server: Apply variablesEnabled featureFlag more explicitly
1669898722 [sc-11028] server: Ramp createVariablesFromPasteInPlaceholderDialogEnabled to 25% of users
1669862421 [sc-11002] common: Add a config to control calling dropdown key event listeners manually after \`keydown\`
1669848764 [sc-10851] ext: Improve edit profile styling and make company editable
1669837657 [sc-10673] Prevents textarea from resizing horizontally
1669826463 [sc-11004] Update checklist demo url
1669747231 [sc-10463] Use websiteSectionId to distinguish one-click transfers
1669747231 [sc-10463] Show success overlay on card after successful 1CT
1669747231 [sc-10463] Launch 1CT from panel
1669747231 [sc-10463] Display logic for recommended, user, and one-click transfers
1669747231 [sc-10463] Add srcPage to panel component props for use in 1CT
1669747231 [sc-10463] Add one-click to TransferCardType
1669747231 [sc-10463] Add 1-CT help card
1669739283 [sc-10995] Disable autodisplay dropdown for now
1669674972 [sc-10983] Update destination title when destinationTabId is undefined
1669668420 [sc-10515] ext: Fix spacing of time saved element
1669668420 [sc-10515] ext: Fix spacing of recommended transfers view
1669668420 [sc-10515] Change settings.json to make 2 space indentation default for css files
1669659705 [sc-10688] web: Fix Amplitude dev. API key
1669659705 [sc-10688] web: Fallback to POSTing the magic link DID token via a <form> if \`fetch\` fails with a 401
1669659705 [sc-10688] server: Track magic link success and errors when using a <form>
1669659705 [sc-10688] ext: 'Extension - Promote to Prod' should default to a patch version bump
1669659705 [sc-10688] Support POSTing the DID token in the request body to /sessions/magic-link/callback
1669645337 [sc-10950] server: Add migration to create and back populate batch 5 of company workspaces
1669529487 [sc-10964] ext: Use a separate API key for the health Amplitude client
1669413950 [sc-10963] ext: Use response.body instead of response.json() when checking isServerReachable()
1669412678 [sc-10953] server: Return json for all server responses returning status 20x
1669397177 [sc-10953] server: Edit test to throw when autoDisplayDropdownMatchRulesV2 matcherRules are empty
1669397177 [sc-10953] ext: maybeMatchElementAndGetLabelsFromAutoDisplayDropdownMatchRules() should support empty matcherRules
1669397177 [sc-10953] common: Comment out autoDisplayDropdownMatchRules where we have no valid matchRules
1669396331 [sc-10707] server: Return json for all server responses returning status 20x
1669396331 [sc-10707] ext: Ensure that OK responses are of content-type JSON when using fetchJSONWithCredentials()
1669396331 [sc-10707] ext: Convert connection-check to a JSON response
1669387891 [sc-10356] Tests for not deleting transfer source website section data
1669386123 [sc-10489] Add userinput in closedropdown notification for hiding dropdown with more context
1669385130 [sc-10952] server: Ramp createVariablesFromPasteInPlaceholderDialogEnabled to 25% and to those with variables enabled
1669343618 [sc-9500] ext: polish various UI/UX bugs [sc-9500] ext: add dynamic border to the fab support button
1669309311 [sc-10882] ext: Fetch team snippets from server when joining a new team
1669302786 [sc-10083] server: Use helper to find first created team for a workspace within addUserToCompanyWorkspaceAndCollection()
1669302786 [sc-10083] server: Remove sort when finding snippet collections for a workspace
1669302786 [sc-10083] server: Helper to find the first created team for a workspace
1669243258 [sc-10474] Update unit tests
1669243258 [sc-10474] Update gsheet URI check
1669243258 [sc-10474] Remove duplicate Sentry error logging
1669243258 [sc-10474] Modify standardSelected to pass in optional destinationTabId
1669243258 [sc-10474] Format email values into mailto link
1669243258 [sc-10474] Create 1 click transfer to existing sheet
1669243258 [sc-10474] Clean up unused queue files and functions
1669242200 [sc-10915] Update tests to use non-Magical domains
1669241895 [sc-10915] Separate canPromote feature flags from employee ones
1669241020 [sc-10609] ext: Fix \`variableHealthEndpoint\` to be a domain, not an origin
1669241020 [sc-10609] Enable variable health tracking for can promote users
1669241020 [sc-10609] Add dev + staging configs for sample rate + health endpoint
1669228411 [sc-10898] ext: Remove ext code for user action email thresholds as this was already disabled
1669228411 [sc-10898] ext: Add lint rule to avoid import of appConfig in the extension/src directory
1669228410 [sc-10898] ext: Pull from appConfig for checklist utils
1669228410 [sc-10898] ext: Honor feature flag and pull from appConfig for auto-display dropdown logic
1669225430 [sc-10900] Rename common/models/UUID.ts to UUIDv4.ts to not confuse (ts-)jest with the 'uuid' package
1669205734 [sc-10609] Store variable health tracking events when evaluating variables on webpage
1669205734 [sc-10609] Put variable health tracking around a feature flag
1669205734 [sc-10609] Deprecate LegacySrcVariableMatcher from ElementSrc.paths
1669205734 [sc-10609] Add variable health event schema for batching in localStorage + adding to TrackingEvent
1669205734 [sc-10609] Add util functions to evaluate the variable content
1669205734 [sc-10609] Add configurations for amplitude client for health event
1669191086 [sc-10895] server: Fix or comment out \`autoDisplayDropdownMatchRulesV2\` \`matcherRules\` which aren't valid selectors
1669185023 [sc-5695] ext: Postpone Chrome re-focus hack to invalidate @autocomplete until after the key events are processed
1669182495 [sc-9631] Set tribute current to null while hiding the dropdown
1669177180 [sc-10894] Unify whether new sources are public between ATE and Magical
1669177180 [sc-10894] Stop supporting posting single sources
1669162743 [sc-9992] Adjust TBT perf. test bounds to reduce intermittent failures
1669155917 [sc-10853] Change googleRequest to return GoogleApiResponse
1669147295 [sc-10304] Use \`TransfersPageCard\` component on transfers page.
1669147295 [sc-10304] Refactor \`SelectDropdown\` for styling, a11y, flexibility.
1669147295 [sc-10304] Add generic support to \`TransferCardData\` type.
1669147295 [sc-10304] Add \`useHasOverflow\` hook for tracking content overflow.
1669147295 [sc-10304] Add \`TransfersPageCard\` component. - scope UX changes to transfers page for now
1669147295 [sc-10304] Add \`DotsHorizontalIcon\`.
1669137092 [sc-10655] ext: Maybe display magic compose suggestion on configured websites
1669137092 [sc-10655] ext: Add tracking for magic compose
1669137092 [sc-10655] Add feature flag for magic compose
1669137092 [sc-10655] Add config for magic compose
1669134500 [sc-10857] server: Disable checklistMultiLevelEnabled for teams users
1669132456 [sc-10857] server: Return teams in userInfo only when there are teams for the user
1669132456 [sc-10857] ext: Check for undefined and empty length to determine that user has no teams
1669091370 [sc-10801] ext: Wait for shortcuts to appear before continuing test
1669085006 [sc-10850] Change localStorageGet and localStorageSet into localStorageModify
1669078419 [sc-10834] server: Use stricter UUIDv4 type for source IDs
1669078419 [sc-10834] server: Simplify \`richTextEditorEnabled\` feature flag to go to all >= 3.3.0
1669078419 [sc-10834] ext: Use stricter UUIDv4 type for source IDs
1669078419 [sc-10834] common: Use stricter UUIDv4 type for source IDs
1669078419 [sc-10834] Delete snippet migration routes
1669078419 [sc-10834] Add a \`uuidV4\` helper which uses a type stricter than \`string\`
1669044291 [sc-10829] Uninterruptible: Use an alpine docker image to save ~30s and ~300MB
1669044291 [sc-10829] Uninterruptible: Don't fetch the git repo (to save ~4s)
1668837654 [sc-10829] Uninterruptible: Fix output when run on a protected tag or MR
1668837645 [sc-10829] Exclude 'Uninterruptible' job on tag pipelines
1668832798 [sc-10799] common: Replace broken checklist YouTube videos with new ones
1668831906 [sc-10799] server: Flip on multi-level checklist for all users
1668822212 [sc-10824] Add srcUrl back for magic fill all dropdown suggestions
1668820846 [sc-10820] Revert "[sc-10713] Sort the order of tabs by decreasing tabID number"
1668812164 [sc-10817] Revert "[sc-10647] ext: Use extension APIs for working with local Amplitude cookies"
1668810809 [sc-10811] ext: Add variables onboarding dialog impression tracking
1668808834 [sc-10713] Sort the order of tabs by decreasing tabID number
1668808834 [sc-10713] Dropdown layout polishing
1668807397 [sc-10658] ext: Default tab state should not include function definitions
1668802731 [sc-10741] Skip the magic fill in the group if there is no other value for filling
1668796703 [sc-10665] ext: Attach copy listener for candidate variable tracking based on feature flag
1668790625 [sc-10769] Ensure left/right workspace grid cols are same width
1668790547 [sc-10802] ext: Remove simpletexting.com from AD_TRACKING_URL_MATCH_PATTERNS
1668790493 [sc-10374] Disable extension/src/ui-tests/panel/shortcut-save-panel.ui.test.ts due to high failure rate
1668785680 [sc-10682] Add mv3 build target, update manifest extender to accomodate mv3
1668759809 [sc-10374] ext: Retry all failed UI/Perf tests 2 times.
1668755247 [sc-10374] ext: Add a test for saving a shortcut in the panel
1668752058 [sc-10217] ext: Change default invalid input popup to red text underneath
1668736208 [sc-10665] ext: getEditableElementFromEvent() should accept ClipboardEvent
1668736208 [sc-10665] ext: Track if a variable will be created when user pastes text into a placeholder
1668736208 [sc-10665] ext: Maybe store a variable candidate when the user copies text
1668736208 [sc-10665] Add feature flag to create variables from paste in placeholder dialog
1668731560 [sc-10680] ext: autofill-common: Change \`alreadyMapped\` to a \`Set\`
1668731560 [sc-10680] ext: Add some more explicit types to autofill-common where they're lost frpm spreading and object
1668731560 [sc-10680] ext: Add a comment about SrcSelector.missing being potentially incorrect
1668731560 [sc-10680] Make AutofillSuggestionGroup.isFocusedAutoMapping required
1668731560 [sc-10680] Don't create auto suggestions for blank variables
1668719024 [sc-10146] Only show team share dialog if user has created 5 shortcuts
1668716796 [sc-10360] ext: Update dropdown UI tests to not rely on autoDisplayDropdown config
1668716796 [sc-10360] ext: Update background to use new autoDisplayDropdownMatchRulesByHostname
1668716796 [sc-10360] ext: Prevent auto displaying dropdown or M button if the input type is not suitable
1668716796 [sc-10360] Deprecate autoDisplayDropdownMatchRules and introduce autoDisplayDropdownMatchRuleV2 in config
1668716796 [sc-10360] Add match rules to autoDisplayDropdownMatchRulesV2
1668714749 [sc-10691] Add referral code onto share shortcuts
1668704074 [sc-10778] Update testing helper functions
1668703173 [sc-10736] server: Add migration to create and back populate batch 4 of company workspaces
1668701611 [sc-10619] To support dropdown, allow overflow in workspace sidebar
1668697011 [sc-10748] Update all mappings' entity stats involved in a magic fill
1668697011 [sc-10748] Modify ValueToAutofill to contain entire mapping instead of dest
1668643342 [sc-10214] Rollback DB in \`posttest\` to ensure tests are re-runable
1668643030 [sc-10214] Don't make sources columns non-nullable in down migration
1668642991 [sc-10214] Don't add back null constraint to placeholder down migration
1668642975 [sc-10214] Drop Website sections index in down migration if it exists
1668642917 [sc-10214] Don't add unique constraint for team collection down migration
1668641505 [sc-10715] server: INSERT SourceWithoutPaths instead of Source in tests
1668641505 [sc-10715] server: Drop sources.paths columns
1668641505 [sc-10715] server: Delete unused \`combinePathsAndMetadata\` method
1668626610 [sc-10697] ext: Disable arrow navigation for newWorkspaceUser experience
1668626610 [sc-10697] ext: Deselect all shortcuts later in tour
1668614387 [sc-10745] ext: Replace window with globalThis to be environment agnostic
1668612394 [sc-10746] ext: Use globalThis instead of window to be environment agnostic
1668574120 [sc-10009] Use labels on existing destinations when saving shortcuts
1668574120 [sc-10009] Return a non-empty sourceIds to support shortcuts in the panel
1668574120 [sc-10009] Remove sources logic from snippet delete
1668574120 [sc-10009] Remove sources from snippet upsert
1668574120 [sc-10009] Remove sources from snippet get
1668574120 [sc-10009] Remove source clone logic for sharing scenarios
1668574120 [sc-10009] Remove legacy snippet save test and update remaining tests
1668574120 [sc-10009] Remove \`FF_SOURCES_INCLUDE_PRIVATE_FROM_SNIPPETS\` special case
1668574120 [sc-10009] Remove 'BLOCK_ALL_SOURCES_TTL_SECONDS' special case
1668574120 [sc-10009] Remove "clonePrivateLabels" logic
1668574120 [sc-10009] Delete snippet_sources table
1668572973 [sc-10647] ext: Use extension APIs for working with local Amplitude cookies
1668572706 [sc-9992] Adjust perf. test bounds again (2022-11-15)
1668538254 [sc-10500] server: Rename sendVersionUpdateEmail to maybeSendVersionUpdateEmail
1668538254 [sc-10500] server: Refactor emails.ts to call addContactsToSendgridLists to avoid extra calls
1668538254 [sc-10500] server: Before sending email update, ensure user is on a different version than before
1668529894 [sc-10633] 3 column workspace layout followup
1668451384 [sc-10659] Set referral code globally on website
1668449922 [sc-10683] Turn on multi level checklist
1667742911 [sc-4162] server: Enforce explicit definitions of API bodies and parameters
1667742870 [sc-4162] server: Infer Response type from \`RequestWithCookieAuth\`
1667623462 [sc-10642] Enable @typescript-eslint/naming-convention eslint rule
1667576913 [sc-10603] ext: Add create team dialog close tracking
1667576875 [sc-10603] ext: Rename create team dialog next step event
1667576817 [sc-10603] ext: Rename create team dialog impression event
1667575198 [sc-10603] ext: Rename create-team-dialog tracking events
1667575198 [sc-10603] ext: Add tracking to create team dialog for shortcut add step
1667575198 [sc-10603] ext: Add tracking to create team dialog for invite step
1667575198 [sc-10603] ext: Add tracking to create team dialog for final step
1667574126 [sc-10600] ext: Update shortcut preview in create team flow to use plain text body
1667573923 [sc-10513] server: Add first batch of variable onboarding rollout domains
1667572703 [sc-10604] ext: Delete leftover queue.css file.
1667572703 [sc-10604] Simplify usage of Sources.findPublicAndPrivateWithMatchers
1667572703 [sc-10604] Remove userSourcesDisabledHandler.create legacy v3.18.2 logic
1667572703 [sc-10604] Remove \`srcVariableMatcherArrayToLegacySrcVariableMatcherArray\` function needed for < v3.16.0
1667572703 [sc-10604] Delete stitches routes/handlers/models. Replace with /mappings
1667572703 [sc-10604] Delete \`Sources.pathsToLegacyPaths\` from < v3.3.26
1667572703 [sc-10604] Delete GET /sources route needed for < v3.22.x
1667571836 [sc-10599] ext: Update team sidebar Invite button to tertiary instead of tertiary muted
1667569892 [sc-10193] Specify new entity statistic creation functions
1667569892 [sc-10193] Modify entity stats local storage upon snippet and mapping use
1667569892 [sc-10193] Change order of primary keys in entity statistics table
1667569892 [sc-10193] Batch-update entity stats server upon browser alarm
1667569892 [sc-10193] Add new local storage for entity statistics
1667569892 [sc-10193] Add GET route for entity statistics
1667545572 [sc-10347] Merge the unfilled snippet suggestion into general snippet suggestion
1667541959 [sc-10289] Retry variable-pick.ui.test.ts on failure
1667541916 [sc-10289] Retry placeholder-dialog.perf.test.ts on failure
1667536660 [sc-10493] Fix the flaky snippet-collections server test
1667531078 [sc-10590] server: disable tryVariabledShortcuts feature flag
1667522155 [sc-10554] ext: Change setUserChecklist name to maybeSetUserChecklist
1667522155 [sc-10554] Update Checklist interface values from type boolean to true
1667522149 [sc-10554] ext: Set checklist complete date if checklist complete
1667500491 [sc-10574] ext: Update checklist platform logo sizing
1667496403 [sc-10303] Update styles for right column in workspace
1667496174 [sc-10303] Update styles of left column in workspace
1667495711 [sc-10303] add multiple sub-tabs in workspace
1667495711 [sc-10303] Move create button in workspace from sidebar to main content
1667495711 [sc-10303] Convert options app to a true 3 column layout
1667491965 [sc-10554] Fix intercom url to be an actual URL
1667486903 [sc-10189] make <ShareComponent> flexible enough to use without a right bar spruce up style for <SharComponent>
1667486903 [sc-10189] add share button to team sidebar
1667486903 [sc-10189] Add ability to use a different template in the share component
1667486903 [sc-10189] Add UI for third step in create team dialog
1667485435 [sc-10573] ext: Add zendesk.png to manifest
1667484367 [sc-10297] ext: Remove unused ProBetaUpgradeUpdateView
1667484367 [sc-10297] ext: Remove unused ProBetaUpgradeDialog
1667484367 [sc-10297] Disable proBetaUpgradeExperienceEnabled feature flag
1667484367 [sc-10297] Deprecate unused proBetaUpgradeFrameUrl appConfig
1667483304 [sc-10570] ext: Update team creation flow to use modifySnippetCollections helper function to ensure teams data is refetched correctly
1667446254 [sc-5524] Don't shadow \`before_script\` of \`.git_write_setup\` in \`.upload\`
1667419808 [sc-10263] ext: Move autosuggest processing to background
1667419808 [sc-10263] ext: Add daysSinceFirstPaste to snippet.autosuggest-creation.show tracking event
1667419793 [sc-10263] ext: Replace lastUpdated with createdAt in PasteCounts
1667419793 [sc-10263] ext: Remove unused copiedMatchersByUrl
1667419793 [sc-10263] ext: Remove unused autosuggestVariableThreshold and autosuggestShortcutThreshold from UserSettings
1667419793 [sc-10263] ext: Remove references to featureFlags which now always return true
1667419793 [sc-10263] ext: Allow time limit of paste counts pruning to be configurable
1667414643 [sc-10559] Reduce variable refetch expiration time from 5 weeks to 1
1667407465 [sc-10517] "fix" dropdown in placeholder bug by wrapping the event function
1667404122 [sc-10283] Deprecate  variable picker help card
1667359029 [sc-9088] apply useMemo and useCallback to reduce unnecessary rendering
1667359029 [sc-9088] Move transfer all into magicFillAll group with layout adjustment
1667357274 [sc-9088] Update magic/magic-all fill suggestions in dropdown
1667357274 [sc-9088] Update dropdown highlight style
1667357274 [sc-9088] Move the create new shortcut tribute value to shortcut header
1667357274 [sc-9088] Apply correct dropdown state after mapping removed
1667340428 [sc-10509] use rfdc instead of _.deepClone
1667340428 [sc-10509] use @fastify/deepmerge instead of _.mergeWith
1667340428 [sc-10509] Consolidate calls to deepMerge and mergeWith to utils.ts
1667337247 [sc-10008] server: Update name for team collection modify function
1667337247 [sc-10008] server: Update findLabelledByCreatorUserId to use knex builder for better readability
1667337247 [sc-10008] server: Update findLabelledByCreatorUserId to set workspaceID is null - This will help utilize the correct index for the first portion of the query that returns tags only and not teams
1667331560 [sc-9484] Update\`fetchVariablesForTabThenUpdateTabStateAsyncProperties\` unit test
1667315515 [sc-10200] Track \`autofill.invoke\` when dropdown transitions from closed to open
1667308919 [sc-10424] Organize UI tests into directories
1667271450 [sc-10424] ext: Test saving a new shortcut in the workspace
1667225182 [sc-9692] Test background-browser
1667225182 [sc-9692] Add unit tests to launch.json config
1667182437 [sc-9692] Move use of storage check into helper
1667182437 [sc-9692] Install mockzilla-webextension to mock webextension-polyfill
1667182437 [sc-9692] Improve description of initRpcServerMocks
1667049618 [sc-10502] Track all SrcSelector IDs for a magic fill
1667049618 [sc-10502] Rename \`autofillSelected\` and \`BaseAutofillSelected\` interfaces to use TitleCase
1667047584 [sc-10498] server: Disable 3.24 email
1666990768 [sc-10494] Update autoDisplayDropdown match rules to select only type=text
1666981670 [sc-9951] Delete entity statistics upon deletion of snippets and mappings
1666981670 [sc-9951] Create API to update entity statistics
1666981670 [sc-9951] Add routes for adding statistics
1666981582 [sc-9951] Create types and interfaces for entity statistics
1666981582 [sc-9951] Add server models for adding statistics in table
1666981582 [sc-9951] Add server handlers for adding statistics
1666981582 [sc-9951] Add migration to create entity-statistics table
1666979784 [sc-10306] server: enable tryVariabledShortcuts for 5k users based on uuid
1666975902 [sc-10453] ext: Fix variables-onboarding.dialog.close tracking event name mismatch
1666975300 [sc-10453] ext: Fix name issues with variables onboarding
1666975250 [sc-10453] ext: Update variables onboarding CSS
1666975250 [sc-10453] ext: Change variables onboarding copy
1666975250 [sc-10453] Update webflow link for variables onboarding dialog
1666975250 [sc-10453] Move variables onboarding timer to config, change from 7 to 3 days
1666974348 [sc-10487] Allow perf test pipeline to fail
1666970288 [sc-10112] Update create snippet content
1666970288 [sc-10112] Update create 5 shortcuts content
1666970288 [sc-10112] Start create snippet tour
1666970288 [sc-10112] Start create 5 snippets tour
1666970288 [sc-10112] Set snippet body to dirty if unsaved
1666970288 [sc-10112] Set create5Shortcuts checklist item on save
1666970288 [sc-10112] Open create snippet tour automatically on workspace open
1666970288 [sc-10112] Get create snippet checklist item sample snippet text
1666970288 [sc-10112] Don't show checklist dialog if multi level is enabled
1666970288 [sc-10112] Create 5 snippets from fab
1666970288 [sc-10112] Configure tour to checklist
1666970288 [sc-10112] Close create snippet fab checklist item on save
1666970288 [sc-10112] Close checklist panel if refer is chosen
1666970288 [sc-10112] Add config for create snippet checklist options
1666967403 [sc-10447] ext: Add variables onboarding panel tracking
1666896204 [sc-7532] Upgrade to rxjs 7
1666896204 [sc-7532] Replace bufferTime with non recurring operator
1666885093 [sc-10210] ext: Move modifySnippetCollections to util for easier testing and reusability
1666885093 [sc-10210] ext: Add unit test for modifySnippetCollections
1666880302 [sc-10423] ext: Resize trophy banner to fit emoji inside (bug fix)
1666835790 [sc-10235] ext: Set variable onboarding view to show when fab is opened
1666835790 [sc-10235] ext: Add variable onboarding panel view
1666833343 [sc-10235] ext: Add SVG graphic for variable onboarding
1666821668 [sc-10242] ext: Track when variable onboarding dialog is closed
1666821668 [sc-10242] ext: Set variableOnboardingDialogSeen when user closes variable onboarding dialog
1666821668 [sc-10242] ext: Add text.css to content panel
1666821668 [sc-10242] Build variable onboarding dialog
1666817072 [sc-10240] Create and set showVariableOnboarding feature flag for specific domains, updating pro beta cohort for those users
1666805558 [sc-10394] Linkedin transfer recommendations should point to Harpaul LI profile
1666796392 [sc-10236] Search in google if omnibox suggestion is not a url
1666795621 [sc-10364] ext: add mouse listeners to fab on drag
1666727059 [sc-8916] Use pre-computed src elements for variable highlighter
1666723458 [sc-10244] ext: Add website event for closing variable onboarding dialog from iframe
1666723458 [sc-10244] ext: Add preventDefault calls to all website events
1666723458 [sc-10244] ext: Add VariableOnboarding props to panel tab state
1666719647 [sc-10122] server: Move existing source off of freshdesk website section id
1666719647 [sc-10122] server: Create website section templates for zendesk, freshdesk, and salesforce
1666719646 [sc-10122] common: Move \`Case Number\` and \`Description\` label ids to common
1666710709 [sc-10363] server: Rollout canCreateTeams FF to all teams users
1666707070 [sc-10203] ESLint rule add & fix: prefer single quotes for JSX attrs
1666647816 [sc-10387] Add 3.24 rollout email
1666646620 [sc-10282] server: Add usersHandler.update test
1666646599 [sc-10282] server: Change 403 throw condition for usersHandler.update
1666637077 [sc-10020] Remove all usages of \`SyntheticEvent.nativeEvent\` - Prefer interacting with \`SyntheticEvent\` - Change \`stopImmediatePropagation\` -> \`stopPropagation\`     - see: https://getmagical.slack.com/archives/C01B1SUGVNX/p1666281282726899
1666637048 [sc-10020] Add ESLint rule to flag usage of \`nativeEvent\`
1666385444 [sc-10260] Add readyForDropdown state and set ready when dialog is fully rendered
1666382702 [sc-9655] Fetch website section data for transfers on login
1666382702 [sc-9655] Do not delete website section data for website sections that are transfer sources
1666380286 [sc-10312] Remove price enclosure matching from autocreate placeholder config
1666380286 [sc-10312] Ensure  member placeholder autocreation only occurs when in typical enclosure
1666376131 [sc-10301] ext: Track panel.open only when panel is opened and not on activeView change
1666373343 [sc-10299] ext: fix workspace panel button to refocus existing workspace tab
1666368095 [sc-10257] Replace tag ref with tag name state for tag input update
1666368095 [sc-10257] Add ui test for option tags
1666364851 [sc-10115] manually add in all of preact-config's recommended rules get rid of preact-config eslint
1666364851 [sc-10115] extend react recommended plugin
1666364851 [sc-10115] Remove unused variables to confirm with new, stricter eslint rule
1666340591 [sc-9625] ext: Revamp insert snippet checklist item
1666340591 [sc-9625] ext: Remove unused platform logos
1666340591 [sc-9625] ext: Refactor checklist dialog slice to be on options page slice
1666340591 [sc-9625] ext: Practice insert snippet checklist item
1666340591 [sc-9625] ext: Fix issues found from linter
1666340591 [sc-9625] ext: Create util function get checklist messaging sites
1666340591 [sc-9625] ext: Add tracking for filling in app checklist step
1666340591 [sc-9625] ext: Add expanded options checklist state
1666340591 [sc-9625] Create feature flag for multi level checklist
1666340591 [sc-9625] Add new multi level checklist items
1666308296 [sc-10123] ext: Show workspace text next to button if feature flag true
1666308296 [sc-10123] ext: Refactor HomeButton to use Button component
1666308296 [sc-10123] ext: Create RightRailHeader component
1666308296 [sc-10123] Add workspaceButtonTest feature flag
1666301289 [sc-10294] add back in ? to trimWhitespaceHelper
1666295271 [sc-9948] Attempt to fix flaky panel perf test checking page title
1666294890 [sc-9948] Change threshold limit of first contentful paint to 275 ms
1666294771 [sc-9948] Revert quick fix from sc-8725
1666294771 [sc-9948] Refactor initSentry to accept userInfo and sentryConfigs as params
1666294771 [sc-9948] Change localStorageSet call into JSON RPC
1666294771 [sc-9948] Add runtime check for requires-secure-context files
1666289628 [sc-10287] Remove member from autocreate placeholder config
1666287149 [sc-10256] add checkbox click tests to searchable list
1666280717 [sc-10256] fix bug causing page to refresh after creating a new team
1666280717 [sc-10256] Fix checkboxes in seconds step for creating a team
1666273368 [sc-10236] Add test for isExtensionInstalled website event
1666273163 [sc-10236] Fix website event so that it returns accurately
1666242472 [sc-10215] Trigger pipelines when only eslintrc changes
1666242472 [sc-10215] Add eslint rule to prevent adding timers in tests
1666232672 [sc-9942] server: Fix 403 usersHandler.update error throw
1666232672 [sc-9942] server: Add usersHandler.update test
1666206534 [sc-10140] server: Return default source labels for all public sources (including placeholders).
1666206534 [sc-10140] server: Add public \`Ticket Number\` label
1666206534 [sc-10140] ext: Prioritize \`Ticket Number\` placeholder after name placeholders
1666204761 [sc-10222] ext: change onKeyUp to onChange for custom dropdown prompt input
1666195645 [sc-10183] ext: Fixed styling for join button on teams tabs
1666194096 [sc-10027] ext: filter options page from guided transfers dialog
1666167021 [sc-10182] Stop synthetic event's propagation to prevent the event from dropdown item
1666126035 [sc-10137] update shared/common for try-variabled-shortcuts
1666126035 [sc-10137] ext: add try-variabled-shortcuts to background scripts
1666126035 [sc-10137] ext: add expander and autofill changes for try-variabled-shortcuts
1666126035 [sc-10137] ext: add UI for try-variabled-shortcuts
1666108746 [sc-9650] Fetch variables and update tabstates when user logs in
1666101801 [sc-10208] ext: Update dropdown Personal Shortcuts section name to say 'My shortcuts'
1666046124 [sc-10164] move m button to its own file
1666046124 [sc-10164] Show M button to certain inputs on certain pages on focus
1666046124 [sc-10164] Add tracking to M button
1666046124 [sc-10164] Add feature flag for M button
1666046124 [sc-10164] Add M button snoozing
1666038648 [sc-9226] ext: add "Add searchText" button to variable picker
1666037030 [sc-8883] Remove groupSortOrder in group value and place variables from current tab and latest filled source to top
1666036177 [sc-10179] Use \`isObjectInstanceOfDOMGlobal\` check in placehodler dialog
1666036177 [sc-10179] Rename test snippets and match span content to label
1666036177 [sc-10179] Augment placeholder UI test with two same labeled destinations
1666036177 [sc-10179] Add HTMLSpanElement to isObjectInstanceOfDOMGlobal
1666033472 [sc-8808] server: Don't return website section templates to older clients
1666033472 [sc-8808] server: Add type col to website sections table
1666033472 [sc-8808] ext: Return sources for best standard website section match and website section template
1666033472 [sc-8808] ext: Don't save new sources onto website section templates
1666033472 [sc-8808] ext: Add tests for \`getBestSourcesForUrl\` for website section templates
1666033472 [sc-8808] ext: Add test for \`saveNewSourceWithLabel\` to ensure that it doesn't try to save sources on a website section template
1666033472 [sc-8808] common: Add type to \`WebsiteSection\` interface
1666023209 [sc-10170] server: Turn on autoDisplayDropdownOnWebsites for all users
1666023209 [sc-10170] Remove Hubspot autoDisplayDropdownMatchRules
1666020490 [sc-10191] Update add to chrome buttons on website
1666014498 [sc-9727] ext: clear websiteSectionsLastFetched during /update and extension update
1666011230 [sc-9959] ext: Use executeAsyncScript in dropdown-position tests
1666011230 [sc-9959] ext: Grow width of dropdown to scale with target element
1666011230 [sc-9959] ext: Add back the offset so the dropdown extends to the right edge
1665781889 [sc-10158] use routing for signin page
1665781889 [sc-10158] add basic test for sign in
1665777742 [sc-9494] Initialize cachedBaseUrlRegexToWebsiteSectionIdPromise at declaration time
1665776608 [sc-10032] ext: Add back awaits and promise return for tag util functions
1665771017 [sc-10121] ext: Test filling textarea and contenteditable placeholder shortcuts
1665771017 [sc-10121] ext: Replace placeholder elements with its value when filling
1665771017 [sc-10121] Add a helper to get form field contents in tests
1665765325 [sc-9931] ext: Fix lint rule issue with unused variable
1665761293 [sc-9931] ext: Update unit test for groupType changes
1665761293 [sc-9931] ext: Separate team shortcuts in the dropdown by team
1665700430 [sc-10032] ext: Update how individual team shortcuts are fetched and updated in localstorage - We can just replace exisitng shortcut ids with the new shortcuts, and add anything new - Any shortcuts that could be removed will be on the regular 30 min team shortcut fetch
1665700430 [sc-10032] ext: Remove fetching team shortcuts on tab switch - We will instead fetch at the alarm interval or when shortcut sharing changes
1665700430 [sc-10032] ext: Add function to update all teams data from server - call this from background on alarm
1665700430 [sc-10032] ext: Add RPC method to update all team shortcuts - Call update team shortcuts when sharing is changed from the share team   dialog - Make apply tags return promises so we can ensure the ordering of calls
1665696238 [sc-9696] ext: Team shortcut tag shows email if user has no name
1665689442 [sc-9915] ext: Fix some autoCreatePlaceholder naming issues
1665689442 [sc-9915] ext: Adding textCausingAutoCreatedPlaceholders to snippet.save event
1665683198 [sc-9969] server: Add to recommended placeholders config
1665682642 [sc-10157] server: Add migration to create and back populate batch 3 of companies
1665679755 [sc-10110] server: Pass company name to Sendgrid for teams announcement email
1665589946 [sc-9582] ext: add UI to delete transfers from workspace
1665588400 [sc-9582] ext: add UI to delete transfers from panel
1665521565 [sc-9582] ext: add background scripts + models to batch delete mappings/transfers
1665521510 [sc-9582] server: add route to delete multiple mappings
1665516656 [sc-7704] convert preact to react
1665506808 [sc-10081] ext: Ban usage of sendMessage
1665501017 [sc-10088] ext: Enable the object-curly-spacing eslint rule
1665501017 [sc-10088] ext: Adjust formatting where curly-spacing pushed it over max-len
1665462006 [sc-10094] server: Allow company step in onboarding to be skipped
1665345942 [sc-10089] ext: Deprecate 'team-share-dialog.checkbox-change'
1665345934 [sc-10089] ext: Add numTeams property to 'team-share-dialog.cta.click'
1665176586 [sc-9495] Specifiy eslint disable rule to the line below
1665176586 [sc-9495] Replace setNotificationStorage() with notificationsServer notification
1665176586 [sc-9495] Replace localStorage* calls in content-scripts with JSON RPC
1665176586 [sc-9495] Replace localStorage calls with store.getState()
1665176586 [sc-9495] Remove localStorage call from placeholder-dialog.tsx
1665176586 [sc-9495] Move function using localStorage into variable-picker
1665176586 [sc-9495] Move destinations-preact-utils.ts into requires-secure-context
1665176586 [sc-9495] Modify client request to specify return type based on parameters
1665176586 [sc-9495] Create API and server for local storage
1665176586 [sc-9495] Add unit test for autosuggest.ts
1665176586 [sc-9495] Add notifications server
1665175748 [sc-8581] ext: update toggle label in panel variables tab with page name
1665174345 [sc-10051] Turn on showCSATDialog feature flag for all users
1665174340 [sc-10051] Make CSATDialog show for users created after a configurable date
1665173158 [sc-10051] ext: Pass callback to onCloseCallback in CSATDialog
1665173158 [sc-10051] ext: Adding states for CSATDialog
1665173158 [sc-10051] ext: Add deeplinking for CSATDialog
1665173158 [sc-10051] ext: Add deeplink CSATDialog tracking
1665171103 [sc-10075] Update share team dialog CTA to say Skip if no team selected
1665165635 [sc-10076] ext: Add properties for 'workspace.team.edit.save'
1665156882 [sc-9954] ext: Move 'magicFillValues' to notifyTab
1665156794 [sc-9954] ext: Move 'selectItem' to notifyTab
1665156794 [sc-9954] ext: Move 'closeDropdown' to use notifyTab
1665152489 [sc-10058] Pass shortcuts to \`setAmplitudeUser\`
1665152489 [sc-10058] Move workspace/options toasts into separate file
1665152489 [sc-10058] Move tracking functions out of server-api label
1665144586 [sc-10073] Reinstate 'workspace.select-all-shortcuts' event
1665118501 [sc-9078] ext: Reference priority attributes from \`matchers\` AppConfig
1665118501 [sc-9078] ext: Add a \`getAppConfigFromStore\` content-script helper
1665118501 [sc-9078] Expose priority attributes in \`matchers\` AppConfig
1665118501 [sc-9078] Add data-* priority attributes
1665118476 [sc-9992] Adjust perf. test bounds again (2) based on data since 2022-09-23
1665103100 [sc-10063] ext: Share dialog should open for non-workspace user
1665098728 [sc-10062] fix visual bugs in create team dialog
1665093740 [sc-9904] ext: Prevent redundant label save for labeledPlaceholder
1665091184 [sc-10046] Use eslint-plugin-unused-imports to auto remove unused import on file save
1665088567 [sc-10050] ext: Don't fetch all labels from server on snippet save
1665087203 [sc-9774] save shortcuts to team while going through create flow
1665087203 [sc-9774] add ui for create team second step
1665087203 [sc-9774] add searchable list component
1665084694 [sc-9809] ext: Add CSATDialog response tracking
1665084692 [sc-9809] ext: Show CSATDialog in workspace, add CSATDialogClosed flag in notificationStorage
1665084678 [sc-9809] Add showCSATDialog feature flag
1665084675 [sc-9809] ext: Add CSATDialog
1665081238 [sc-9809] ext: Add --magical-secondary-50 and --magical-orange-40 to variables.css
1665078920 [sc-9947] Autoselect Source field in guided transfer dialog
1665067745 [sc-10030] Move interfaces and types out of storage.ts
1665014529 [sc-9738] ext: Create helper function to return teams user part of
1665014529 [sc-9738] ext: Allow sharing shortcuts only to joined teams
1665010930 [sc-9843] Add more autoDisplayDropdownMatchRules
1665006963 [sc-8732] Return limited default labels instead of all default labels
1665003764 [sc-9990] Fix null state team workspace view
1665003764 [sc-9990] Change go to workspace link to have a pointer cursor
1665002594 [sc-10014] Turn on autoCreatePlaceholders for all users
1664998873 [sc-9737] ext: Hide edit button for unjoined teams
1664996080 [sc-9737] ext: Add noMargin prop to Button component
1664996080 [sc-9737] ext: Add large size to Avatar component
1664996080 [sc-9737] ext: Add empty state for unjoined teams - Avoid fetching shortcuts for unjoined teams
1664996080 [sc-9737] ext: Add emoji to team member sidebar - Switch team edit button to use Button component and adjust styling
1664994943 [sc-9513] ext: Refactor getVariableMatchesFromRegexMatches to handle more sophisticated regexes
1664994943 [sc-9513] Update autoCreatePlaceholder config with new match format
1664994943 [sc-9513] Removing some variable suggestions that conflict with auto create placeholders
1664994943 [sc-9513] Add more text to be matched by autoCreatePlaceholders
1664991717 [sc-9992] Adjust perf. test bounds again based on data since 2022-09-23
1664985364 [sc-9979] ext: Remove unused vars in background-data-sync.ts
1664984092 [sc-9979] remove custom open/closing of emoji input  popover now that shadow root is gone
1664984092 [sc-9979] fix skin tones for emoji picker in create team dialog
1664982931 [sc-9635] Remove extensionInstalled cookie and make it a website event
1664982908 [sc-9918] Update progress bar complete state
1664981497 [sc-10007] Remove a timer and a race from placeholder-dialog.ui.test.ts
1664980388 [sc-5524] Add sentry to gitlab CI/CD for staging + prod
1664979847 [sc-5524] Install sentry cli
1664979847 [sc-5524] Generate source maps for non-dev builds
1664941497 [sc-9957] ext: Insert a delay between keystrokes to fix ckeditor-5
1664941497 [sc-9957] ext: Adjust values for draft-js-editor position test
1664941497 [sc-9957] ext: Adjust positions for quill editor position test
1664941497 [sc-9957] ext: Adjust position for trix position test
1664941368 [sc-9992] Adjust perf. test bounds based on data since 2022-09-23
1664921910 [sc-9922] tests server-labels
1664915250 [sc-9992] ext: Only enforce a ceiling for delta measurements in the LinkedIn perf. test
1664915250 [sc-9992] ext: Abort on errors in run_mitmproxy.sh
1664911303 [sc-9995] ext: Only teams users should see team share dialog on new snippet creation
1664909236 [sc-9785] Remove unused import/no-cycles
1664898707 [sc-9785] Move \`populateGoogleAccounts\` out of server-user
1664896501 [sc-9962] ext: add gap to placeholder dialog CTA buttons
1664890633 [sc-7699] server: Route to edge extension installation page if user on edge
1664890633 [sc-7699] Add comma to export
1664836582 [sc-9974] Turn off transfers UER emails
1664835357 [sc-9564] Add search input to team workspace
1664835341 [sc-9564] Add margin to the clear filter
1664835329 [sc-9564] Store collection id with search query
1664835280 [sc-9564] Clear filters on tab switch
1664822845 [sc-9843] ext: Show completed banner instead of changing header
1664822845 [sc-9843] ext: Refactor checklist content logic and css
1664822845 [sc-9843] ext: Add checklist help footer
1664815308 [sc-9489] use team emojis in shortcuts and options sidebar
1664815308 [sc-9489] create emoji input component
1664815308 [sc-9489] add emoji picker to team create/edit dialog
1664814129 [sc-9688] ext: Update shortcut tags to show team names
1664814129 [sc-9688] ext: Update filter tags to show team names
1664814129 [sc-9688] ext: Improve alignment of teams tags in filter dropdown
1664573788 [sc-9911] Move storage.ts and notifications-common.ts into new folder
1664573788 [sc-9911] Add eslint rule to disallow imports from secure-context
1664572267 [sc-9945] ext: Move react tour step changes to be in options-tabs - changes to steps need to happen in a child component of the TourProvider. Previously the steps were being modified in options-app which was not having any effect on the Tour
1664571084 Revert "[sc-9929] ext: Reset workspaceIntroPanelSeen"
1664569102 [sc-8382] Save mapping when MagicFilling a placeholder suggested  mapping
1664569102 [sc-7390] Unit Tests
1664569102 [sc-7390] Change "suggested mapping" wording to "auto mapping"
1664569102 [sc-7390] Automatically map variables to shortcuts in the placeholder dialog
1664567876 [sc-9944] fix snippet-body-editor ui test
1664554863 [sc-9940] server: Fix 403 throw to make sure user's first name and last name are not null
1664503413 [sc-9935] ext: Fix 'numTotalPlaceholders' in 'snippet.save' event on workspace
1664503269 [sc-9935] ext: Remove snippet.edit tracking from workspace
1664502639 [sc-9937] ext: Only increment numFieldsFilledIn by one if the suggestion type is magic, not magic-fill-all
1664502615 [sc-9936] ext: Adding data-magical-filled attribute to placeholders during magics in the placeholder dialog
1664502615 [sc-9936] Rename numPlaceholdersAutofilled and numPlaceholdersManuallyFilled to numPlaceholdersMapped and numPlaceholdersUnmapped for clarity
1664489063 [sc-9921] ext: Add tracking for select/deselect all shortcuts checkbox
1664487386 [sc-9756] ext: Move bulk share button to be left of tag button
1664487386 [sc-9756] ext: Add reactour library and teams walkthrough steps
1664487386 [sc-9756] ext: Add reactour library and teams walkthrough steps
1664485004 [sc-9756] ext: Remove workspace help cards walkthrough in place of reactour library
1664485004 [sc-9756] ext: Add tutorialId prop for OptionsTabGroup and set it for company workspace tab groups
1664480507 [sc-9927] ext: Change height of snippet-body-editor based on whether it isInPanel
1664480340 [sc-9896] Not showing values without label if target destination has labels for matching
1664479958 [sc-9929] ext: Reset workspaceIntroPanelSeen
1664479865 [sc-9910] Sort the groups before appending show all variables option
1664473232 [sc-9848] Tests background-options-page
1664442899 [sc-9917] server: Turn off 3.22 product digest
1664412026 [sc-9831] ext: Refactor focusEventListener to maybeDisplayDropdown
1664411424 [sc-8837] ext: refactor unsentSnippetWithoutPlaceholderFillEvents to use localStorageModify
1664411424 [sc-8837] ext: Add SnippetWithPlaceholderFillEvent for tracking placeholder snippet fills
1664411424 [sc-8836] ext: Send last deprecated unsentSnippetExpansionEvents in background and remove from localStorage
1664411424 [sc-8836] ext: Refactor trackSelectedSnippet to use new snippet.batched.fill event
1664411424 [sc-8836] Refactor SnippetExpansionEvent to track only snippets without placeholders
1664411424 [sc-8337] ext: Refactor sendSnippetWithoutPlaceholderFillEventsInGroupedBatch to use localStorageModify
1664408892 [sc-9396] ext: Indentation fix in panel-help.css
1664408892 [sc-9396] ext: Fix .right-rail-gif styling in panel-help
1664408892 [sc-9396] ext: Add .content-width class for buttons
1664405152 [sc-9548] Deprecate and remove referralCreditsNotificationEnabled feature
1664396334 [sc-9778] remove whitespace from background-labels.unit.test filename
1664396334 [sc-9778] Tests background-transforms
1664392807 [sc-9248] ext: Increase tag length, fix ellipsis not showing problem, prevent expansion in tag dialog
1664392079 [sc-9166] server: Throw 400 if user update is empty
1664392079 [sc-9166] server: Fix 403 throw if trying to change user first name or last name
1664382450 [sc-9852] ext: Allow for different rendering of the number '1' and add logging to debug flaky test failure
1664380631 [sc-9903] Only send emails to users created more than 2 weeks ago
1664376749 [sc-9898] Fix commenting out dev emails
1664376025 [sc-9755] bg-website-sections: add unit tests for manager
1664376025 [sc-9755] bg-website-sections: add unit tests for global state init
1664376025 [sc-9755] Use registerGlobalState for closed tabs
1664376025 [sc-9755] Remove unused WebsiteServerApi.getAllWebsiteSections()
1664376025 [sc-9755] Consolidate updating closed tabs logic into state registration
1664374762 [sc-9562] server: drop base_url_regexes col from website_sections table
1664368634 [sc-9875] Send 3.22 product newsletter
1664308505 [sc-9822] update "Create team" button styles
1664306011 [sc-9804] ext: Track snippet.edit in workspace
1664303518 [sc-9835] Don't show panel checklist if complete
1664295037 [sc-9808] Use create transfer tracking event on workspace
1664295037 [sc-9808] Replace \`panel.transfers.create.click\` with new event
1664295037 [sc-9808] Deprecate \`create.transfer.modal.impression\`
1664295037 [sc-9808] Add 'panel' source to TransferCardsComponent
1664295036 [sc-9808] Add create transfer "source" prop to TransferCardsComponent
1664295014 [sc-9808] Add new \`transfer.create\` event
1664291562 [sc-9768] update import/order eslint rule to alphabetize
1664291562 [sc-9768] remove "source.organizeImports" from vscode settings
1664289127 [sc-9828] Consolidate shortcut.create event
1664233991 [sc-9734] tests background-placeholders
1664227092 [sc-9830] ext: Track fill modification in sheets only if
1664227066 [sc-9813] Deprecate 'variable.picker.variable.click'
1664227066 [sc-9813] Deprecate 'variable.modal.insert.click'
1664227066 [sc-9813] Deprecate 'variable.modal.impression'
1664224404 [sc-9836] Bump perf threshold for \`workspace load total blocking time\`
1664222540 [sc-9803] Clean up checklist css
1664213353 [sc-9777] ext: Increase margin for personal info dialog content
1664206097 [sc-9795] Fetch shortcuts async with other data
1664205355 [sc-9599] ext: Update options checklist
1664205355 [sc-9599] ext: Refactor progress bar component
1664205355 [sc-9599] ext: Deprecate old panel checklist
1664205355 [sc-9599] ext: Create new panel checklist
1664135948 [sc-9416] ext: Show and track onboarding text in nav bar based on feature flag
1664135916 [sc-9416] Create feature flag for nav bar onboarding text experiment
1663971040 [sc-9685] added configurablity to label helper
1663971040 [sc-9685] Tests background-labels
1663971040 [sc-9685] Remove flaky mock localStorageModify from background-mappings.unit.test
1663970156 [sc-9780] Disable variable-shortcuts.ts seeds
1663969786 [sc-9780] Revert "[sc-9780] server: Fix variable shortcuts seed key conflict"
1663967391 [sc-9780] server: Fix variable shortcuts seed key conflict
1663960569 [sc-9443] Fix unit tests that use Tribute constructor
1663960474 [sc-9443] Move updateTabDropdownState out of defaultConfig
1663958713 [sc-9767] Check if placeholder is filled before adding it to fills array
1663957208 [sc-9734] Sort the shortcuts by the lastUsed timestamp
1663957208 Wait for dropdown closed to make sure the input value is replaced
1663954491 [sc-9731] ext: Remove userInfo prop from ProfileCircle
1663954491 [sc-9731] ext: Fix updateUserDetails so it updates localStorage as well
1663954491 [sc-9731] Add showPersonalInfoDialog feature flag
1663951925 [sc-9606] ext: Track modal impression and submission for create team
1663951925 [sc-9606] ext: Make 'Create team' button
1663951925 [sc-9606] Feature flag team creation only for canPromote users
1663951923 [sc-9606] ext: Edit dialog for team creation
1663949671 [sc-9606] server: Insert team into db
1663949671 [sc-9606] ext: Send create team payload to server
1663948458 [sc-9722] fix infinite re-render on options app
1663906273 [sc-9534] Example config.toml for the perf. Gitlab runner
1663904316 [sc-9534] Update perf test thresholds
1663901235 [sc-9534] Use the 'perf' tag/runners for Extension perf. tests
1663901235 [sc-9534] Use artifacts instead of cache
1663901235 [sc-9534] UI Test job shouldn't try to run docker
1663901235 [sc-9534] Start mitmproxy for 'npm run test'
1663901235 [sc-9534] Log raw measurements for all perf tests
1663901235 [sc-9534] Drop first measurement and reduce linkedin num measurements
1663880503 [sc-9749] change share team dialog view management to follow existing pattern
1663877693 [sc-9607] update styles of options tabs move options tabs styles to its own file
1663877693 [sc-9607] show both joined and unjoined teams in sidebar
1663877693 [sc-9607] allow users to join teams they are not part of
1663877693 [sc-9607] add server route to retrieve snippet collection ids for user
1663877693 [sc-9607] add route to join teams for a user
1663876267 [sc-9669] bg-snippets: add unit tests for saving and fetching in RPC
1663876267 [sc-9669] bg-snippets: add unit tests for manager
1663876267 [sc-9669] bg-snippets: add unit tests for fetching snippets
1663876267 [sc-9669] bg-snippets: add unit tests for deleting snippets
1663876267 [sc-9669] Remove unused no-cycle disables
1663876267 [sc-9669] Register snippets on background global state
1663876267 [sc-9669] Drop unnecessary async from initRpcServerMocks
1663872748 [sc-9752] Build and use the UI test Dockerfile if it's changed in an MR
1663866287 [sc-9486] rework shortcut editor to be a bit more simplified
1663866287 [sc-9486] remove teams dropdown
1663866287 [sc-9486] fix the indeterminate state for the shortcut list
1663866287 [sc-9486] change teams dropdown to share dialog in panel
1663866287 [sc-9486] add styling for icon buttons
1663866287 [sc-9486] add share dialog to shortcut row
1663866287 [sc-9486] add facepile component
1663866287 [sc-9486] add bulk sharing dialog
1663866287 [sc-9486] add 'disabled' property to the Button component change button hover to be opacity based
1663864547 [sc-9538] ext: Push bullets left, move CTA to footer
1663864547 [sc-9538] ext: Add graphic with nested workspace logo in workspace intro panel
1663850276 [sc-9725] Add https://support.getmagical.com/ to \`BASE_URLS_PRIVATE_BY_DEFAULT\`
1663822808 [sc-9700] Handle getFrameData getting null responses when an iframe with the \`src\` can't be found
1663801326 [sc-8500] ext: Updating tab state with multiple labelIdsForMatch for autoDisplayDropdown
1663801326 [sc-8500] ext: Removing stale comment
1663801326 [sc-8500] ext: Refactor srcPageToSuggestionGroup to accept multiple labelIds
1663801326 [sc-8500] ext: Refactor focusEventListener to use new getLabelsFromAutoDisplayDropdownMatchRules helper
1663801326 [sc-8500] ext: Refactor Dropdown props and TabState to accept multiple labelIdsForMatch
1663801326 [sc-8500] ext: Adding helper function to get labelIds of autoDisplayDropdownMatchRules from a matching element
1663801326 [sc-8500] Refactor CustomFocusAction to AutoDisplayDropdownMatchRule, add sites and matchers for autoDisplayDropdown to config
1663801326 [sc-8500] Adding autoDisplayDropdownWithVariables feature flag
1663796701 [sc-9684] Remove try catch for snippet bodies without destinations - no longer possible:
1663796701 [sc-9684] Remove SrcMatch from the placeholder dialog
1663796701 [sc-9684] Deprecate labeled placeholder sources in the context of placeholder filling.
1663796663 [sc-9684] Replace srcValue based filling in getSnippetBody with placeholderFill based filling.
1663796115 [sc-9684] Add ui test for basic filling from placeholder dialog
1663774724 [sc-9678] ext: Compute the number of auto created placeholders AFTER generating them
1663772722 [sc-9536] Only show signup banner if user is not forced to sign up
1663772701 [sc-9629] Change 'discover variables' step text to say 'Add variables'
1663767606 [sc-9686] Use dest ids for auto-opening dropdown in placeholder dialog
1663712022 [sc-9608] bg-autofill: add unit tests for selectedSnippet
1663712022 [sc-9608] bg-autofill: add unit tests for saving mappings
1663712022 [sc-9608] bg-autofill: add unit tests for removing mappings
1663712022 [sc-9608] bg-autofill: add unit tests for magic fills
1663712022 [sc-9608] Increase the minimum test coverage requirement to 20%
1663712022 [sc-9608] Add "mock" to RPC mock server helper
1663712022 [sc-9608] Actually return JSON-RPC return type in mock
1663712022 [sc-8512] Don't compare createdAt in mapping save test
1663711457 [sc-9682] server: Update snippet.findByWorkspaceIdForUser to use joins instead of sub queries
1663707775 [sc-8512] Unit tests for background-mappings
1663685075 [sc-9565] Update profile info substitution details
1663685075 [sc-9565] Add tests for processing substitutions for shortcuts
1663610237 [sc-9661] Bump variable refetch + expiration time
1663605588 [sc-9581] Use \`registerGlobalState\` for bg-guided-transfers
1663605588 [sc-9581] Remove bg-global-state dependency on bg-guided-transfers
1663605588 [sc-9581] Add unit tests for bg-guided-transfers
1663605281 [sc-9624] Use tsc for type checking tests to reduce memory
1663594687 [sc-9622] ext: Only show variable picker help card if the user has created a shortcut before
1663377270 [sc-9615] ext: Prioritize team members with names at top, alphabetize
1663377270 [sc-9615] Edit WorkspaceUser to also get email
1663371479 [sc-9616] ext: Update dropdown suggestion to include teamId for tracking
1663361772 [sc-8497] ext: Show panel if recommended placeholders present and website section not seen
1663361772 [sc-8497] ext: Display recommended placeholders in the editor
1663361772 [sc-8497] ext: Adding snippet.autosuggest-creation.show tracking to recommended placeholders
1663361772 [sc-8497] ext: Adding shortcutSource event on snippet.save to track autosuggest and recommended placeholders
1663361772 [sc-8497] ext: Add recommended placeholder props to SnippetEdit and SnippetBodyEditor
1663361772 [sc-8497] ext: Add helper function to get recommended placeholders for current tab
1663361772 [sc-8497] Show a banner in SnippetEdit view when there are recommended website placeholders
1663360048 [sc-8497] ext: Refactor getVariableSpan to work with labelIds
1663360048 [sc-8497] ext: Refactor SnippetEdit to use srcPage instead of currentUrl
1663360048 [sc-8497] ext: Add UserRecommendations to local storage and populate when calling updateAllDataFromApiForUser
1663360048 [sc-8497] Move support slugs to own config, call supportArticleUrl on client side
1663359517 [sc-9618] server: Add GET users/recommendations route
1663359517 [sc-9618] Add recommended website placeholders configs
1663356929 [sc-9617] ext: Track when users save a change for team name
1663352914 [sc-8030] show gif on shortcut variable help card when no help variables are available
1663352914 [sc-8030] only show shortcut variable help card if the user hasn't seen it before
1663352914 [sc-8030] add tracking to shortcut variable help cards
1663352914 [sc-8030] add tooltip design system component
1663352914 [sc-8030] add shortcut variable help card to panel
1663352914 [sc-8030] add shortcut variable help card in workspace
1663352914 [sc-8030] add shortcut variable help card feature flag
1663350968 [sc-9619] Make "Update Test" interruptible
1663309130 [sc-9613] ext: lint rule to prevent new references to \`window\`/\`document\` in the background
1663306453 [sc-9605] Update migration function to batch updates for an array of snippets.
1663306453 [sc-9605] Migrate snippets from sources to destinations on find by user and find by workspace
1663306453 [sc-9605] Migrate snippets for a given list of users
1663302703 [sc-1896] ext: Wait until FAB is visible before clicking on it
1663300980 [sc-9547] Delete website sections with no baseUrls
1663300704 [sc-8620] Revert action.type back to 'start'
1663300269 [sc-9554] server: Update seed to merge and delete more website sections
1663300269 [sc-9554] server: Migration to delete website sections with no base urls and no sources
1663298907 [sc-8466] ext: Increase linkedin.perf.test ceilings again
1663298515 [sc-9449] Remove autofill.cancel tracking event
1663278496 [sc-9578] Have styling for variable spans that contain only the destination attribute
1663278496 [sc-9578] Focus and auto select sources with the same label for placeholder destination only inputs
1663278496 [sc-9578] Fix tracking for snippets with only placeholder destinations
1663278496 [sc-9578] Account for destination placeholder only spans when filling from placeholder dialog
1663278496 [sc-9578] Account for destination placeholder only spans in getSnippetBody - used in placeholder dialog and filling
1663277558 [sc-9521] ext: Simplify share in workspace sidebar
1663274924 [sc-9603] Quick: ext: Team name single line and truncated with ellipsis
1663271001 [sc-9336] Add unit test for website-events.ts
1663271001 [sc-9336] Add unit test for transform-builder.ts
1663271001 [sc-9336] Add unit test for tag-utils.ts
1663269025 [sc-9491] server: Delete seed for creating default company workspace and collections - With recent changes to allow users to edit collection (team) names and eventually more details, we don't want the seed to run and overwrite user changes
1663265526 [sc-9392] ext: workspace.team.edit tracking
1663265526 [sc-9392] ext: Prevent team name overflow in tabs and team sidebar
1663265526 [sc-9392] ext: Paths for team edit dialog
1663265526 [sc-9392] ext: Make actionable-icon icons' color gray-60 instead of black
1663265526 [sc-9392] ext: Edit unit test
1663265526 [sc-9392] ext: Create team edit dialog
1663258441 [sc-9535] server: Depcreate panel referral credits experiments
1663258441 [sc-9535] ext: Deprecate panel referral credit experiment UIs
1663255197 [sc-8742] Add some more tests for snippet-utils.unit.test.ts
1663204687 [sc-9082] server: Refactor sendEmailTemplate to take an object
1663204687 [sc-9082] server: Move emailTemplates to shared folder
1663204687 [sc-9082] server: Create route to send transferUER email
1663204687 [sc-9082] server: Check user qualifications for UER
1663204687 [sc-9082] ext: Update tracking and send transfers UER email
1663204687 [sc-9082] ext: Add call to userActionTriggeredEmail route
1663188808 [sc-9082] server: Add maxmind countries db
1663183131 [sc-8810] ext: Update user details after clicking submit
1663183131 [sc-8810] ext: Substitute the %{attribute}$ with the user info
1663183131 [sc-8810] ext: Introduce Personal Attributes Dialog
1663175377 [sc-1896] ext: Exclude src/ui-tests/ from builds
1663175375 [sc-1896] add ui test for variable creation
1663174332 [sc-1896] update \`getElement\` in content-ui-utils to not use a redundant await
1663171303 [sc-9390] update workspace to handle multiple snippet collections
1663171303 [sc-9390] rename options page slice properties to be less confusing
1663171303 [sc-9390] add server route to retrieve all snippets for a workspace
1663168007 [sc-8931] Exclude node_modules and large files from coverage report
1663168007 [sc-8931] Allow ext lint/test job to run parallel to build job
1663167909 [sc-8931] Add unit tests for background-user RPC methods
1663167909 [sc-8931] Add unit tests for background-config RPC methods
1663167909 [sc-8931] Add JSON-RPC server test helpers
1663137795 [sc-8466] ext: Increase linkedin.perf.test ceilings
1663134985 [sc-9463] server: For new workspace, make first collection label 'General'
1663133890 [sc-9240] ext: Run the mitmproxy during UI tests
1663133890 [sc-9240] ext: Force DPI scaling to 1 for device consistency
1663133890 [sc-9240] ext: Add a UI test for expansion on Google Docs
1663096318 [sc-9366] Remove unnecessary \`no-cycle\` ignores
1663096318 [sc-9366] Remove server-user dependency on UserManager
1663096318 [sc-9366] Remove bg-tracking dependency on UserManager
1663096318 [sc-9366] Remove bg-global-state dependency on UserManager
1663096318 [sc-9366] Remove \`background-context-menu\` dependency on UserManager
1663096318 [sc-9366] Move \`fetchUserAndDataFromServer\` out of User RPC api
1663096318 [sc-9366] Add bg-data-sync file for data update functions
1663095269 [sc-9389] server: Seed populates snippet_collections label with 'General'
1663095269 [sc-9389] server: Add unit tests
1663095269 [sc-9389] server: Add migration to update existing workspace team names to 'General'
1663038992 [sc-8932] Prevent CI jobs on protected branches from being interruptible
1663010899 [sc-9394] ext: Restrict shortcut trigger from being dropdown prompt
1662995928 [sc-9382] update team matching logic to be a bit cleaner
1662995928 [sc-9382] update sidebar to contain team members
1662995928 [sc-9382] add avatar component
1662993478 [sc-9381] fetch team members from server and save to localStorage
1662773197 [sc-9220] ext: Spread array dependency within PlaceholderDialog
1662773197 [sc-9220] ext: Remove delay before focussing first empty placeholder element
1662773197 [sc-9220] ext: Focus placeholder dialog only after snippets source labels have been retrieved
1662769698 [sc-8725] ext: Fallback to storage.local.get without a lock if requesting a lock throws
1662759905 [sc-9435] ext: Key \`websiteSectionsLastFetched\` by registrable domain instead of website section id
1662759905 [sc-9435] ext: Check \`websiteSectionsLastFetched\` in \`anonymouslyGetWebsiteSectionsWithSourcesForUrl\`
1662758749 [sc-9334] Auto-select the first item in the dropdown when the user explicitly opened it
1662758374 [sc-9334] Use a WebElementCondition in waitForDropdownVisible to improve failure output
1662758374 [sc-9334] Don't assume there is a range in the selection returned by getSelectionForNode
1662758374 [sc-9334] Add a test helper to wait for a dropdown selected index
1662758373 [sc-9334] Use the \`switchToPrivilegedFrame\` helper in mappings.ui.test.ts
1662758373 [sc-9334] Allow the \`data-magical-auto-display-dropdown\` to auto-display the dropdown on file:///
1662757212 [sc-9423] Prevent showing unfilled snippet suggestions in placeholder dialog
1662756080 [sc-9287] ext: Avoid getSelection returning previous selection
1662744274 [sc-9413] remove dependency cycles from right-rail.tsx
1662742375 [sc-9373] Deprecate signUpDetailsSplitEnabled as it is now the desired behavior for all users
1662741450 [sc-9472] server: Add migration to create and back populate next batch of existing companies
1662734551 [sc-9229] Change fab close icon to gray x
1662734320 [sc-9229] Add missing magical reds
1662730046 [sc-9444] Add back tracking for magic fills in Google Sheets
1662697219 [sc-8627] Add 2 new rules to match first names in gmail
1662679940 [sc-9333] server: Update createAndBackPopulateCompanyWorkspace to return the team created
1662679940 [sc-9333] server: Update POST /workspaces to create and back populate - add tests for POST /workspace
1662661165 [sc-9027] Fix styling on dialog elements
1662660427 [sc-9428] Make outFiles an empty array for extension test commands
1662659214 [Quick] Bump the linkedin perf celling temporary and revisit in the follow up
1662657587 [sc-8466] Use -1 for UNSELECTED_DROPDOWN_INDEX to make delta math easier (just add one when pressing down)
1662657587 [sc-8466] Update tab state's selectedIndex and cachedValuesToFill when they change in the dropdown
1662657587 [sc-8466] Synchronously fill certain selected suggestion types
1662657587 [sc-8466] Send TributeValue with selectItem messages
1662657587 [sc-8466] Return an array of Element from dropdown's orderedGroups
1662657587 [sc-8466] Reset dropdown selectedIndex upon tab navigation
1662657587 [sc-8466] Re-enable mappings.ui.test
1662657587 [sc-8466] Populate selectedIndex and cached TributeValue in tab state
1662657587 [sc-8466] Move autofill invoke tracking to a \`useEffect\`
1662657587 [sc-8466] Keep a cache of selectedIndex updated in Tribute
1662657587 [sc-8466] Expose cachedValuesToFill on Tribute
1662657587 [sc-8466] Dropdown: Use TributeValue instead of TributeItem in Tribute selection/fill code
1662657587 [sc-8466] Dropdown: Reset selectedIndex in tab state when the dropdown is opened and closed
1662657587 [sc-8466] Dropdown: Rename selectedIndex to internalSelectedIndex
1662657587 [sc-8466] Dropdown: Hitting enter closes the dropdown and propagates to the page when no item is selected
1662657587 [sc-8466] Dropdown: Hide when hitting tab on remove/show items
1662657587 [sc-8466] Dropdown: Close the dropdown upon tab key down if no item is selected
1662657587 [sc-8466] Dropdown: Add tests for filling on tab key press
1662657587 [sc-8466] Don't prevent the default tab behaviour on Google Sheets
1662657587 [sc-8466] Don't move focus on TAB for snippet's with placeholders
1662657587 [sc-8466] Create an interface for the tribute-replaced event
1662657587 [sc-8466] Cache Tribute.isActive writes in content
1662657587 [sc-8466] Add textarea and contenteditable displayDropdown custom focus action on tohodo.com
1662652927 [sc-9424] Don't initialize expander in our shadow root
1662651653 [sc-9380] server: Add test
1662651653 [sc-9380] server: Add get route, handler, model for team members
1662610341 [sc-9288] Unit tests for tribute-replaced event on different type of suggestions
1662609542 [sc-9288] Remove the unnecessary dropdown showing in autofill-form/google-sheet
1662609455 [sc-9288] Fix textSnapshot and binding issues to prevent duplicate filling
1662579123 [sc-9417] Don't use behavior:'smooth' for scrolling dropdown items into view
1662570216 [sc-9415] Remove unused graphics and icons from extension
1662570216 [sc-9415] Remove dead extension code
1662565986 [sc-9085] ext: Add trigger property to autoCreatePlaceholdersConfirmation in NotificationStorage
1662565986 [sc-9085] ext: Add custom trigger text to auto-created placeholders confirmation copy
1662564970 [sc-4832] ext: Fix window focus when clicking on other variable sources
1662518839 [sc-9274] ext: Add tracking to shortcut team/personal hover dropdown
1662516431 [sc-9094] Fix error border on Create Shortcut panel click
1662499496 [sc-9285] Avoid website sections fetch with app logic
1662498532 [sc-9388] Update tracking label names for onboarding and blog
1662497526 [sc-9128] add workspace transfers dialog ui test
1662494839 [sc-8841] ext: Add one to numFieldsFilledIn in autofill.selected-magic tracking to correct count
1662492001 [sc-9320] ext: Update panel intro to link to workspace, only show if cards not interacted with
1662490247 [sc-8435] ext: Make workspace help card
1662490247 [sc-8435] ext: Edit share panel copy and show step in panel
1662490247 [sc-8435] ext: Change shareClient to SHARE_CLIENT
1662490247 [sc-8435] ext: Add workspace help card to appropriate spots
1662490247 [sc-8435] ext: Add tracking for workspace help cards
1662490247 [sc-8435] Onboarding flags init for new and existing users
1662484986 [sc-8934] Fail CI if no test files added or modified
1662146838 [sc-9317] server: Parse \`baseUrlRegexes\` that have \`https?\`
1662146838 [sc-9317] server: Don't save website sections that don't have baseUrls or baseUrlRegexes that we cant parse
1662146838 [sc-9317] server: Add test to ensure that website sections created by older clients get base urls in the DB
1662131856 [sc-9289] Read encrypted snippets from read-write instance before migration.
1662088423 [sc-9323] panel.perf.test.ts: Wait for FAB icon to be visible
1662078055 [sc-9323] Remove unused TributeItem.string
1662078055 [sc-9323] Remove nesting in Tribute's onKeyDown
1662078055 [sc-9323] Move TributeValue to models
1662078055 [sc-9323] Correct types of filterSuggestions
1662066423 [sc-9061] Add migration to fix regex patterns in base_urls table
1662063206 [sc-9299] Rename tribute.current.collection to config
1662063206 [sc-9299] Rename TributeCollection to DropdownConfig
1662063206 [sc-9299] Drop multiple collection support in Tribute
1662047324 [sc-9292] Update disabled source ids from api in \`updateAllDataFromApiForUser\`
1662043012 [sc-9296] Quick: add an early return in seed-base-urls if baseUrlsToCreate is empty
1661894028 [sc-9284] server: Onboarding should only ask to set isTeamManager once
1661889259 [sc-9253] Apply label name in the remove mapping title
1661872649 [sc-9280] Pass knex transaction to \`BaseUrls.create
1661837964 [sc-9026] Only render <Dropdown> when it is open
1661835170 [sc-9026] Comment fix: \`dispatchSelectEvent\` and \`dispatchCloseEvent\` send to all content-scripts
1661832910 [sc-9026] Update the dropdown when Google Sheets auth. succeeds
1661831650 [sc-9026] Return false in \`shouldClearTrigger\` for \`oauthPrompt\` suggestions
1661830871 [sc-9026] Use correct interface for \`dispatchSelectEvent\`
1661830871 [sc-9026] Implement Google Auth item selection for mouse and keyboard
1661830871 [sc-9026] Clean up google auth consent component
1661830871 [sc-9026] Add missing await to selectItem
1661830871 [sc-9026] Add component for dropdown divider and header
1661828378 [sc-9249] Delete unused Tribute.inputEvent member
1661828150 [sc-9249] Cleanup Tribute class instances
1661827866 [sc-9249] Delete unused Tribute.current selectedOffset/selectedPath members
1661827476 [sc-9249] Delete unused Tribute disableArrowKeys option
1661827276 [sc-9249] Delete unused Tribute.insert* methods
1661826158 [sc-9064] ext: Rename isTeamSnippet to awaitServerSave and make required
1661826158 [sc-9064] ext: Fix: Save shortcut as team shortcut in panel
1661825989 [sc-9186] Show company name in options tab for all teams-enabled users
1661825190 [sc-9249] \`getPositionAtCaret\` synchronously in \`showMenuFor\`
1661825190 [sc-9249] Dropdown: Use box-sizing:border-box and change header item font-size
1661825190 [sc-9249] Delete unused \`Tribute.current.filteredItems\` member
1661814185 [sc-8983] Migrate base url regexes with search params and fragment to base urls
1661810697 [sc-8909] Delete stale website section data on alarm
1661810697 [sc-8909] Add HTTP Cache-control caching to website section API
1661804142 [sc-9273] Update expansion event to account for undefined \`autoCreatedPlaceholders\`
1661803207 [sc-9237] Delete mappings for placeholder during snippet upsert
1661798391 [sc-8432] Polish extension CSS
1661797288 [sc-9173] Use \`sourceIds\` or \`labeledPlaceholders\` to open placeholder dialog
1661797288 [sc-9173] Correctly count 'numTotalPlaceholders' for legacy shortcuts
1661796898 [sc-9225] Change enclosure match regex for auto-create placeholders to be more aggressive
1661782659 [sc-9076] ext: Rate App url should be different for Edge users
1661780072 [sc-9052] ext: Support expansion on Google docs.
1661587016 [sc-9018] Use array for magicUsed in extension/src/content-scripts/autofill/autofill-common.unit.test.ts
1661585826 [sc-9018] Record \`magicUsed\` in actual tab state, not in the content-script mirror/clone
1661582471 [sc-9190] Revert closing the dropdown on blur, close on tab instead
1661582339 [sc-9221] Update company workspace panel intro card
1661580250 [sc-9069] Only store relevant website sections and sources when processing domain hash
1661578379 [sc-9003] ext: Use floating-ui for dropdown flip/shift/size calculations
1661578379 [sc-9003] ext: Calculate caret height for dropdown positioning
1661573632 [sc-9209] newWorkspacesUser onboarding flag init
1661573632 [sc-9209] Check for existing user
1661570774 [sc-9153] server: Assume variablesEnabled:true in /website-sections/:domainHashPrefixHex
1661570774 [sc-8952] Switch to bit hash and b-tree index for registrable_domain_hash
1661570774 [sc-8952] Add warning for 4 or less website sections
1661566130 [sc-8971] Handle scenarios where the snippet placeholder destinations don't belong to the user (ex. sharing)
1661566130 [sc-8971] Delete mappings when deleting destination.
1661560122 [sc-9140] Close the dropdown when the top-frame navigates
1661557592 [sc-9096] Return legacy \`baseUrlRegexes\` derived from the BaseUrls model on /website-sections
1661557592 [sc-9096] Change\`website_sections\` table type to exclude \`baseUrls\`
1661557592 [sc-9096] Block /website-sections requests without an extension version
1661551790 [sc-9185] Add teamShareSelections property for snippet.save in panel
1661551684 [sc-9158] urlHasContentScripts does not account for our own workspace, rename to canSendMessage
1661551684 [sc-9158] Remove redundant code
1661551684 [sc-9158] Move canSendMessage to also run getWebsiteSectionAndSourcesForTab
1661551528 [sc-9023] Split the snippets/team snippets before sorting the result while matching text
1661551528 [sc-9023] Set isMultilineField to false for placeholder destination
1661551528 [sc-9023] Put the create shortcut option at the end of the shortcut group
1661550026 [sc-9019] Seed for fixing overlapping base url regexes in website sections table
1661550026 [sc-9019] Rename \`removeAndMigrateSources\` to \`removeAndMigrateSourcesByRegex\`
1661550026 [sc-9019] Add optional knex input to BaseUrls and Website Section model
1661550026 [sc-9019] Add helpers for removing and migrating sources and base urls by website section id
1661548474 [sc-9141] ext: Only close the sign-in tab in the replaceAuth flow
1661547431 [sc-9178] Update placeholder confirmation dialog design
1661540997 [sc-9189] UI test for clicking on dropdown banner
1661540997 [sc-9189] Prevent dropdown root container steals focus from input
1661487089 [sc-8983] Improve \`parseUrl\` to handle more url types
1661471319 [sc-9132] ext: Workspace intro panel should go back to default after clicking CTA
1661471319 [sc-9132] ext: Set view of panel to workspace intro panel onBrowserActionClick when appropriate
1661471319 [sc-9132] ext: Don't auto-open workspace intro panel
1661468326 [sc-9172] Remove unused code in background-snippets
1661452417 [sc-9151] Remove as coersion in receive shortcuts dialog to properly account for null value
1661452370 [sc-9143] close dropdown on blur
1661452370 [sc-9143] add UI tests for the dropdown
1661452370 [sc-9143] Avoid calling updateTabStatFromContent in tribute hideMenu unless necessary
1661446642 [sc-9112] Prevent click in dropdown from moving focus from input field
1661446642 [sc-9112] Move functions after dependencies
1661446642 [sc-9112] Memoize dropdown functions
1661445618 [sc-9032] server: Pass env params in onboarding
1661445236 [sc-9086] Add install stage as need of lint and test stage
1661442893 [sc-9043] Add boolean to prevent unnecessary onSubmit calls upon MagicFills
1661440303 [sc-9051] Add check for legacy snippet placeholders
1661392916 [sc-9058] Review eslint no unnecessary conditions for growth
1661392916 [sc-9058] Refactor showing gif in referral credits component
1661392916 [sc-9058] Refactor reshare collection tracking
1661392916 [sc-8854] Bump 'placeholder dialog: time to open' again perf. test threshold to reflect the switch back to using an iframe #2
1661390242 [sc-9136] Add castellodiugento.com as a validated company domain
1661388458 [sc-9054] ext: Refactor notification storage to use localStorageModify
1661384751 [sc-9092] fix global state not updating in panel
1661383081 [sc-8723] ext: Use existing variable for checking if panel is open
1661383081 [sc-8723] ext: Add workspace intro panel CSS to manifest
1661379692 [sc-9115] ext: Fix bug where autoCreatedPlaceholders is null from previous builds without placeholder autocreation
1661378042 [sc-9035] server: Flip autosuggest shortcuts for 100% of our users
1661378042 [sc-9035] server: Add all growth experiments to canPromote
1661378013 [sc-9066] server: Pass in replaceAuth into magiclink callback
1661377663 [sc-9095] ext: Fix double angle bracket bug with auto-create placeholders
1661377528 [sc-9039] ext: Remove the border around profile images
1661377395 [sc-9188] fix transfer source & destination dropdown options
1661376365 [sc-9603] ext: Refactor deleteConfirmationClosed to accept an array of shortcuts instead of ids
1661376365 [sc-9603] ext: Add autocreate placeholder tracking on ate_removeSnippet
1661367297 [sc-8723] ext: Show workspace intro view on panel when appropriate
1661367297 [sc-8723] ext: Hide footer on workspace into panel view
1661367297 [sc-8723] ext: Allow right rail to be used with JSX syntax
1661367297 [sc-8723] ext: Add workspace intro view panel
1661367297 [sc-8723] ext: Add tracking for workspace welcome panel view
1661367297 [sc-8723] ext: Add fab server method to show workspace intro view on panel
1661366300 [sc-9000] Put shortcut group ahead in dropdown for the contenteditable element or textarea
1661364905 [sc-9089] use react state instead of tab state for "needScrollToItem" variable in dropdown
1661353349 [sc-7692] Add test for JSON RPC collision
1661353349 [sc-7692] Add set of static methods to ensure no RPC collisions
1661350913 [sc-8961] Filter for placeholder specific mappings
1661313978 [sc-9059] Truncate base_urls table
1661313978 [sc-9059] Don't strip last character of  \`baseUrlRegex\`
1661306022 [sc-9060] server: Add more complicated base url regexes to \`seed-base-urls.ts\`
1661297387 [sc-8697] ext: Refactor saveSnippet to return only Snippet or null
1661297387 [sc-8697] ext: Fix bug where panel placeholder autocreate confirmation card appeared without feature flag on
1661297387 [sc-8697] ext: Add matchedText parameter to createVariableSpan
1661297387 [sc-8697] ext: Add functions to get placeholder text, removed matched strings for autocreated placeholders
1661297387 [sc-8697] ext: Add early return to save and onClickSave to avoid nesting
1661297387 [sc-8697] ext: Add autocreate placeholder tracking on snippet.save
1661297387 [sc-8697] ext: Add autocreate placeholder tracking on snippet.delete
1661297387 [sc-8697] ext: Add autocreate placeholder tracking on autofill.selected-snippet
1661297387 [sc-8697] ext: Add autocreate placeholder tracking on ate_snippetUsed
1661290857 [sc-8200] ext: Convert Tribute.js to TS
1661289426 [sc-8200] Add types to Tribute.js functions
1661289377 [sc-8200] Fix existing Tribute.d.ts types
1661287033 [sc-9044] reduce overhead of dropdown item selection with a mouse
1661285705 [sc-8746] server: Updating user through /user/ POST returns 403 instead of 500
1661285240 [sc-9045] Use the write instance for read after write consistency when creating snippets
1661285025 [Quick] Bump thresholds on some perf. tests
1661284878 [sc-9010] Don't update async tab state properties for urls that we don't inject content scripts on
1661284878 [sc-9010] Add helper function for determining if we inject content scripts on a url
1661283955 [sc-8980] use RPC instead of tab state for dropdown key events
1661283075 [sc-9041] ext: Check for variablesEnabled flag before fetching variables
1661280031 [sc-8758] server: Search by email domain when finding workspaces for a new user
1661276926 [sc-9036] ext: Include parent border and padding in portal frame height calculation
1661272580 [sc-9016] Derive and use correct mappings for dropdown in forms
1661272580 [sc-9016] Add focused dest and destURI mappings to TabState['dropdown']
1661272580 [sc-9016] Add Mapping JSON-RPC server for 'getMappingsForDestUri'
1661270507 [sc-9016] Use \`TabState\` when referencing types
1661270505 [sc-9016] Remove unused \`placeholderSourceId\` from tab state
1661270494 [sc-9016] Relax tab Mappings to allow matcher and placeholder destinations
1661225824 [sc-8948] ext: Set default selection for team toggle to personal
1661225824 [sc-8948] ext: Remove unused code related to setting default team toggle as team collection
1661218737 [sc-8516] Show auto-created placeholders notification panel help card
1661218737 [sc-8516] Show auto-created placeholders confirmation dialog
1661218737 [sc-8516] Set notification on auto-create placeholders in shortcut
1661218737 [sc-8516] Alphabetize saveSnippet function params in shortcut save
1661216212 [sc-9012] Stop responding to selectItem/closeDropdown events if the dropdown isn't open
1661216128 [sc-9012] Delete unused \`tribute-active-true\` event dispatch
1661216109 [sc-9012] Delete unused \`updateTabDropdownState\` \`frameId\` argument
1661214362 [sc-8981] Update description templates
1661213917 [sc-9006] Search through legacy sources in placeholder dialog
1661213917 [sc-9006] Open placeholder dialog for legacy shortcuts
1661213917 [sc-9006] Look at dest id in onSubmit for placeholder dialog
1661213917 [sc-9006] Fix filling variables in from placeholder dialog
1661213739 [sc-8724] Add tests for handling id and class selectors that start with numbers
1661213739 [sc-8724] Add regex to handle id and class tags that start with numbers
1661212114 [sc-8375] Log a warning instead of throwing when calling \`endPerformanceMeasure\` without a start
1661212039 [sc-9002] Bring back a listener to close the dropdown when clicking inside the content UI ShadowRoot
1661211919 [sc-9002] Bring back a listener to close the dropdown when clicking inside a subframe with the field the dropdown is open on.
1661192855 [sc-8554] ext: Efficiently fetch website sections and variables as users navigate between webpages
1661192637 [Quick] Find the proper trigger while opening the placeholder dialog
1661189887 [sc-8977] Check against distinct workspace IDs in collections in migration precheck
1661188138 [sc-8969] panel.perf.test.ts: Wait for the panel frame to be located
1661187521 [sc-8926] Replace line break characters with spaces when pasting plaintext into a single-line placeholder
1661187521 [sc-8926] Refactor out a \`replaceLineBreaksInPlainTextWithASpace\` helper
1661186568 [Quick] Fix the dropdown menu event unbind timing
1661138629 [sc-8820] Use placeholder destinations as the real placeholders now. Keep the placeholder sources but make it explicit
1661138629 [sc-8820] Join snippets with snippet_placeholders and return labeledPlaceholders.
1661138629 [sc-8820] Integrate labelId into variable picker selection (it does not persist in the body sent to the DB)
1661138629 [sc-8820] Handle the migration of a snippet to a complete placeholder destination world
1661138629 [sc-8820] Handle placeholder destinations when upserting and deleting snippets.
1661138629 [sc-8820] Handle destination and placeholder updates when saving a snippet
1661138629 [sc-8820] Add labeledPlaceholders to common snippet
1661136959 [sc-8375] Add performance measure for magicfilling in autofill sheets
1661136889 [sc-8375] Enforce separate performance marker lists for bg/content
1661136856 [sc-8375] Use performance measure helper for placeholder dialog opening
1661136856 [sc-8375] Use performance measure helper for \`variables.publishSrcMatches\`
1661136856 [sc-8375] Add performance measure for time to save variable
1661136856 [sc-8375] Add performance measure for time to save shortcut
1661136856 [sc-8375] Add performance measure for time to autofill sheets
1661136856 [sc-8375] Add performance measure for time to add variable
1661136856 [sc-8375] Add an eslint rule to suggest using *PerformanceMeasure helpers
1661136194 [sc-8375] Add timeToFill to autofill tracking
1661136194 [sc-8375] Add start and end helpers for performance measures
1661136194 [sc-8375] Add performance measure for time to autofill forms
1661057542 [sc-8569] ext: /website-sections route needs to still return LegacyWebsiteSection[]
1661056313 [sc-8569] ext: /sources/disabled route actually return an object with a \`disabledSourceIds\` property
1661041461 [sc-8758] server: Change findByEmail to findByUserId
1661041022 [sc-8959] server: Add test company to validated list for staging testing
1661034865 [sc-8779] server: Generate build before running tests
1661006267 [sc-8779] server: Send templated email when backpopulating users onto a new company workspaces
1661006267 [sc-8779] server: Add migration to back populate existing company workspaces
1661006267 [sc-8779] server: Add company workspace creation and back population handler function - add migration to create and back populate existing companies
1660964546 [sc-8779] server: Add model and handler for findByEmailDomains
1660964546 [sc-8779] server: Add knex param for company workspace migration
1660964546 [sc-8779] server: Add index on users for reverse email
1660945193 [sc-8290] optimize element src matching after page load by leveraging mutation record information
1660945193 [sc-8290] add unit test coverage for 'initVariables()' in template-source.ts
1660945193 [sc-8290] add "findElementsForMatchers" tests to selector.unit.test
1660944718 [sc-8956] ext: Change learnPlaceholdersUrl
1660944666 [sc-8903] Fix spacing on snooze panel
1660944544 [sc-8957] Fix forceShowAll variable and properly clear labelForMatch
1660936120 [sc-8569] server: Add port to \`BaseUrl\` interface
1660936120 [sc-8569] server: Add endpoint for getting disabled source ids
1660936120 [sc-8569] ext: Use disable source get instead
1660935149 [sc-8569] server: Update website section creation to create base urls
1660935149 [sc-8569] server: Update source creation to create base urls
1660935149 [sc-8569] server: Migrate base url regexes as a seed
1660935149 [sc-8569] server: Fix website section seed
1660935149 [sc-8569] server: Fix migrations and tests to use new models
1660935149 [sc-8569] server: Create \`base_urls\` table
1660935149 [sc-8569] server: Add neccesarry indicies on user sources disabled and sources
1660935149 [sc-8569] server: Add models/handlers for getting sources by website section id
1660935149 [sc-8569] server: Add endpoint for getting website sections by hash prefix and associated sources
1660935149 [sc-8569] server: Add \`BaseUrl\` interface to db schema
1660935149 [sc-8569] ext: Use new WebsiteSection model from common
1660935149 [sc-8569] common: Add hash prefix length to app config
1660935149 [sc-8569] common: Add \`BaseUrls\` interfaces and helper functions
1660933088 [sc-8953] Fix checkbox in MR description templates
1660932395 [sc-8832] Add testing checklists for MRs
1660930192 [sc-7758] Update mappings.ui.test.ts to reflect no longer auto-highlighting the first row in the dropdown
1660930192 [sc-7758] Update keyboard event handling and scroll behavior
1660930192 [sc-7758] Move google auth tracking into its own component
1660930192 [sc-7758] Increase 'keydown to end of key handling after tribute is attached' allowance
1660930192 [sc-7758] Hide the dropdown while page scrolling
1660930192 [sc-7758] Fix dropdown position calculation and test coordinates
1660930192 [sc-7758] Fix create snippet suggestion issues
1660930192 [sc-7758] Delete unused \`snippetVariableSelected\` method
1660930192 [sc-7758] Delete unused \`snippetVariableRemoved\` method and related code
1660930192 [sc-7758] Delete unused \`snippetEditingDone\` method andsnippetEditingStates
1660930192 [sc-7758] Decrease \`srcPagesForOpenTabsSrcMatchesUpdateIntervalMs\` to 2s since the dropdown uses it.
1660930192 [sc-7758] Apply current collection properties to get the correct info
1660930192 [sc-7758] Add an eslint rule to encourage use of our \`executeAsyncScript\` helper over driver.execute[Async]Script
1660926265 [sc-7758] Update the dropdown UI components and clean up the outdated css
1660926265 [sc-7758] Fix the failed unit tests
1660926265 [sc-7758] Fix finding the dropdown in position tests
1660926265 [sc-7758] Don't render empty dropdown groups
1660926260 [sc-7758] Refactor the tribute and autofill content/background for new dropdown
1660926198 [sc-7758] Update autofill related models for the dropdown
1660926198 [sc-7758] Prototype dropdown state in TabState with React in content-ui
1660924106 [sc-7392] DB Migration + Models for snippet_placeholders
1660924106 [sc-7392] Change references of site agnostic variables to labeled placeholders
1660921699 [sc-8915] Initialize forms in placeholder dialog for GSheets
1660858866 [sc-8772] server: Update workspace handler to create new company workspace for the validated company list - Call createOrAddToCompanyWorkspace function on new user registration
1660858866 [sc-8772] server: Update user-collections and user-workspaces create to accept an array of user ids - This will be used for back populating existing users into workspaces and collections
1660858866 [sc-8772] server: Introduce helper functions for getting list of validated companies - One function will return a validated list for new company workspace creation, which slices a percentage of the entire validated list - Another helper function for returning a copy of the full validated list - Update  workspace team member route to use new validated company helper function
1660857830 [sc-8355] ext: Add function to split and insert variable spans in text nodes
1660857830 [sc-8355] ext: Add function to replace placeholders in a node with variables
1660857830 [sc-8355] ext: Add function to match variables from placeholder regex matches
1660857830 [sc-8355] ext: Add function to get non-empty child text nodes from root node
1660857830 [sc-8355] Refactor show variable suggestion
1660857830 [sc-8355] Refactor saveSnippet to add variable autocreation
1660857830 [sc-8355] Refactor params in saveSnippet
1660857830 [sc-8355] Add feature flag for autoCreateVariables
1660857830 [sc-8355] Add config for autocreatevariables
1660855639 [sc-8869] Ensure all placeholder MagicFills close if all fields are magic filled
1660842931 [sc-8839] ui-tests README: --env must precede the container name
1660778227 [sc-8906] Limit times variable highlighter looks for variables to just when variable highlighter is open
1660776810 [sc-8698] Refactor variable autosuggest tracking
1660767306 [sc-8698] Resolve eslint automatic disables
1660765451 [sc-8696] ext: Change Dialog to only use artificial modal CSS if artificial modal behavior is enabled
1660763508 [sc-8891] server: Ensure userSourceLabelsToSaveForSources does not return user ids
1660718567 [sc-5888] Support omnibox expansion
1660716158 [sc-8901] Fix close button spacing on support card
1660687673 [sc-8888] Disable no-cycle violations
1660687631 [sc-8888] Enable import/no-cycle in the extension
1660680300 [sc-7897] Use the correct website section id in tests
1660680300 [sc-7897] Update transfers to use source id to website section map
1660680300 [sc-7897] Rename "sink" to "destination"
1660680300 [sc-7897] Remove remaining Mapping.srcWebsiteSectionId references
1660680300 [sc-7897] Find mapping source using open tabs
1660680300 [sc-7897] Don't return sources from \`getMappingsForDestUri\`
1660678983 [sc-8787] Use section ids to determine mapped variables instead of urls
1660678983 [sc-8787] Rename "update" to "set" for API update fn names
1660678983 [sc-8787] Remove unnecessary \`find\` helper
1660678983 [sc-8787] Remove special case for sheets/forms
1660678983 [sc-8787] Remove deprecated srcUrl from Mapping interface
1660622533 [sc-8873] Remove the dropdown UI shadow host from its ancestor document when the associated frame document is destroyed.
1660603274 [sc-8854] Bump 'placeholder dialog: time to open' again perf. test threshold to reflect the switch back to using an <iframe>
1660602325 [sc-8854] Bump 'placeholder dialog: time to open' perf. test threshold to reflect the switch back to using an <iframe>
1660600984 [sc-8854] Revert "[sc-8619] 'magicFillValues' message should reach into the placeholder dialog shadow DOM to MagicFill"
1660600856 [sc-8854] Revert "[sc-8074] Cut off ~250ms by using a normal dialog instead of content dialog"
1660600856 [sc-8854] Fix typo referencing but not calling \`preventDefault on \`COMPOSED_EVENT_NAMES\` in <ShadowWrapper>
1660594399 [sc-8264] Cancel button text changed to 'Discard' when new shortcut
1660594399 [sc-8264] Add share to teams in panel
1660594399 [sc-8264] Add css styling to button container
1660592008 [sc-8860] server: Bump eb deploy timeout to 30 mins
1660396670 [sc-8849] server: Remove extension version check in signUpDetailsSplitEnabled FF
1660333171 [sc-8061] Ensure selections are preserved during filtering or search
1660333171 [sc-8061] Add shortcut count when filter or search occurs
1660331200 [sc-7153] Add test for 'create new' option in dropdown
1660327863 [sc-7153] Show 'No results found' screen
1660327863 [sc-7153] Create new button of dropdown always is last regardless of filtering
1660327863 [sc-7153] Added tracking for clicking on create new in the dropdown
1660321999 [sc-8831] server: Create onboarding.js static script to call updateUserData or updateUser depending on query param
1660320762 [sc-8831] server: remove unused keepUpdatingUserDataUntilUpdated function
1660320762 [sc-8831] server: Refactor withSearchParam() to accept additionalQueryParams
1660320762 [sc-8831] server: Re-enable split signup feature flag
1660320762 [sc-8831] server: Pass query param into the first onboarding page
1660320762 [sc-8831] server: Create onboarding.js static script to call updateUserData or updateUser depending on query param
1660320762 [sc-8831] server: Change signup-details to user-details
1660320762 [sc-8831] server: Alphabetize exported function list in head.js
1660273155 [sc-8844] server: Add in the inviters name and referral code into shareApp email template
1660267375 [sc-8831] server: Don't update with empty profile updates within upsertAuthn()
1660255962 [sc-8839] Update ui test README to include instructions for running perf tests
1660255959 [sc-8839] Log linkedin perf test metrics one time
1660244551 [sc-8024] ext: Record a performance marker when the FAB is clicked to open the panel
1660244551 [sc-8024] ext: Move linkedin variable fixture data to its own file
1660244551 [sc-8024] ext: Measure the time from FAB click to the panel's first contentful paint (FCP)
1660244551 [sc-8024] ext: Include \`min\` and \`max\` from \`aggregateMeasurementsByKey\`
1660244551 [sc-8024] ext: Expose updateTabStateFromContent in testing-content-helpers
1660244551 [sc-8024] ext: Allow access to the CONTENT_UI_ROOT shadow DOM in tests.
1660244551 [sc-8024] ext: Add a test helper to get the content UI shadow root
1660244551 [sc-8024] Upgrade mitmproxy to 8.1.1
1660244551 [sc-8024] Improve logging for linkedin.perf.test.ts
1660242261 [sc-7352] server: Don't add users to TEXT_VARIABLE probeta cohort on snippet save
1660231182 [sc-8775] ext: Only show right rail footer if user is signed in
1660228932 [sc-8829] server: Send shareApp email in sendEmail flow
1660227578 [sc-7584] ext: Add tracking for snippet length when saving
1660196098 [sc-8828] server: Update to correct JSDoc syntax
1660196098 [sc-8828] server: Refactor head.js to use dispatchCancelableEventPromise where possible
1660196098 [sc-8828] server: Create a helper  to update only the user data within the extension from webflow
1660196098 [sc-8828] server: Create a function to dispatch events as a promise
1660196098 [sc-8828] ext: Remove unused functions in UserApi
1660196098 [sc-8828] ext: Expose an API in website events to update only the user data within the extension
1660196098 [sc-8828] ext: Expose an API in website events to update all app data
1660193819 [sc-8830] restoreAuthCookie: Remove a leading period from the cookie domain to build the URL
1660149247 [sc-8818] server: Manual @typescript-eslint/no-unnecessary-condition fixes/disables
1660149247 [sc-8818] ext: Auto-disable @typescript-eslint/no-unnecessary-condition on violating lines
1660140511 [sc-8818] ext: Assorted manual @typescript-eslint/no-unnecessary-condition fixes/disables
1660140511 [sc-8818] Enable @typescript-eslint/no-unnecessary-condition rule
1660131940 [sc-8518] Show dropdown with correct collection and active state
1660108479 [sc-8819] server: Temporarily disable \`signUpDetailsSplitEnabled\` due ext. perf. issues
1660108310 [sc-8819] server: Correctly destructure \`signUpDetailsSplitEnabled\` so we don't always treat the experiment as enabled.
1660101732 [sc-8788] Check \`excludeMatches\` length instead of truthiness in \`registerContentScript\`
1660075961 [sc-8804] Change user details to signup details
1660075950 [sc-8804] Update user data and return extensionHandled for website events
1660074141 [sc-8768] ext: Stop rendering the Insert Variable Shortcut Help Card
1660074141 [sc-8768] ext: Remove tracking for help card
1660074141 [sc-8768] ext: Delete the insert variable shortcut help card
1660066224 [sc-8783] server: Remove alternateEmails from the UserInfo object
1660061419 [sc-8784] server: Remove sample validated companies
1660061419 [sc-8784] server: Remove call to auto create workspaces for newly registered users - this will be added back in later when ready for use but we want to unblock deploying develop
1660060717 [sc-8648] server: Tests for findByUserId
1660060713 [sc-8648] server: Create findByUserId to get the user's workspaces' info
1660056886 [sc-5669] Add server caching job
1660056886 [sc-5669] Add server build stage which uses caching job
1660056886 [sc-5669] Add 'extension' prefix to existing cache jobs
1660056011 [sc-7932] server: Add route to get team members for corporate teams
1660055902 [sc-7932] server: Create findUsersByWorkspaceId to find team members in the same workspace
1660055894 [sc-7932] server: Create WorkspaceUser interface for known corporate email users
1660054556 [sc-7932] server: Send multiple invite emails at once to new potential users
1659998278 [sc-8780] Add missing \`await\` when saving user to local storage
1659972782 Quick: [sc-8645] Adopt surrounding color scheme for teams icons
1659971871 [sc-8647] server: Auto create workspace and collection for net new company user
1659971871 [sc-8647] server: Add snippet-collections find by workspace id
1659971871 [sc-8647] Add list of validated companies and domains for workspace creation
1659905194 [sc-8744] Make onboarding object check optional for webflow
1659794819 [8739] server: Remove older version emails which will save a user query
1659747909 [sc-8659] Send 50% of signups to the user details
1659737518 [sc-8740] server: Use reqUser to get snippet collections for a user
1659732470 [sc-8734] server: Return distinct labels when finding default labels for a user
1659709739 [sc-8283] ext: Show existing banner in different location
1659709739 [sc-8283] ext: Change  existing offline banner
1659709739 [sc-8283] ext: Add offline banner into panel
1659666210 [sc-8010] ext: Rename variable since not all targets are input elements
1659666210 [sc-8010] ext: Only use the test description in filenames to prevent ENAMETOO long error
1659666210 [sc-8010] ext: Move window resizing outside of the test loop
1659666210 [sc-8010] ext: Extend dropdown position tests to include common editors
1659665776 [sc-4550] ext: Variable labels should not push the Options button out of view
1659644781 [sc-8718] Fix updating sources to save correctly in local storage
1659634603 [sc-7591] Update localStorageChanges to account for old/new object
1659632202 [sc-7591] Add old/new value to storage "initial" inner observable
1659632202 [sc-7591] Add new/old value to storage "updates" inner observable
1659624704 [sc-8685] Change findByUserId from knex to knexReadOnly
1659588362 [sc-8604] Fix snippet.save to accurately record the number of placeholders
1659588351 [sc-8604] Deprecate several num* fill event properties
1659578125 [sc-8713] Use new tabs for placeholder dialog perf tests
1659574505 [sc-8713] Implement Escape to close non-modal \`<Dialog>\`
1659572523 [sc-8708] Share the single Tribute instance per document
1659559302 [sc-8710] Fix: dropdown doesn't close after deleting //
1659556464 [sc-8686] server: Changed route name to 'workspaces" instead of "organizations"
1659556464 [sc-8686] server: Change teams file to workspace file
1659540535 [sc-8699] ext: Change share shortcut CTA
1659539416 [sc-8613] server: Rename UserCollections interface to UserCollection
1659539416 [sc-8613] server: Add user-workspaces create handler and model
1659539416 [sc-8613] server: Add user-collections and user-workspaces handler test files
1659539416 [sc-8613] server: Add user-collection model and handler - Add create function to model and handler
1659524708 [sc-8682] Close autosuggest on back, save and cancel of shortcut
1659496818 [sc-8614] Add return value to keyupAndInputHelper to avoid unintentional menu triggers
1659495320 [sc-8693] server: Autosuggest shortcuts on for 50% of all users
1659493885 [sc-8695] ate-dropdown-position.ui.test.ts: Update some coordinates for Ubuntu 22.04
1659487450 [sc-8030] Upgrade preact to 10.5.15
1659458840 [sc-8660] ext: Update Dockerfile Ubuntu image to 22.04
1659458840 [sc-8660] ext: Add some more details to the Docker instructions
1659451521 [sc-8592] Add got it CTA to bottom of panel help cards
1659111996 [sc-8019] server: Introduced replaceAuth flow for all auth methods
1659111996 [sc-8019] server: Added a delete function and findAuthnByEmail for oauth table
1659104858 [sc-8019] server: Create alternateEmails property for previous emails of the user
1659104858 [sc-8019] ext: Set feature flag requestWorkEmailDialogEnabled to 50%
1659104858 [sc-8019] ext: Rotate the HandWithLightbulb
1659104854 [sc-8019] ext: Introduce RequestWorkEmailDialog - opens once if user has a Gmail account
1659104819 [sc-8019] server: Introduced switchEmailPromptTimeIntervalSeconds to allow the time interval to be changed on the server
1659104819 [sc-8019] ext: Introduced new feature flag requestWorkEmailDialogEnabled
1659104819 [sc-8019] ext: Alphabetize dialog slice
1659103815 [sc-8492] Fix styling on pro beta upgrade update dialog
1659042757 [sc-8535] Fix definition of TTI to use FCP instead of first paint
1659042757 [sc-8535] Don't assume there will be a longtask observation after running \`gatherLabWebVitals\`
1659042189 [sc-8576] ext: Ensure accept shortcuts or transfer dialog are not left open
1659042132 [sc-8530] Removed variable.picker.app.click tracker
1659037761 [sc-4119] ext: Delete leftover code to tell a user to open a source page if their shortcut had variables but the page was closed
1659037286 [sc-8513] Change the return type of findAuthnByEmail back to a single user
1659036043 [sc-8351] Prevent magicGoogleSheetAutofill call when there are no values to autofill
1659035303 [sc-8612] Bump publishSrcMatches threshold to 14ms
1659033975 [sc-8619] 'magicFillValues' message should reach into the placeholder dialog shadow DOM to MagicFill
1659033937 [sc-8619] Have \`querySelectorArray\` parameters mirror those of \`querySelectorAllArray\`
1659027463 [sc-8513] server: Default of imageUrl is changed to null
1659027194 [sc-8513] server: Update based new auth profile image
1659027194 [sc-8513] server: Moved findAuthnByEmail to users
1659025401 [sc-8612] ext: Move IN_AUTOMATION flag to src/utils.ts
1659025401 [sc-8612] ext: Measure \`publishSrcMatches\` durations in automation
1659025401 [sc-8612] Use \`querySelector\` instead of \`querySelectorAll\` for the last index in the css rules arrays in \`querySelectorAllArray\` with limit:1
1659025401 [sc-8612] Don't create temp. arrays of NodeList in \`querySelectorAllArray\`
1659025401 [sc-8612] Add another testcase ensuring \`querySelectorArray\` find elements that are nested under a shadow host that's not the first match of the first selector
1659021893 [sc-8477] Add user workspaces join table
1658955793 [sc-8344] ext: Throttle \`srcPagesForOpenTabs\` more aggressively for srcMatch-only changes.
1658947254 [sc-8445] server: Update teams seed to use new workspaces table and populate default collection
1658947254 [sc-8445] server: Rename teams table to workspaces
1658947254 [sc-8445] server: Rename team_id to workspace_id - update snippet collections metadata model to use workspaceId instead of teamId - deprecate teamId but keep both for backwards compatability
1658854082 [sc-8529] Exclude [data-com.bitwarden.browser.user-edited] from CSS matchers
1658812797 [sc-8532] server: Fix website-section-utils functions that use \`knex\` instead of \`k\` arguments
1658812797 [sc-8532] server: Fix unused function arguments
1658812797 [sc-8532] ext: Fix unused function arguments
1658812797 [sc-8532] eslint: Fix new errors from typescript-eslint@5.31.0
1658812797 [sc-8532] eslint: Enforce @typescript-eslint/no-unused-vars on args
1658812797 [sc-8532] Upgrade typescript-eslint to v5.31.0
1658812797 [sc-8532] Upgrade typescript to v4.7.4 to match modules
1658812789 [sc-8532] Remove unused \`setDropdownView\` JSON-RPC method
1658812772 [sc-8532] Remove unused \`tribute\` argument to \`processAutoTextExpansion\`
1658803025 Create \`user_collections\` join table
1658778472 [sc-8484] Ensure the dropdown shadow host stays as the last sibling
1658773701 [sc-8257] increase reliability of stylesheet loading tracking
1658773701 [sc-8257] Added working teams dropdown to snippet in workspace onhover
1658767982 [sc-8485] Only show trigger help on shortcuts after typing
1658766262 [sc-7751] Optimistically assume variables save, don't block on server response
1658761978 [sc-8503] Turn referralCreditsProBetaSequenceEnabled on for can promote users
1658528001 [sc-8357] Don't call \`'removeSource'\` on variable label dialog cancel
1658517597 [sc-8483] ext: Add allowClose to checklistDialog
1658516821 [sc-8483] ext: Refactor checklistDialogExpandedItem to a checklistDialog object
1658501831 [sc-8254] Moved bulk share out of share menu and added to new button in bulk actions menu
1658501831 [sc-8254] Changed share dropdown to simple button to reduce clicks, see Mike's ticket [sc-6363] for dropdown if needed to be reinstated
1658477365 [sc-8469] Prevent the default newline behaviour of Enter when submitting the placeholder dialog
1658472369 [sc-8437] Turn off options promo banner
1658472323 [sc-8443] remove margin from button in variable picker
1658472243 [sc-8433] Edit time saved footer copy when no time saved
1658471061 [sc-8442] ext: Ensure Redux isn't accidentally loaded in the background
1658471061 [sc-8442] ext: Deep clone the initial state of the Redux 'global' slice
1658470830 [sc-8442] ext: Don't import Redux from checklist-common as it's used by background scripts
1658470732 [sc-8442] ext: Change DEFAULT_FEATURE_FLAGS to a function
1658460472 [sc-8261] reduce data leakage via events for our closed shadow doms
1658460472 [sc-8261] add unit tests for content-ui-nodes
1658436285 [sc-7819] Support preemptive creation of website sections
1658425630 [sc-8440] ext: Fix inconsistent return type on \`getOrCreateDropdownShadowRoot\`
1658421911 [sc-8163] ext: Display the profile image in the nav bar
1658421896 [sc-8163] server: Introduced image url property of the userInfo object
1658420195 [sc-8163] server: Migration to add profile image column to users table
1658389908 [sc-8379] Throttle variable querying more aggressively in inactive tabs
1658386279 [sc-8311] ext: Move exported content-ui functions to their own file to break import cycles
1658386214 [sc-8311] use artificial "modal" type behavior in placeholder dialog
1658386209 [sc-8311] detect inputs in placeholder dialog shadow root
1658385405 [sc-8074] Cut off ~250ms by using a normal dialog instead of content dialog
1658376619 [sc-8030] upgrade tslog so that it doesn't crash when used
1658375127 [sc-7696] server: Revert /oauth/google/callback error handling to before 2c982943 so an error is actually returned
1658374880 [sc-8425] ext: Track label info with variable fill events
1658374146 [sc-8406] If a non-list variable is still matching on the page after a mutation, don't try to find new matches for it
1658370416 [sc-7397] ext: Test that an ID selector with a numeric prefix is correctly generated
1658369562 [sc-7397] ext: Upgrade css-selector-generator to v3.6.2
1658350315 [sc-8252] Quick: Changed teams and personal icons
1658348765 [sc-8424] ext: Unmount shortcut row edit controls when not in edit mode - this fixes an issue with the teams dropdown shadow wrapper state not being reset and therefore the dropdown not showing up on re-renders
1658348765 [sc-8424] ext: Remove old reference to button.css - This was causing an issue of the variable picker intermittently not displaying
1658333755 [sc-8420] Reduce duplication in code and broadcasts defining global state
1658332732 [sc-8342] Prevent content UI rendering while in subframe
1658327385 [sc-8353] server: Prevent page impression tracking on webflow via meta tag
1658271738 [sc-8407] Always insert variable shortcut from placeholder dialog on user insert
1658269408 [sc-7764] Update \`setSources\` to not clobber existing sources/website sections in local storage
1658269408 [sc-7764] Move \`PERF_DEFAULT_SNIPPETS\` to \`storage-utils.ts\`
1658269408 [sc-7764] Add sources/labels to local storage for linkedin perf test
1658267078 [sc-8393] ext: Remove unused \`baseUrlRegex\`property in \`WebsiteSectionRegexMatch\`
1658267078 [sc-8393] ext: Cache baseUrlRegexToWebsiteSectionId with actual \`RegExp\` keys
1658267078 [sc-8393] Use \`localStorageModify\` to update \`baseUrlRegexToWebsiteSectionId\` in \`saveSourcesToServer\`
1658267078 [sc-8393] Use \`cachedBaseUrlRegexToWebsiteSectionIdPromise\` instead of \`baseUrlRegexToWebsiteSectionId\`
1658267020 [sc-8393] ext: Install p-lazy package for lazy promises
1658254731 [sc-8372] Turn off social share enabled
1658248621 [sc-7845] Update user data without blocking in install flow
1658248621 [sc-7845] Update config and teams without blocking the install flow
1658248621 [sc-7845] Prevent \`syncSnippets\` exceptions blocking data update
1658248621 [sc-7845] Allow updateAllData to optional accept feature flags
1658179627 [sc-8364] Await server response for saving shared shortcuts before tagging
1658166277 [sc-8127] Include CI path when using bump and tag script
1658159068 [sc-8293] Add mobile popup close functionality
1658149510 [sc-8201] server: Set referrer to cookie on getmagical.com
1658149510 [sc-8201] server: Pass referrer cookie as utm_source param to CWS install page in navToStore()
1657979689 [sc-8201] server: Update navToStore() to handle query params using searchParams.set()
1657937087 [sc-8363] server: Add LI Messaging and Airtable to \`BASE_URLS_PRIVATE_BY_DEFAULT\`
1657920869 [sc-8373] ext: Allow mappings to shortcut placeholder contenteditable fields
1657907620 [sc-8365] server: Flip autosuggest shortcuts in panel to 100%
1657900725 [sc-6360] Remove usage of ATTRIBUTE_ALLOW_ORDERED_LIST for optimal-select of attribute CSS matchers
1657900419 [sc-5468] server: Remove uninstall and onboarding \`initialApp\` branches
1657900419 [sc-5468] server: Remove references to initialApp:ATE in tests
1657895974 [sc-8363] server: Add Notion and Figma to \`BASE_URLS_PRIVATE_BY_DEFAULT\`
1657895819 [sc-8363] config: Increase \`mutationObserverIntervalMs\` and \`srcPagesForOpenTabsUpdateIntervalMs\` to 2s
1657857213 [sc-2998] Consider area above and below target when positioning dropdown
1657832865 [sc-8259] Set cookie for extension installed
1657830366 [sc-8324] Sort shortcuts at the bottom for the dropdown for placeholder destinations
1657828579 [sc-8353] server: Don't track  to amplitude when page is a banner
1657824402 [sc-8352] fix the build by fixing a broken reference in a CSS import
1657817081 [sc-7389] remove \`variable-picker-tab.tsx\`, move its contents to \`variable-picker.tsx\` - Also remove \`variable-picker-tab.css\`, move its contents to \`variable-picker.css\`
1657817081 [sc-7389] create variable variable-pill component, use it in variable picker
1657817081 [sc-7389] change variable picker search functionality
1657817081 [sc-7389] add some design system component folder, add button component, add text component
1657774076 [sc-6442] Suppport multi-line editing of shortcut placeholders
1657774076 [sc-6442] Set richtext for the snippet body if source value is from placeholder
1657774076 [sc-6442] Refine the variable naming of "fields" in the placeHolder dialog code
1657774075 [sc-6442] Fix initial dropdown position for contenteditable target
1657774071 [sc-6442] Replace the inputs in placeholder dialog with contenteditable element
1657771742 Revert "[sc-8074] Cut off ~250ms by using a normal dialog instead of content dialog"
1657745195 [sc-7686] Use defaultSourceLabel if userSourceLabel isn't available
1657745195 [sc-7686] Test that correct user is passed in when retrieving userSourceLabels
1657745195 [sc-7686] Remove unused findUserSourceLabelsBySourceIds
1657745195 [sc-7686] Add userId check when getting userSourceLabels by sources
1657732747 [sc-8260] Deprecate share first shortcut
1657732747 [sc-8260] Deprecate autosuggest variables
1657730584 [sc-8164] Create referral credits top right button
1657730561 [sc-8164] Add referral credits promo feature flags
1657730561 [s-8164] Create referral credits promo footer
1657724639 [sc-8168] Check for invalid CSG selectors in csgDenyListCallback
1657690509 [sc-8074] add performance tests to placeholder dialog
1657690509 [sc-8074] Cut off ~250ms by using a normal dialog instead of content dialog
1657650369 [sc-8227] Use \`isObjectInstanceOfDOMGlobal\` to do proper \`instanceof\` check
1657650369 [sc-8227] Remove unused \`TributeEvent.inputEvent\`
1657650369 [sc-8227] Add helper for common logic in \`keyup\` and \`input\`
1657643231 [sc-7655] ext: Added in functionality for share shortcuts in panel
1657643201 [sc-7655] ext: Change the background color to red for delete shortcut
1657643080 [sc-7655] ext: Added a new pendingShareSnippetId for sharing shortcuts in panel
1657638185 [sc-8269] Revert "[Snyk] Security upgrade passport from 0.4.1 to 0.6.0"
1657547492 [sc-5354] Standardize state selectors in extension
1657298840 [sc-7474] Add vertical margin between dropdown and caret
1657295422 [sc-7474] Refine the variable naming for dropdown position calculation
1657290895 [sc-7474] Update dropdown position UI tests
1657288250 [sc-7474] Adjust the dropdown position by get and set correctly style value
1657258307 [Snyk] Security upgrade moment from 2.29.2 to 2.29.4 fix: extension/package.json & extension/package-lock.json to reduce vulnerabilities
1657230923 [sc-8085] Set \`placeholdersMagicFilled\` to true after doing a magic fill in a placeholder
1657230923 [sc-8085] Check that all placeholders have content when submitting from content
1657230923 [sc-8085] Add \`placeholdersMagicFilled\` to placeholder dialog props
1657229870 [sc-7992] Remove dependency on numbers returned from postgres queries
1657229870 [sc-7992] Move \`saveNewSourceWithLabel\` to own function (out of json rpc method) Also only add url source to \`srcMatchesToSave\` if its new or reenabled and save placeholders and user source labels for reenabled sources (not just new)
1657229870 [sc-7992] Add unit tests for \`saveNewSourceWithLabel\`
1657228777 [sc-8122] set forceShowAll to false after mappings are removed
1657226906 [sc-7412] Add delay to whatsapp contenteditable fill strategy
1657220092 [sc-8172] ext: Add back syncTeamSnippets background method that was accidentally removed in commit b51d5906dd47db693f57d0a7e941f757dd4ac2de
1657217844 [sc-1960] Adjust height of dropdown based on window/frame size
1657216298 [sc-8196] ext: Convert TributeMenuEvents.js to TS
1657215518 [sc-8197] ext: Convert TributeEvent.js to TS
1657213190 [sc-8108] sort the workspace shortcuts by most recently used also refactor how shortcuts are rendered to improve readability and runtime efficiency
1657212721 [sc-7883] Improve NetCredit website sections
1657212721 [sc-7883] Create helper functions for inserting and updating website sections
1657212721 [sc-7883] Allow updateSourcesWithLatestWebsiteSectionMatch to accept websiteSections as a parameter
1657212248 [sc-8015] Added webflow frontend
1657212248 [sc-8015] Added new route for /organization - Added POST route for organization insert - Added related handler and model functions
1657210809 [sc-8180] Apply onClickCreateNew in google sheet autofill to update correct state
1657210502 [sc-8178] Fix tracking on variables insert help cards
1657209816 [sc-8207] Fix TS error on running scripts from server
1656543218 [sc-8119] focus trigger input on shortcut creation
1656543218 [sc-8119] Set minimum height for shortcut body
1656542057 [Snyk] Security upgrade passport from 0.4.1 to 0.6.0 fix: server/package.json & server/package-lock.json to reduce vulnerabilities
1656539696 [sc-8106] Wait for storage sets in \`updateAllSourcesFromAPI\`
1656539696 [sc-8106] Use \`localStorageModify\` for atomic reads+writes in managers
1656539696 [sc-8106] Add auto-mock for storage helpers
1656539347 [sc-8106] Add \`localStorageModify\` helper
1656537441 [sc-8106] server: Update typescript and ts-node to latest
1656537441 [sc-8106] server: Fix lint errors with typescript upgrade
1656537441 [sc-8106] ext: Update typescript and ts-node to latest
1656537441 [sc-8106] ext: Fix lint errors with typescript upgrade
1656537441 [sc-8106] Add locks to storage get/set/remove
1656532856 [sc-7985] Show signup prompt on autosuggest
1656532856 [sc-7985] Show default page on panel if not signed up
1656532856 [sc-7985] Create signup prompt
1656532856 [sc-7985] Clean up autosuggest variables and shortcuts code
1656531194 [sc-8173] Check if snippetCollectionItems is empty instead of ownedToAdd
1656526746 [sc-8190] Break after finding one matching matcher in \`findMatcherMappingsForDestination\`
1656525448 [sc-8090] Change colors of shortcut rows in workspace
1656521128 [sc-8171] Deprecate placeholdersEnabled in the extension
1656521128 [sc-8171] Deprecate fabPanelEnabled in extension
1656518621 [sc-7623] add loading state for shortcuts after login
1656515295 [sc-8179] Deprecate popular sites variable help
1656514532 [sc-8150] Update variable suggestion help copy
1656509796 [sc-8126] server: Update getFeatureFlagsForRequest to take in optional list of teams for the user
1656509796 [sc-8126] server: Pass team ids in snippet-collection handler functions
1656496451 [sc-8007] Replace magical data attribute with weakset for attached element and apply new attribute for inputs in magical
1656496451 [sc-8007] Remove tribute attribute
1656496451 [sc-8007] Apply dropdown prevention to the magical input and textarea
1656496451 [sc-8007] Add magical attribute in dropdown prevention for elements from webflow
1656425960 [sc-5940] Handle all OAuthAccounts unique constraints
1656368163 [sc-8141] When aggregating matchers sort matchers by most recently created
1656368163 [sc-8141] Make output alias optional in \`sql_to_aggreagate_row_to_array\` and use in finding mappings
1656368163 [sc-8141] Add test for matcher sorting
1656362296 [sc-1857] Move focusOpenTab into BrowserApi JSON-RPC server
1656358874 [sc-7968] server: Export table names for website sections and recent website sections
1656358874 [sc-7968] server: Export recent website section table name
1656358874 [sc-7968] server: Add new migration to remove incorrect JustEat Takeaway website sections
1656358874 [sc-7968] server: Add knex param to WebsiteSections.findByRegexes to be used in migrations
1656339759 [sc-5965] server: Save user profile picture in the oauth_accounts table
1656339759 [sc-5965] server: Migration to add new column into oauth table
1656339759 [sc-5965] server: Introduce new param imageUrl for profile picture
1656339759 [sc-5965] server: Get the picture url from OAuth2
1656339759 [sc-5965] server: Get the picture url from GAuth
1656104354 [sc-8087] Move onClickCreateNew to autofill-common and add linting rule for autofill-google-sheets.ts <> autofill-forms.ts imports
1656104354 [sc-8087] Add linting so nothing can be imported from autofill-forms.ts to autofill-google-sheets.ts or vice versa
1656104354 [sc-8087] Add keydown event handler for pressing enter to Create new shortcut
1656104354 Revert "[sc-7451] Add event listener for create-new-shortcut to autofill-google-sheets.ts"
1656102731 [sc-4070] options-page.perf: Use aggregateMeasurementsByKey and gatherLabWebVitals
1656102731 [sc-4070] options-page.perf: Record fcp and tbt web vitals
1656102731 [sc-4070] linkedin.perf: Record fcp and tbt web vitals
1656102731 [sc-4070] ext: Add a helper to measure some "lab" "web vitals"
1656102731 [sc-4070] ext: Add a helper to aggregate performance measurements
1656085997 [sc-8082] Invalidate placeholder \`useRequest\` cache with \`localStorageChanges\` for placeholders
1656023713 [sc-7398] ext: Show popular sites in guided transfers
1656023713 [sc-7398] ext: Add transfer popular sites to config
1656018726 [sc-8078] server: Update MAGICAL_CHROME_STORE_LINK
1656017305 [sc-7706] ext: Use variables for header font sizes
1656017305 [sc-7706] ext: Round one-off font-sizes to their closest variable font-size
1656017305 [sc-7706] ext: Round fractional em and rem font-sizes to closest variable font-size
1656017305 [sc-7706] ext: Fix incorrect gray-80 variable reference
1656017305 [sc-7706] ext: Convert cascaded em font-size to variable
1656017305 [sc-7706] ext: Convert all font-sizes to CSS variables
1656017305 [sc-7706] ext: Convert 1:1 rem sizes to variable font-sizes
1656017305 [sc-7706] ext: Convert 1:1 em size to variable
1656015002 [sc-8101] Show 'unlabeled variable' if source is not in extension
1656014999 [sc-8101] Add const for 'Unlabeled Variable'
1656004519 [sc-7680] Test transfer recommendation URLs are valid
1656000119 [sc-7451] Add event listener for create-new-shortcut to autofill-google-sheets.ts
1655938477 [sc-8054] ext: Return early from selectedSnippet when a team snippet is used
1655938442 [sc-7907] ext: Track email domain to amplitude as a user property
1655935047 [sc-8027] Await server response when saving team snippets
1655927714 [sc-7702] Update variable list count in panel to match visible variables
1655922452 [sc-6412] Add empty ownedToAdd collections check to SnippetCollections insert
1655921315 [sc-8042] ext: Fixed the formatting for the autosuggest shortcuts text
1655873634 [sc-8011] typo fix: directory => directly
1655873634 [sc-8011] setAcceptInsecureCerts:true for UI tests to trust mitmproxy
1655873634 [sc-8011] install and run mitmproxy in the selenium-test-ui docker image
1655873634 [sc-8011] Use mitmproxy in webdriver proxy settings
1655873634 [sc-8011] Provide a better build error when there is no version tag found in the clone
1655873634 [sc-8011] Move console message filtering helpers to performance-utils
1655873634 [sc-8011] Move BETA_USER_FEATURE_FLAGS to common/ so it can be used in tests
1655873634 [sc-8011] Measure the time-to-interactive on a public LinkedIn profile
1655873634 [sc-8011] Default chromedriver service only needs to be set once and support tests without an extension
1655873634 [sc-8011] Always include the Magical-Test/1.0 UA string for UI tests
1655873634 [sc-8011] Add a script to start the tests_mitmproxy docker container for local testing
1655873634 [sc-8011] Add a mitmproxy Docker image entrypoint script
1655873634 [sc-8011] Add LinkedIn public user profile mitmproxy recording with TTI recording.
1655850369 [sc-7266] Removed ate_addSnippet
1655840404 [sc-7296] Check that transfers have populated from store before tracking
1655824582 [sc-8017] server: Add team and collection for Realty Austin
1655821428 [sc-8013] ext: Changed 3 minutes to 10 minutes for saved time
1655818969 [sc-8009] server: Deprecate isInBetaUserList(), PRODUCTION_BETA_USERS and FF_BETA_USERIDS
1655778538 [sc-6326] Upload test failure artifacts to Gitlab
1655767505 [sc-6066] Make a separate jest project for perf. tests
1655767505 [sc-6066] Define types for jest config files
1655764681 [sc-6326] ext: Upgrade @types/selenium-webdriver to match selenium-webdriver
1655764681 [sc-6326] Don't use uuid4 from @sentry/utils
1655764681 [sc-6326] Don't load content-ui into the panel document
1655764681 [sc-6326] Convert UI test helpers to take \`ThenableWebDriver\`
1655764681 [sc-6326] Capture screenshots and page source upon UI test failures
1655764681 [sc-6326] Add a \`executeAsyncScript\` helper with typechecking and promise support
1655764680 [sc-6326] Move webextension-polyfill module augmentations to /types/
1655764680 [sc-6326] Migrate from 'webextension-polyfill-ts' to '@types/webextension-polyfill'
1655764680 [sc-6326] Expose \`browser\` from the webextension-polyfill on the options page to ease automated tests
1655764680 [sc-6326] Explicitly add the "contextMenus" permission to manifest.json
1655764680 [sc-6326] Don't enforce the \`max-len\` eslint rule on \`eslint-disable-next-line\` lines
1655764680 [sc-6326] Convert storage-utils helpers to use args, promises, & browser polyfill
1655764680 [sc-6326] Bump chromedriver to v102.0.0
1655764680 [sc-6326] Append a hidden extension iframe to the page in automation to access privileged ext. APIs
1655764680 [sc-6326] Add a packaged test page to provide access to the webextension-polyfill
1655764680 [sc-6326] Add \`navigateToExtensionUrl\` and \`switchToPrivilegedFrame\` test helpers
1655529045 [sc-7986] Consolidate ATE + Magical manifest extensions
1655528773 [sc-7986] Define more static manifest values in manifest.json
1655528725 [sc-7986] Remove stale ha-config.ts mention in .eslintrc.js
1655526476 [sc-7986] ext: Wrap browser.notifications.* calls behind a BUILD_APP=ATE check.
1655523794 [sc-7986] ext: Unify saveTestSnippet condition for ATE/Magical
1655523303 [sc-7986] ext: Package all ATE files for Magical builds
1655523221 [sc-7986] ext: Use Amplitude dev. project for ATE dev. builds
1655522784 [sc-7986] ext: Unify browser_action.default_title between BUILD_APPs
1655522457 [sc-7986] Update extension name for non-prod builds
1655520250 [sc-6859] server: Apply destructuring assignment lint rules
1655520250 [sc-6859] common: Apply destructuring assignment lint rules
1655520245 [sc-6859] ext: Apply destructuring assignment lint rules
1655519928 [sc-6859] all: Add eslint-plugin-modules-newline to format imports
1655502294 [sc-8001] Install module in upload script
1655501192 [sc-8001] Install monorepo by not using .install_monorepo
1655499704 [sc-8001] Install monorepo in \`.upload\`
1655496061 [sc-7952] ext: Testcase for input near start edge of doc
1655496061 [sc-7952] ext: Align dropdown to edge of window when offscreen
1655496061 [sc-7952] Update extension/package-lock.json for ui-tests deps.
1655495370 [sc-7747] Update \`toggleTransform\` to save/delete from the server directly
1655495370 [sc-7747] Update \`saveNewSourceWithLabel\` to save new sources, reenabled sources, user source labels, placeholders to server directly
1655495370 [sc-7747] Update \`removeSource\` and \`removeAllSources\` to save disabled sources to server directly
1655495370 [sc-7747] Update \`editLabel\` to save user source label to server directly
1655495370 [sc-7747] Update \`disabledSourceIds\`in local storage when we update server
1655495370 [sc-7747] Delete \`saveSourcesForTab\`
1655493097 [sc-7085] ext: Elements should be visible before clicking on them
1655493097 [sc-7085] ext: Allow callers of showMenuFor to await for stylesheets to load
1655493097 [sc-7085] ext: Add tests to verify x, y position of dropdown
1655493097 [sc-7085] ext: Add a cross-origin test for dropdown positions
1655491672 [sc-7983] Pipe \`git fetch --tags --all\` ourput to \`/dev/null\`
1655490168 [sc-7211] Checks if parent exists in valueDeduped srcMatches
1655490168 [sc-7211] Adds test to validate first parent selected in dedupeSrcMatches
1655485637 [sc-7978] Respond with a \`UserInfo\` in POST /users instead of a \`User\`
1655485542 [sc-7978] Add helper for sending a UserInfo
1655478187 [sc-7969] server:Set the header \`Access-Control-Allow-Origin: *\` to support module scripts
1655478187 [sc-7969] Move remaining JS from Webflow's \`<head>\` into the API server
1655478141 [sc-7942] ext: Remove leftover packaging and preload of animated-logo.gif
1655477760 [sc-7370] Fix styling for shortcut editor buttons on smaller widths
1655476560 [sc-7950] server: Prevent duplicate website sections from getting created
1655476560 [sc-7950] server: Add index on website_sections.base_url_regexes
1655412188 [sc-7568] Use new custom hook \`useAllSiteAgnosticVariables\` in workspace and panel
1655412188 [sc-7568] Remove site agnostic variables from global state
1655412188 [sc-7568] Omit \`SourceLabel\` id and timestamps from \`SiteAgnosticVariableObject\`
1655412188 [sc-7568] Custom hook and utils for generating all site agnostic variables from labeled placeholders and source pages
1655412188 [sc-7568] Add \`getLabeledPlaceholders\` method to background placeholders
1655408257 [sc-7958] Allow recommended transfer view to be disabled via appConfig
1655405199 [sc-7960] server: Add Pure Adapt team
1655403630 [sc-7960] server: Add Syncro team
1655387148 [sc-7916] Avoid dropdown flickering when user starts typing
1655387148 [sc-7916] Avoid dropdown flickering when user selects show more/all variables options
1655354297 [sc-7956] ext: Remove reference to "Chrome" from messages.json
1655336719 [sc-7750] Optimistically save shortcuts
1655335756 [sc-7599] Don't re-fetch User after \`updateInfoForUser\`
1655335567 [sc-5728] head.js: \`navToStore\` params arg. is optional
1655334674 [sc-7128] Update Google Sheets destIconUrl for recommended transfers
1655334674 [sc-7128] Add favicon to SrcPage and create getFaviconUrlFromSrcPage function
1655329894 [sc-7942] Refactor options promo frame logic so it's in options-app
1655329245 [sc-7942] Remove loading page on options
1655326462 [sc-5728] Update webflow head.js
1655324979 [sc-7659] Create more website sections
1655324979 [sc-7659] Create helper functions for inserting new website sections and updating sources with latest match
1655238627 [sc-6296] Move share shortcuts dialog
1655238627 [sc-6296] Fix formatting on options sidebar
1655238626 [sc-6296] Update share app dialog props and move to options-app
1655238584 [sc-6296] Move import/export dialogs to options-app
1655237993 [sc-6296] Move tag dialogs to options-app
1655237581 [sc-6296] Remove feature gate dialog
1655237471 [sc-6296] Remove showCreateOrEditTagModal
1655237406 [sc-6296] Remove options sidebar app
1655234042 [sc-7899] Remove leftover \`cache\` top-level GitLab CI config without a \`key\`
1655226321 [sc-7681] Guard against guided transfer dialog typerror
1655214551 [sc-7190] server: Set teams users to be in NEW_USER cohort if not yet on pro beta
1655155325 [sc-7817] Make checklist vertical on fab
1655149498 [sc-7746] Don't show options promo frame on signup or loading pages
1655143956 [sc-6000] Shortcuts created from autosuggest are now tracked isNew=true
1655133617 [sc-7825] Fix CSS.escape polyfill in tests
1655003206 [sc-7846] ext: Use expected args with invoked debounced functions
1654876665 [sc-6878] ext: Adjusted the initial value to be a blank as type
1654876665 [sc-6878] ext: Added in tracking for checklist share shortcuts with new entryPoint
1654876665 [sc-6878] ext: Added in tracking for checklist share app with new entryPoint
1654876665 [sc-6878] Refactor ShareAppDialog and Props
1654872405 [sc-7826] Reapply lockfile changes using npm 6
1654872215 [sc-7826] Revert 0b92e1c41 (only the lockfile)
1654869068 [sc-7519] Add unit tests to check autofill dropdown suggestions' type in different cases
1654805796 [sc-s507] remove intro guided transfer dialog, alter existing dialog to acommodate first time users
1654805796 [sc-7507] show helpful callout on guided transfers dialog
1654805796 [sc-7507] ext:track create.transfer.modal.impression from modal instead of initiator
1654801410 [sc-7304] Add 'Remove variables' into the menu and rename CTA button
1654794503 [sc-7796] ext: Don't upload node_modules cache on jobs that don't invalidate it
1654792383 [sc-6329] Filter out the src pages without any matched variable for magic fill all
1654790303 ext: Changed keywords to be lowercase and hyperlink for variables
1654788633 Fix fab-close centering
1654788248 [sc-7734] server: Disallow source disable if sources include url sources and version is 3.18.2
1654788248 [sc-7734] server: Addition of Sources.findByIds()
1654788248 [sc-7734] server: Add test coverage for sources/disabled
1654786504 [sc-7628] Save new private sources to server (as well as public)
1654784730 [sc-7590] ext: Opens appropriate autosuggest shortcut view based on feature flag
1654784730 [sc-7509] server: Return new autosuggest feature flag true to 50% of users
1654784730 [sc-7509] ext: Renders the autosuggest shortcut prompt in snippet edit panel when desired
1654784730 [sc-7509] ext: Hoist functions in AutosuggestShortcutPrompt component
1654782548 [sc-7765] server: Add Cloudhumans team
1654716615 [sc-5266] Remove the shortcut recovery dialogs from the workspace
1654706187 [sc-6971] Prevent "class" attributes in JSX in favor of "className"
1654626626 [sc-7711] Add new team for Trumble Agency
1654615536 [sc-7703] Add Edge extension origins to \`CSRF_TRUSTED_EXTENSION_ORIGINS\`
1654551366 [sc-7676] server: Update seeds for greenhouse.io/people
1654536019 [sc-7653] Uniq UserSourceLabel upserts according to the unique index
1654526000 [sc-7647] server: Don't show promo frame banner to guest users
1654502405 [sc-7361] seeds: Fix matchers for LI school name seeds
1654500505 [sc-7645] Don't show banner unless user is more than 10 minutes old
1654495174 [sc-7361] Fix typo in LI employer variable seed
1654491456 [sc-7644] Ignore "The extensions gallery cannot be scripted." error in Sentry
1654486059 [sc-7634] server: Return private (formerly public) sources referenced by a user's snippets
1654484916 [sc-7624] server: Don't error deleting mappings still in use and keep matchers in that case
1654484887 [sc-7636] server: Demote Sales Navigator Person sources
1654484887 [sc-7636] server: Consider Sales Navigator Person as a private site
1654483780 [sc-7622] Set userId prior to deduping user-source-labels
1654482994 [sc-7622] Tests deduping user-source-labels with different userIds
1654466772 [sc-7361] seeds: Update LI profile CSS matchers
1654455515 [sc-7361] seeds: Use type:multi instead of type:css
1654454758 [sc-7613] server: Use \`SOURCES_TABLE_NAME\` in server/src/models/sources.ts
1654454639 [sc-7592] server: Don't return \`css-complete\` matchers for sources
1654434558 [sc-7614] server: Helper function to find best matching website section for sources
1654434558 [sc-7614] server: Fix incorrect baseUrlRegexes in old migration
1654434558 [sc-7614] server: Create migration to re-set correct website sections for sources
1654397418 [sc-7613] Consider existing manifest \`exclude_matches\` when overridding excludeMatches for \`registerContentScript\`
1654390828 [sc-5563] ext: Public labels need not be saved to the server
1654389530 [sc-7618] Use \`sourceIdToWebsiteSectionIdMap\` when saving shortcuts
1654389530 [sc-7618] Delete \`getSiteSources\` method
1654383948 [sc-7612] server: Don't cache the \`blockAllSourcesFetchForUser\` HTTP response.
1654377643 [sc-7613] Use only the tab URL excludes list for reregistering content scripts instead of pulling from manifest
1654374580 [sc-7612] server: Block the extension fetching /sources when not needed after POST /snippets
1654362087 [sc-7585] Check if variable exists across placeholders and site sources
1654322385 [sc-7589] server: Fix logic for adding more website sections in migration
1654322280 [sc-7589] server: Fix website migrations
1654316783 [sc-7589] Update website section names and migrate source data
1654310663 [sc-7610] Add \`MATCHER_PRIORITY_ATTRIBUTE_NAMES\` for ema.md and Redfin
1654308739 [sc-6352] Add tests for new URL normalizers
1654308739 [sc-6352] Add more URL normalizers for popular mapping destinations
1654307047 [sc-7361] Remove dependency cycle with sources and matchers models.
1654306540 [sc-7361] server: Allow /sources/update to update \`paths\`
1654292939 [sc-7361] server: Return \`css-complete\` matchers from \`Matchers.findMatchersBySourceId\`
1654292939 [sc-7361] server: Remove ununsed function: \`matchersHandler.getMatchersForSource\`
1654292936 [sc-7361] Dedupe raw SQL to convert matcher rows into an array
1654290109 [sc-7333] Add warnings on models which should not use a read replica
1654290096 [sc-7333] Use readonly knex for the remaining models
1654289992 [sc-7333] Use readonly knex for sources and labels
1654278033 [sc-7333] Teardown readonly knex in index.ts
1654278033 [sc-7333] Expose a readonly Knex connection
1654278033 [sc-7333] De-dupe knex config by using URIs
1654278033 [sc-7333] Change knex env vars to us postgres URIs
1654269991 [sc-7510] server: Remove transfer recommendations for Gmail, LI and twitter messaging
1654264205 [sc-7579] ext: Don't call updateSourcesOnClosedTabs() from background-sources
1654264195 [sc-7579] ext: Call updateSourcesOnClosedTabs() at the end of updateAllDataFromApiForUser()
1654259421 [sc-7579] ext: TransformManager.getTransforms() should return TransformStore
1654259418 [sc-7579] ext: Resolve localstorage changes as a settled promise
1654229639 [sc-6261] Autosuggest Shortcuts on Google Sheets
1654190727 [sc-7482] Change checklist title copy
1654183742 [sc-7570] server: Remove auto display dropdown for configured sites except tohodo
1654152065 [sc-7569] Disable \`variablesOnClosedTabsEnabled\` until performance is improved
1654145177 [sc-7567] Throttle computing \`srcPagesForOpenTabs\`
1654137564 [sc-7564] ext: Add throttle to PlaceholderDialog localStorageChanges observer
1654136980 [sc-7564] ext: Add throttle to PlaceholderManager localStorageChanges observer
1654121822 [sc-7405] Dedupe user source labels prior to upsert
1654121252 [sc-7562] Turn on options promo frame
1654120981 [sc-7108] Update website section name to LinkedIn Profile in db
1654116896 [sc-7501] Ignore duplicate mappings instead of throwing error
1654115342 [sc-7401] Clone matchers when cloning a private variable
1654114192 [sc-7546] Use cached 'lastSrcPageForWebsiteSection' in background
1654114192 [sc-7546] Update updateRecentlyClosedTabs test to call \`WebsiteSectionManager.init\`
1654114192 [sc-7546] Move async calls outside of loop
1654114192 [sc-7546] Don't remove open sites from recently closed tabs
1654114192 [sc-7546] Cache 'lastSrcPageForWebsiteSection'
1654113220 [sc-7537] ext: Generate exclude_matches within manifest at build time
1654111421 [sc-7553] Don't show transfers dialog after accept shortcuts
1654106896 [sc-7399] Add more sites to the list that get private variables by default
1654106187 [sc-7525] cache appConfig in memory instead of calling localStorageGet every time
1654064506 [sc-7531] ext: Only call \`onSnippetStorageChanged\` once on workspace page load
1654064429 [sc-7531] ext: Only call \`decodeHTMLElements\` once per plaintext snippet
1654064333 [sc-7531] ext: Add \`ate:dev-staging\` script
1654058696 [sc-7529] Don't show checklist dialogs on signup page
1654037341 [sc-4644] Allow canPromote users to add CSS matchers
1654036244 [sc-7472] Focus the first input field in separate useEffect
1654035379 [sc-7472] Only auto-show dropdown if there are matching labels
1654035342 [sc-7472] Move getUserSourceLabelsForSources to shared
1654035342 [sc-7472] Clean up dropdown listeners on re-renders
1654034643 [sc-7473] Unit test scaffolding for getAutofillDropdownGroups
1654034643 [sc-7473] Add show all variables suggestion for the placeholder label matching case
1654032538 [sc-7303] Add show all variables suggestion to force dropdown show all groups
1654030818 [sc-7506] Update transfers empty state to workspace
1654029894 [sc-7505] ext: Show TransferCardsComponent even if no transfers to show
1654029894 [sc-7505] ext: Add empty state to TransferCardsComponent
1654029727 [sc-7483] Don't show variable suggestion help except for when someone uses xxx
1654029624 [sc-7281] ext: Copy changes to TransferCreatedView
1654027394 [sc-7515] Add tracking for context menu items
1654025801 [sc-5004] server: Promote popular private labels to public and make new public labels
1654023603 [sc-7487] Allow opening accept shortcuts dialog when completed
1654023603 [sc-7487] Add accept shortcuts complete state
1654020724 [sc-7502] Don't save mappings to the server that are equivalent to an existing one
1654013412 [sc-7433] sort shortcut variables by pre-defined priority
1654013247 [sc-7433] add "show all" button to shortcut variable picker
1654011025 [sc-7484] ext: Show transfer dialog on workspace load only if not seen before
1653997715 [sc-7488] Update and use a helper for linking to support articles
1653997715 [sc-7488] Change Help center link to new support.getmagical.com link
1653978487 [sc-7193] ext: Use site specific selector config when generating selectors
1653978487 [sc-7193] ext: Test for new selector config
1653978487 [sc-7193] ext: Cache site specific selector url regexes in the content scripts
1653976013 [sc-7193] common: Add site specific selector configs to app config and add config for zendesk and salesforce
1653973879 [sc-7435] Show unlabeled variable instead of empty string on transfer created panel view
1653948937 [sc-7464] ext: Fix variable.picker.add.variables tracking
1653948884 [sc-7464] ext: Remove incorrect template.delete tracking
1653942491 [sc-7268] ext: Remove unused variable
1653942491 [sc-7268] Open transfers dialog if job to be done is not messaging
1653940429 [sc-7442] Dropdown only displays "Looking for something else" option when mapping exists
1653938836 [sc-7321] Get sourceId from placeholder input for matching label in dropdown
1653937504 [sc-7448] Don't use an invalid URL string for \`VariablePickerTabProps<TypedVariable>.baseUrl\`
1653746520 [sc-7441] 3.19.7 workaround: Limit the returned default source labels to only the directly relevant ones
1653706122 [sc-7439] Move shortcut placeholder picker suggestion models to extension/
1653705285 [sc-7438] Avoid recalculating labels for all sources by id
1653687686 [sc-7331] Unify use of BetaIcon
1653687686 [sc-7331] Add beta tag to panel
1653687686 [sc-7331] Add beta tag to options tab dropdown transfer
1653687686 [sc-7331] Add beta tab to options page navigation tab
1653687438 [sc-7212] Fix snippet suggestion and shortcut tag layout
1653687022 [sc-7396] Remove Sendgrid text expander users from the right list
1653684332 [sc-7319] Change createVariableShortcut to insertVariableShortcut in checklists
1653683484 [sc-6238] Variable list displays 'No Content' for present variables that are empty
1653681664 [sc-7311] Checklist and video style fixes
1653680181 [sc-7344] Remove \`activeTabUrl\` from \`openSourcesBuilder\`
1653680181 [sc-7344] Increase setTimeout time for \`openNewTabInEditVariablesModes\` and remove extra update tab state
1653678409 [sc-7295] Fix dropdown right padding
1653678298 [sc-7371] Make options promo frame icon white
1653678298 [sc-7371] Make iframe close button white on banner
1653672533 [sc-7182] ext: Tracking events for source agnostic variables
1653672533 [sc-7182] Use getSrcSelector to get total variables from snippet
1653672533 [sc-7182] Tracking in variable picker
1653672533 [sc-7182] Tracking for variable dialog
1653672533 [sc-7182] Adds numTotalUniqueVariables to snippet-utils
1653667065 [sc-7316] Remove accept shortcuts checklist filter
1653609866 [sc-7223] Search result should not be sorted by any unexpected rule
1653608553 [sc-7293] portal-frame: Look for \`[data-vertical-scrolling-container]\` elements on \`children\` changes
1653608553 [sc-7293] ext: Use scrollHeight for portal frame height calculations
1653607328 [sc-7385] ext: Handle undefined mostRecentlySentSrcElements
1653607328 [sc-7385] ext: Handle undefined disabledSrcElements
1653607174 [sc-7209] Auto create placeholder src if we create a new variable
1653606290 [sc-7209] Bring back PlaceholderSrc and leave PlaceholderDestination for filling scenarios only
1653606256 [sc-7209] Choose the placeholder version of source in site specific tab
1653605034 [sc-6601] Correct JSDoc comment and add tests for \`recursivePartialMergeCustomizer\`
1653605022 [sc-6601] ext: Inline variables in getInitialGlobalState to make it easier to move
1653605022 [sc-6601] Cache global state in the bg. to avoid recomputing for each frame load.
1653605022 [sc-6601] Await most \`notifyGlobalStateChange\` calls
1653602157 [sc-7386] fix mismatched subtitles for shortcut variable tabs
1653599757 [sc-7378] Automate 3.19 email on update
1653597800 [sc-7220] remove "1 of x open pages" text from shortcut variable picker
1653597015 [sc-7341] Adds check for resurrecting variable
1653595855 [sc-7330] update recommended transfers
1653591738 [sc-7356] Referral credits state unlimited variables
1653588531 [sc-6792] server: Alter \`destinations\` cols \`original_url\` and \`uri\` to be text instead of string
1653587037 [sc-7349] add tracking to add/edit buttons in shortcut variable picker
1653586035 [sc-7312] Don't open dropdown in settings
1653577043 [sc-7306] Changed the Learn about Variables link to Support
1653573235 [sc-7173] Add new auto-dropdown configs
1653531822 [sc-7219] Show add/edit variables on all sub-tabs in workspace shortcut editor
1653531412 [sc-7318] Only complete autofill variable checklist item when not in placeholder
1653531286 [sc-7256] Update dropdown left offset based on new layout
1653524635 [sc-6920] shrink height of variable list items in panel
1653518646 [sc-7351] Stop provisioning text variables users to pro beta
1653470556 [sc-7217] Show all results in placeholder dialog dropdown if label can't be matched
1653446488 [sc-7314] Delete (seed) migration 20220518205129_migrate_placeholders_to_destinations.ts
1653441716 [sc-7301] Strip uri from placeholder create as this route no longer does destination writing
1653436229 [sc-7301] Don't double write into destinations and sources for placeholders for the placeholders endpoint
1653428746 [sc-7275] Make tab designs more consistent on default view
1653428403 [7249] Changed the shortcut row background color to be lighter (-10 to -00)
1653428339 [sc-7265] ext: Add setTimeout to placeholder dialog focus on first element
1653428076 [sc-7258] ext: Remove the "no mapping" attribute from placeholder inputs
1653428076 [sc-7258] Only throw due to no dest IDs in getSnippetBody for the placeholderInputs modifier
1653428076 [sc-7258] Generate placeholder destination IDs when getting the snippet body for saving ('clear')
1653417469 [sc-7290] Check off accept shortcuts on click
1653414714 [sc-7278] ext: If \`simpleSelectorToType\` throws, don't ignore the non-simple selector from CSG
1653413529 [sc-7282] update guided transfer arrow icon colors to be visible
1653412530 [sc-7261] ext: Fix transfers empty state gif width
1653411817 [sc-7267] ext: Track RecommendedTransfersView to amplitude only on component mount
1653411817 [sc-7267] ext: Set seen regexes only if not already marked as seen
1653411817 [sc-7267] ext: Improve RecommendedTransfersView useEffect
1653408007 [sc-7264] Fix guided transfer intro modal flicker
1653407624 [sc-7167] Avoid unnecessary sorting for the mapped group
1653406476 [sc-7216] ext: Use more specific Mapping types in autofill code
1653406476 [sc-7216] ext: Use magical-shortcut://\${GUID} as the placeholder destination URI
1653406476 [sc-7216] ext: Use isObjectInstanceOfDOMGlobal to check field instances for 'magicFillValues'
1653406476 [sc-7216] ext: Remove placeholder destination early return in \`onTributeReplaced\`
1653406476 [sc-7216] ext: Pass destination with autofill messages to use the correct dropdown state
1653406476 [sc-7216] ext: Handle placeholder destinations in the \`magicFillValues\` message listener
1653406476 [sc-7216] ext: Fetch other placeholder destination mappings for the same URI to generate \`valuesToAutofill\`
1653405484 [sc-7263] Make placeholder insert help card generic to variables
1653368101 [sc-7065] ext: PortalFrame: Create portal with Fragment to handle \`false\` as children
1653368101 [sc-7065] Remove extra set timeouts in content dialogs
1653368101 [sc-7065] Remove \`hidden\` attribute from portal frame
1653368101 [sc-7065] Only render content in content panel when all stylesheets are loaded
1653367231 [sc-7100] Update checklist content complete state
1653366870 [sc-7100] Don't show fab checklist when complete or on hover
1653366870 [sc-7100] Correct iframe links
1653366869 [sc-7100] Show checklist complete card
1653366869 [sc-7100] Fix checklist copy
1653366426 [sc-7154] Move workspace iframe to a banner style
1653354978 [sc-6937] Tracking in panel
1653354978 [sc-6937] Tracking for guided transfers
1653354972 [sc-6937] Tracking in workspace
1653354887 [sc-6937] Adds new tracking events for  workspace redesign
1653354887 [sc-6937] Adds context to popup open
1653353946 [sc-7137] Refactor deeplink dialog website events
1653353945 [sc-7317] Deeplink to guided transfer dialog
1653353924 [sc-7137] Move options page params to common dialog utils
1653353068 [sc-7175] update transfer recommendations
1653352310 [sc-7724] add an guided transfers intro dialog
1653351432 [sc-7254] Default to srcPage.title in guided transfers dialog
1653350576 [sc-7201] prevent variables tabs in shortcuts editor from expanding entire page
1653349612 [sc-7165] Fix create shortcut checklist ctas
1653344926 [sc-7107] ext: Add trigger to tracking for autofill invoke, cancel and selected
1653344926 [sc-7107] ext: Add trigger to trackAutofillInvoke()
1653344926 [sc-7107] ext: Add trigger to TributeCollection.fetchValues()
1653344926 [sc-7107] ext: Add trigger param to getValues()
1653344925 [sc-7107] ext: Refactor trackAutofillInvoke() to take params as opts
1653344903 [sc-7107] ext: Rename values() to fetchValues() in TributeCollection
1653344889 [sc-7107] ext: Refactor TributeCollection.values() to take params as opts
1653344889 [sc-7107] ext: Dispatch detail with tribute-cancel
1653342019 [sc-7127] ext: Use website section name for sources
1653340689 [sc-7004] Update no variable messaging on guided transfer modal
1653339740 [sc-7157] Remove options shortcut variable help card
1653339740 [sc-7157] Change positioning and style of trigger help and variable suggestion
1653339740 [sc-7157] Add orange 00
1653333771 [sc-7178] Open transfer dialog from checklist
1653333771 [sc-7178] Add jobs to be done to checklist
1653331147 [sc-7218] Only add show more variables option when variablesEnabled
1653320840 [sc-7196] ext: Show more variables from auto displayed dropdown should display correctly
1653320840 [sc-7196] ext: Create shortcut from dropdown within placeholder dialog should open panel to new shortcut
1653315587 [sc-7206] Dropdown: Revert the check icon for the used variables
1653315464 [sc-6910] Implement magical banner in dropdown
1653313809 [sc-7148] server: Wait list new registering users based on env var
1653313809 [sc-7148] server: Test to ensure that setting TEXT_VARIABLE cohort succeeds
1653313809 [sc-7148] server: Remove pro beta cohorts that are no longer conditional
1653313809 [sc-7148] server: Remove NEW_USER cohort test as it is no longer applicable
1653313809 [sc-7148] server: New registering users should always belong to PRO_BETA_COHORT.NEW_USER
1653313809 [sc-7148] server: Do not place new registering users into TEXT_VARIABLE pro beta cohort
1653313809 [sc-7148] server: Add env var to control PRO_BETA_USER_COHORT for new registering users
1653313809 [sc-7148] ext: Don't show pro beta shake notification to WAIT_LIST cohort users
1653313809 [sc-7148] common: Add new WAIT_LIST pro beta cohort
1653269416 [sc-7221] ext: Dropdown should not auto display in placeholder dialog when no variables present
1653054627 [sc-7203] ext: Replace unlimited variables with transfers in referral credit options
1652976540 [sc-7199] ext: Replace gif in empty transfers view of workspace
1652976521 [sc-7199] ext: Add new transfers gif
1652961799 [sc-7202] ext: Fix team icon fill color
1652953296 [sc-7204] Remove concept of baseUrl in use so all site tabs will always be clickable
1652923186 [sc-7149] Filter suggestion based on destination label
1652923148 [sc-7051] Fix mappings.test.ts handling of .matchers for ServerMapping
1652921518 [sc-7051] server: Support mappings for placeholder destinations
1652921518 [sc-7051] ext: Support mappings for placeholder destinations
1652921284 [sc-7150] Placeholder as a Destination schema changes
1652921284 [sc-7150] Double write placeholders to sources and destinations
1652917284 [sc-731] Use websiteSectionName instead of tab title in variable picker
1652916225 [sc-7140] Unit test for CustomFocusActions
1652916106 [sc-7164] update the gif and some styling for the transfers upsell
1652915257 [sc-7043] ext: Update copy in  RecommendedTransfersView
1652915257 [sc-7043] ext: Store recommended transfers src regexes seen in local storage
1652915257 [sc-7043] ext: Show RecommendedTransfersView only when not seen before
1652915257 [sc-7043] ext: Set cachedRecommendedTransfers to TabState
1652915257 [sc-7043] ext: RecommendedTransfersView should get data from TabState instead of View state
1652915257 [sc-7043] ext: Export getFavicon()
1652915257 [sc-7043] ext: Add tracking to RecommendedTransfersView
1652915257 [sc-7043] ext: Add cachedRecommendedTransfers to TabState
1652913944 [sc-7162] Update color of search input for shortcuts
1652913210 [sc-7160] Only show "My transfers" heading if you have transfers
1652912395 [sc-7049] Update tabs' sources and website section on bg-sources update
1652912395 [sc-7049] Don't skip tab updates on undefined website sections
1652911142 [sc-7132] Update privacy and safety URL
1652911142 [sc-7132] Update magical support url
1652911142 [sc-7132] Update magical credits URL
1652911142 [sc-7132] Update checklist item help URLs
1652907324 [sc-7151] Disable auto displaying dropdown for users without variables enabled
1652906667 [sc-7152] Show referral credits feature sequence
1652905556 [sc-7168] Return a \`SnippetSuggestion\` (instead of unfilled) for canned shortcuts
1652905556 [sc-7168] Create \`newSnippetSuggestion\` helper
1652905556 [sc-7168] Clarify that new suggestion helpers are for tests
1652904612 [sc-7130] Delete transfers help card
1652903718 [sc-7096] Update transfer saved view design
1652898515 [sc-7118] Pull trigger from user profile
1652897837 [sc-7053] Remove url based favicons for snippets and variables
1652897837 [sc-7053] Remove the 'Currently open tab' label on the All Variables Tab
1652897837 [sc-7053] Remove old placeholders state from global state
1652897837 [sc-7053] Remove old placeholders state from global state
1652897837 [sc-7053] Add site agnostic variables to global state
1652897837 [sc-7053] Add All icon for variable picker
1652897147 [sc-7023] ext: Remove invalid type assertion of LatestFill in storeLatestFill()
1652897147 [sc-7023] ext: LatestFill should not be reset with blank object on logout
1652894377 [sc-7059] show edit commands on non-visible variables
1652894377 [sc-7059] make show/hide variables click target a button
1652893408 [sc-7199] change recommendations to use regexinstead of hostname
1652893408 [sc-7119] add regexes to transfer recommendations
1652893408 [sc-7119] Treat current tab as destination tab
1652892731 [sc-7109] Import \`autofill-forms\` in the placeholder dialog on google sheets
1652888821 [sc-7139] polish up the guided transfer dialog ux
1652879233 [sc-7143] Update the extenson description again
1652819297 Revert "[sc-6937] Adds new tracking events for  workspace redesign"
1652819287 Revert "[sc-6937] Tracking in workspace"
1652819276 Revert "[sc-6937] Tracking in panel"
1652819263 Revert "[sc-6937] Tracking for guided transfers"
1652815668 [sc-7141] Truncate the manifest extension description for submission
1652814169 [sc-6937] Tracking in workspace
1652814169 [sc-6937] Tracking in panel
1652814169 [sc-6937] Tracking for guided transfers
1652814169 [sc-6937] Adds new tracking events for  workspace redesign
1652813862 [sc-6908] Remove dropdown footer and add remove mapping suggestion
1652813862 [sc-6908] Only remove the mapped source from the remove suggestion
1652813862 [sc-6908] Nested item style while mapping exists and group variables by source
1652813862 [sc-6908] Avoid to set group title and header when no mapping group matched
1652811992 [sc-7042] Control text variable modal dropdown auto-display with feature flag
1652811986 [sc-7042] Show dropdown when focusing on text variable modal inputs
1652811986 [sc-7042] Rename VALID_INPUT_TYPES to DISABLE_AUTOCOMPLETE_FOR_INPUT_TYPES
1652811986 [sc-7042] Focus event listener should only be attached if the site has been configured to show dropdown automatically
1652811986 [sc-7042] Create a custom event that allows for dropdown to display on demand
1652811986 [sc-7042] Compute cached customFocusAction within TabState
1652811986 [sc-7042] Add customFocusActions to TabState
1652809960 [sc-7138] Update srcPages when tab created
1652804854 [sc-7121] flip layout of transfer items in panel
1652804854 [sc-7121] Update launch/open copy for transfer items
1652804617 [sc-6987] Save new variables on popular sites as private
1652803059 [sc-7067] ext: Move getElementContent() to utils
1652803059 [sc-7067] ext: Dropdown should auto display only when element text is blank
1652801506 [sc-7110] Check for labeledPlaceholders to open placeholder modal
1652794448 [sc-6976] Add link to fab support button
1652793675 [sc-7099] Add link for viewing all transfers from workspace
1652792930 [ax-7110] ext: Get rid of the 2nd step of the dropdown for variable shortcuts
1652792248 [sc-7066] Hide "Go to destination" button when guided transfer src and dest are the same
1652791573 [sc-7069] tweak styles and spacing for options tabs in workspace
1652791573 [sc-7069] remove TOS and Privacy Policy from workspace
1652791573 [sc-7069] line up onboarding checklist and filters with center panel in workspace
1652791573 [sc-7069] change behavior of tabs in workspace to always be expanded
1652791573 [sc-7060] remove horizontal divider on top of workspace central panel
1652791237 [sc-7112] raise threshold of ui performance test significantly
1652789939 [sc-7037] fix styling on fab support button
1652789224 [sc-7054] Add min height to placeholder dialog scrolling container
1652786828 [sc-7063] Allow prioritizeTransfers function to accept maximum recommendations
1652746296 [sc-7022] Add different promo frame urls for post GA users
1652712101 [sc-7087] Update extension message to include "Autofill"
1652712101 [sc-7087] Update extension description
1652707741 [sc-6892] ext: Use parseFloat when parsing CSS props that allow for fractional values
1652707741 [sc-6892] ext: Fix deprecated references to scrollX/scrollY
1652707741 [sc-6892] ext: Account for scroll of dropdown document
1652706797 [sc-6891] Replace some @ts-ignore with @ts-expect-error
1652706797 [sc-6891] Replace \`throw Error(…)\` with \`throw new Error(…)\`
1652706797 [sc-6891] Improve eslint new-cap rule to ensure proper use of constructors
1652706797 [sc-6891] Exclude variable and placeholder shortcuts in placeholder dialog dropdown
1652706797 [sc-6891] Define Tribute.showMenuFor
1652638144 [sc-7050] ext: Use an object for suggestion group sort order options
1652638144 [sc-7050] ext: Use a constant for the groupSortOrder of a magic fill that only shares the label
1652638144 [sc-7050] ext: Use a constant for the "fill all remaining" groupSortOrder
1652638144 [sc-7050] ext: Sort mapped variables before unmapped with the same label
1652638144 [sc-7050] ext: Cleanup group sort order for shortcut suggestions
1652637094 [sc-6901] ext: Initialize \`focusedSrcMatchLabel\` to \`null\` and update the type accordingly.
1652543768 [sc-6901] Add null check for label match
1652501104 [sc-6901] Match dropdown source suggestions to labeled sources on other source pages
1652501104 [sc-6901] Account for variable shortcut partial matches in an non-agnostic way
1652500443 [sc-7002] Rename "launch" to {create,open}transfer
1652500443 [sc-6900] Update callers of \`inferTransfersFromMappings\`
1652500443 [sc-6900] Enable launching guided transfers from inferred mappings
1652499120 [sc-6900] Support launching transfers from a srcUrl and dest URI
1652499120 [sc-6900] Rename startGuidedTransfer to clarify it's from from URLs
1652499120 [sc-6900] Add recent website sections to \`inferTransfersFromMappings\`
1652499120 [sc-6900] Add destination URI and source URL to card data type
1652498321 [sc-6888] Use bestWebsiteSectionId to group srcPages in guided transfer dropdown
1652498321 [sc-6888] Tests groupSourcePagesByWebsiteSection
1652497652 [sc-6881] ext: Use generic attachWindowEventListeners() and removeWindowEventListeners() functions
1652497652 [sc-6881] ext: Use config to determine when to display dropdown on focus
1652497652 [sc-6881] ext: Refactor eventGlobal and desiredTarget into autofill-common functions
1652497652 [sc-6881] ext: Open dropdown when focussed on editable form elements
1652497652 [sc-6881] common: Add config for showing dropdown on focus
1652496435 [sc-6823] server: add routes and handlers for recent website sections
1652496435 [sc-6823] server: Add test for recent website section
1652496435 [sc-6823] server: Add recent_website_sections DB migration
1652496435 [sc-6823] server: Add models for recent website sections
1652496435 [sc-6823] quick: change \`any\` to \`never\` to fix typescript test error
1652496435 [sc-6823] extension: Use screaming snake case for constant
1652496435 [sc-6823] extension: Update recent website sections when creating a mapping
1652496435 [sc-6823] extension: Add \`RecentWebsiteSection\` to local storage
1652494694 [sc-6989] fix various split variable styling bugs
1652493582 [sc-7005] ext: Track when RecommendedTransfersView is shown on a hostname
1652493582 [sc-7005] ext: Show RecommendedTransfersView only when not seen before for hostname
1652493582 [sc-7005] ext: Resize TimerIcon to 16x16
1652493582 [sc-7005] ext: Replace recommeded badge with time saved pill
1652493582 [sc-7005] ext: Rename getRecommendedTransfers to prioritizeTransfers
1652493582 [sc-7005] ext: Filter transfers by preferences
1652493582 [sc-7005] ext: Create a reusable TransferCardsComponent
1652493582 [sc-7005] ext: Create a RecommendedTransfersView for the panel
1652493582 [sc-7005] ext: Create FabApi method to allow panel to show RecommendedTransfers view
1652491819 [sc-6996] Add close and support buttons to source page for guided transfers
1652488557 [sc-6922] Support launching recommended transfers from getmagical.com
1652488557 [sc-6922] Fix JSON-RPC constructor names
1652487279 [sc-7032] update the titles in transfers page, add time saved
1652482820 [sc-6887] Fix styling
1652482820 [sc-6887] Add recommended transfers to guided transfer flow
1652481713 [sc-7027] add styling to prevent scrollbars from showin up in dropdown
1652479908 [sc-6992] Remove useCreateGuidedTransfer
1652479908 [sc-6992] Remove \`sourceOptions\` and \`destOptions\` from \`GuidedTransfersDialogProps\`
1652477969 [sc-5268] Open placeholder dialog if there are no SrcPages for the shortcut
1652472662 [sc-7011] update panel to show all user's transfers
1652467053 [sc-363] Show other source pages even if there's a mapping on the destination
1652457366 [sc-363] Don't remove mappings when you 'Show All'
1652456909 [sc-363] Allow multiple mappings to be shown for a destination
1652395958 [sc-7002] update copy for transfer cards
1652395899 [sc-7002] update transfers card cta in panel to be primary
1652390892 [sc=6964] Set data for recommended and mapping inferred transfers
1652390892 [sc-6964] Launch recommended tricks from workspace and panel
1652390892 [sc-6964] Change cursor to pointer for transfer cards
1652390892 [sc-6964] Add types for launching transfers from recommendations and mappings
1652386710 [sc-6900] Make website sections param required
1652377186 [sc-6991] Wait for tab state to be created before sending state
1652377186 [sc-6991] Update state for guided transfer with new tab ids
1652376266 [sc-6990] fix infinite render loop transfers page
1652373757 [sc-7000] rename create "Autofill" to "transfer
1652372246 [sc-6993] open guided transfer from empty state in transfers tab
1652370019 [sc-6974] Update demo-data-entry.gif with new version
1652368140 [sc-6822] Add tests for reverse normalizers
1652368140 [sc-6822] Add reverse normalizer to destination normalizers
1652368140 [sc-6822] Add \`destinationUriToPageUrl\` to bg-destinations
1652365184 [sc-6603] Use already calculated bestWebsiteSectionId for source selectors
1652365183 [sc-6603] Move srcPage.srcMatches.websiteSectionId usage to srcPage.bestWebsiteSectionId
1652365150 [sc-6603] Store bestWebsiteSectionId on SrcPage
1652345033 [sc-6902] Dropdown layout and css styling polishment
1652345033 [sc-6902] Apply new shortcut list style
1652328904 [sc-6955] Replace usage of browser.tabs.TAB_ID_NONE with constant
1652328904 [sc-6955] Move useCreateGuidedTransfer into shared model and update usage
1652328904 [sc-6955] Add 'Create a transfer' button that launches guided transfer flow
1652313464 [sc-6988] default to transfers instead of shortcuts in panel
1652304645 [sc-6985] fix workspace top label to say "My Tricks" instead of "My Transfers"
1652304645 [sc-6985] fix styles for transfer cards in panel
1652302789 [sc-6983] remove transfers from teams tab
1652301023 [sc-6957] rename tricks to transfers for guided tricks flow
1652301022 [sc-6957] rename tricks/autofills/mappingcollection to transfer in transfers page and panel
1652300697 [sc-6957] rename autofills-page to transfers-page
1652299393 [sc-6979] Update guided transfer dialog copy
1652298637 [sc-6834] Move checklist components to shared ui components
1652298637 [sc-6834] Create fab checklist
1652289373 [sc-6949] Integrate suggested tricks into product
1652288625 [sc-6962] add destURIToTabTitle to to autofillGroupsToCardData for transfers
1652288625 [sc-6962] Use hook in workspace
1652288625 [sc-6962] Use hook in panel
1652288625 [sc-6962] Create custom hook, useDestURIToTabTitle to subscribe to localStorage
1652284916 [sc-6802] add upsell to transfers for when user doesn't have access
1652227348 [sc-6694] Create transfer created view
1652227348 [sc-6694] Create guided transfers help card
1652227348 [sc-6694] Create function to get website section name
1652227348 [sc-6694] Add logic for showing transfer created view and help card
1652226299 [sc-6973] Don't use variables as a proper noun
1652224452 [sc-6927] Check source tab id instead of URL for ending a guide
1652224252 [sc-6927] Send the source website section id to background
1652224207 [sc-6927] Thread source tab id through dropdown suggestions
1652213303 [sc-5739] ext: User.featureFlags should match UserInfo.featureFlags type
1652213297 [sc-5739] ext: User.oAuthAccounts should match UserInfo.oAuthAccounts type
1652209107 [sc-5739] ext: User model should extend mostly from common UserInfo
1652207636 [sc-5739] server: UserPublicInfo should pick from common User model
1652207636 [sc-5739] server: Move OAuthAccount interface to common
1652207636 [sc-5739] server: Move DEFAULT_FEATURE_FLAGS to common
1652207636 [sc-5739] server: Create common UserInfo and use in server
1652207636 [sc-5739] Consolidate ext and server to one common Onboarding
1652207620 [sc-5739] server: Create and use common ReferredUser interface
1652207491 [sc-5739] server: Common User.firstName can be null as per DB schema
1652206576 [sc-5739] server: Move User and related types to common
1652196143 [sc-6817] Add destinationURIToTabTitle to localStorage
1652155707 [sc-6945] Update styling
1652155044 [sc-6945] Update copy for empty state on guided trick dialog dropdown
1652146666 [sc-683] Update accept shortcuts content
1652146666 [sc-6803] Use share shortcuts graphic in receive shortcuts dialog
1652146666 [sc-6803] Update other checklist item descriptions
1652124092 [sc-6952] Remove Magical Pro branding from extension
1652123017 [sc-3581] Update alarms rates with new server configs
1652110635 [sc-6751] server: re-normalize destination URIs before returning
1652110635 [sc-6751] extension: update tab state when normalizers change
1652110635 [sc-6751] extension: intialize destination normalizers in background
1652110635 [sc-6751] config: move destination normalizers to config and update tests
1652110635 [sc-6751] common: migrate \`pageUrlToDestinationUri\` from extension to common
1652110635 [sc-6751] common: add types for server-based dest URI normalizers
1652110635 [sc-6751] common: add helper to initialize normalizer RegExps
1652110635 [sc-6751] common: add helper for generating a URI from a normalizer
1652110635 [sc-6751] Fix background-destinations test file name
1652110635 [sc-6751] Add tests for destination normalizers
1652108492 [sc-6947] Justify setting z-index on panel nav-bar
1651876620 [sc-6729] Open source in variable edit mode if option is present
1651876620 [sc-6729] Increase height container of modal dropdown
1651876620 [sc-6729] Hide "go to destination" until source has variables
1651876620 [sc-6729] Add option for opening source in edit variable mode
1651875397 [sc-6861] Key closed tabs by website section id instead of base url
1651875397 [sc-6861] Add SrcPage to recently closed when tab url changes
1651875397 [sc-6816] Only update closed tab when same website section was closed more than an hour ago
1651875397 [sc-6816] Migrate \`lastSrcPageForBaseUrl\` data to \`lastSrcPageForWebsiteSection\`
1651874695 [sc-6843] add "New" badge to Tricks tab
1651870942 [sc-6721] Start guided trick flow from dialog
1651870942 [sc-6721] Guided trick overlay
1651870942 [sc-6721] Background for managing guided trick state
1651870942 [sc-6721] Arrow left icon and slash slash gif
1651870942 [sc-6721] Add support and close buttons to trick overlay
1651870221 [sc-6699] server: Move SharedDecryptedSnippet interface to common for use in extension
1651870221 [sc-6699] ext: Update team snippets storage to use new SharedSnippet interface - Update usage of team snippets to use appropriate SharedSnippet types and type checking
1651870221 [sc-6699] ext: Split Snippet interface into SharedSnippet and UserSnippet - extend from SharedDecryptedSnippet - add utils for type checks - update background snippet teams unit test
1651870221 [sc-6699] ext: Show shortcut creator name for team shortcuts
1651866282 [sc-6839] server: Enable pro beta FFs for teams users - Add new unit tests for getFeatureFlagsForRequest
1651865358 [sc-6686] Set up submit button to start guided tricks flow
1651865358 [sc-6686] Guided tricks dialog show logic
1651865358 [sc-6686] Guided tricks dialog
1651865358 [sc-6686] Empty state for guided trick typeaheads
1651865358 [sc-6686] Change style of SrcPage when its selected
1651865358 [sc-6686] Add search icon to typeahead inputs
1651864077 [sc-6936] Fix Gitlab YAML config for code coverage
1651844943 [sc-6927] server: Add new teams + collections for Viva and Spryker
1651792897 [sc-6685] Use useCallback() in ProgressBarComponent
1651792897 [sc-6685] Refactor set user checklist to also account for checklist completion
1651792897 [sc-6685] Open accept shortcuts from checklist
1651792897 [sc-6685] Create checklist on options
1651792897 [sc-6685] Create checklist dialog
1651792876 [sc-6685] Remove progress bar from panel
1651792876 [sc-6685] Remove checklist view
1651792876 [sc-6685] Refactor checklist logic
1651792876 [sc-6685] Move checklist types to common models
1651792876 [sc-6685] Feature flag progress bar on workspace
1651788098 [sc-6702] add autofills to panel
1651788075 [sc-6702] rename Tricks to MappingCollection
1651784908 [sc-6519] Move placeholders out of SrcMatches within Snippets and Suggestions
1651784908 [sc-6519] Make typing more explicit between PlaceholderSrc and SiteSrcSelector + Clean Up
1651784908 [sc-6519] Make PlaceholderDestination more of a top level model - call the API endpoint, have its own Manager, move off SourceManager
1651784908 [sc-6519] Create placeholder as a destination
1651784701 [sc-6519] Add server model, handler, routes for placeholders
1651729437 [sc-6743] ext: Bump expansion perf. test cut-off to 28.5ms
1651729325 [sc-6743] ext: Allow creating a second mapping with a different srcWebsiteSectionId for a single destination
1651701579 [sc-6877] ext: Update cachedSourcesForUrl when a SiteSrcSelector changes in storage
1651700370 [sc-6844] server: Lint & Test job is optional for "Server - Promote to Staging"
1651699223 [sc-6533] ext: Allow dropdown use from placeholder dialog by replacing instanceof with new helper.
1651699138 [sc-6533] ext: Add helper to check instanceof across frames
1651696718 [sc-1324] extension: case 2 behaviour for forms
1651696718 [sc-1324] extension: Add sourceUrl to fillFlow to sort dropdown suggestions for mappings
1651696718 [sc-1324] extension:  case 2: show all groups in sheets with most recent fill from mapping, in forms only show mapped source
1651692458 [sc-6880] Update iframe to show product hunt on day of launch
1651674263 [sc-6866] Add try catch to sendgrid to avoid UnhandledPromiseRejection
1651643798 [sc-6541] server: Enforce that DEFAULT_RETURN_SOURCE_COLUMNS actually consists of columns in \`SourceWithoutPaths\`
1651643798 [sc-6541] ext: Support saving multiple kinds of sources at once via \`saveSourcesToServer\`
1651643798 [sc-6541] Remove deprecated *sourcesV1 keys so they can't be used
1651643798 [sc-6541] Add promote/demote options in the variable dropdown
1651596877 [sc-6624] Revamp workspace right column
1651594554 [sc-6857] use <Outlet/> and nested <Route/> to properly show team specific content
1651592974 [sc-6828] add recommended shortcuts
1651592974 [sc-6824] new tricks styling
1651536845 [sc-6236] groupSortedSrcMatches grouping child variables beneath parents
1651536845 [sc-6236] Uses groupSortedSrcMatches in panel
1651536845 [sc-6236] Test groupSrcMatches
1651536845 [sc-6236] Styling for split variables
1651534511 [sc-6494] server: Switch to slice in toPublicUserInfo()
1651534511 [sc-6494] server: Return creatorUser with shared snippets
1651534511 [sc-6494] server: Remove creatorUserId from DecryptedSnippet interface
1651534511 [sc-6494] server: Move UserPublicInfo to common
1651534511 [sc-6494] server: Move DecryptedSnippet to common
1651534511 [sc-6494] server: Add findByIds() to Users model
1651534511 [sc-6494] ext: ServerSnippet should refer to common DecryptedSnippet
1651533032 [sc-6862] ext: Record \`ExtensionInfo.installType\` on install events
1651527487 [sc-6781] Rename \`pageUrlToSinkUri\` to \`pageUrlToDestinationUri\`
1651527487 [sc-6781] Remove destination URIs from \`AutofillTabApi\` interface
1651527487 [sc-6781] Remove \`sinkFullUri\` from \`SourcesTabAPI\` interface
1651527487 [sc-6781] Remove \`sinkFullUri\` from \`GoogleSheetAutofillTabApi\` interface
1651527487 [sc-6781] Get destinationUri from tab-state when generating destinations
1651527487 [sc-6781] Get destination URI from tab state when in background
1651527487 [sc-6781] Add destinationUri to tab states
1651527487 [sc-6781] Add \`pageUrlToSinkUri\` to bg-destinations.ts
1651527194 [sc-6781] Rename shared/sink to shared/destinations
1651521567 [sc-6833] ext: Remove old IE-specific code calling body.createTextRange(…)
1651521567 [sc-6833] ext: Get rid of \`tributeDefaultOptions\`; inline in\`initializeTribute\` instead
1651521567 [sc-6833] ext: Get rid of \`replaceTextSuffix\` Tribute member
1651521567 [sc-6833] ext: Get rid of \`iframe\` Tribute member
1651521567 [sc-6833] ext: Get rid of \`autocompleteMode\` Tribute member
1651521567 [sc-6833] ext: Correct type of the element passed to TributeCollection.values
1651521567 [sc-6833] ext: Correct type of Tribute.collection to be an array
1651521567 [sc-6833] ext: Adding missing \`groupSortOrder\` and \`missingElements\` members to \`TributeValue\` so that type can be used more
1651521567 [sc-6833] ext: Add some more type to Tribute
1651521567 [sc-6833] ext: Add \`triggerAtStart\` member to \`Tribute\` interface
1651519903 [sc-6833] ext: filterSuggestions: Fix generics so callers get the same type back that they pass
1651519903 [sc-6833] ext: Require passing a \`values\` function to the Tribute constructor
1651519903 [sc-6833] ext: Require passing a \`*Template\` functions to the Tribute constructor
1651519903 [sc-6833] ext: Remove some unused Tribute constructor options
1651519903 [sc-6833] ext: Improve types for TributeSearch.filter
1651519903 [sc-6833] ext: Fix indentation and JSDoc syntax in Tribute.d.ts
1651514317 [sc-6833] ext: menuItemTemplate: Check the suggestion type before accessing \`suggestion.valuesToAutofill\`
1651514317 [sc-6833] ext: menuItemTemplate: Check the suggestion type before accessing \`suggestion.usedInFill\`
1651514317 [sc-6833] ext: menuItemTemplate: Check the suggestion type before accessing \`.srcMatch\`
1651514317 [sc-6833] ext: Remove jQuery object support from Tribute.js
1651514317 [sc-6833] ext: Don't use a generic for \`initializeTribute\`
1651514317 [sc-6833] Include auth prompt suggestions in \`Suggestion\`
1651512646 [sc-6627] Add function to infer tricks from mappings
1651512646 [sc-6627] Add empty state for tricks page
1651375548 [sc-6832] server: Make ensureTrustedOrigin throw \`APIError\` and log the origin
1651283959 [sc-6624] ext: Use a <Link> in EmptySnippetList to switch tabs
1651268188 [sc-6624] revamp workspace's left column, add routing
1651262134 [sc-6815] Change mapping enabling version to 3.18.2
1651258623 [sc-6798] use shadow DOM for snippets list
1651258623 [sc-6798] update designs of shortcut list in options page
1651257909 [sc-6811] Give all pro beta users mappings
1651241618 [sc-6810] Enable sort-keys lint rule on eslint files
1651240830 [sc-6809] ext: Expose \`srcWebsiteSectionId\` on \`Mapping\`
1651226506 [sc-6608] Implement the variable dropdown menu
1651191778 [sc-6674] server: Add Renewa and Maxmatch team + collection
1651184042 [sc-6805] Fix checklist setting bug
1651183293 [sc-6806] Set refer checklist item on any share copy
1651182407 [sc-6807] Set variablesIntro on variables panel view
1651170220 [sc-6237] extension: remove canPromote check to unify display behaviour
1651124212 [sc-6794] Don't have server \`develop\` jobs depend on extension jobs
1651080708 [sc-6750] Deprecate checklist items not being used
1651080708 [sc-6750] Deprecate Magical checklist
1651079910 [sc-6623] Update panel introduction notifications
1651079910 [sc-6623] Deprecate panel introduction cards
1651074834 [sc-6775] server: Don't log an error if an unauthenicated user uninstalls
1651074754 [sc-6775] Ignore "The tab was closed." in Sentry
1651074689 [sc-6775] Ignore WhatApp's "abort(OOM). Build with -s ASSERTIONS=1 for more info." in Sentry
1651014906 [sc-6735] config: Increase DOM mutation observer interval to 750ms
1651014906 [sc-6735] Make DOM mutation and change event observable intervals configurable
1651009218 [sc-6769] Fix scenario where new website section needs to be created
1651009218 [sc-6769] Change website sections insert in seed into an upsert
1651008279 [sc-6745] Clean up mentions of stitches to be mappings
1651008279 [sc-6745] Check element for contenteditable to prevent the creation of a mapping
1651005365 [sc-6744] Set refer checklist item to true on copy
1651000381 [sc-6749] Increase share shortcuts to 100% for beta users
1650999355 [sc-6707] Return website section name from database
1650999348 [sc-6707] Rename common \`websiteSection\` to \`website-sections\`
1650990958 [sc-6707] Seed some LinkedIn website section names
1650990958 [sc-6707] Migration to add \`name\` col to \`website_sections\` table
1650952374 [sc-6679] ext: Handle square brackets inside attributes in \`simpleSelectorToType\`
1650934221 [sc-6679] ext: Include full range of allowed custom element tag name characters for simpleSelectorToType
1650927626 [sc-6659] Use new user contact list for automation purposes
1650923322 [sc-6712] server: Log when desiredUserId is used to authenticate user
1650921851 [sc-6629] add "Tricks" page to workspace using dummy data
1650918370 [sc-6599] server: Add Greylock team + collection
1650917463 [sc-6594] Use array of selectors for autosuggest tracking
1650917463 [sc-6594] Use all strings in matcher rule array to find element matchers
1650917463 [sc-6594] Unit tests for generating selectors, \`querySelectorArray\`, and \`querySelectorAllArray\`
1650917463 [sc-6594] Generate an array of selectors if element is in a Shadow DOM
1650917463 [sc-6594] Delete empty destination
1650915715 [sc-6675] Pull destMappings from tab state instead of using getMappingsFromSinkUri
1650906481 [sc-6596] convert TributeRange.js to TypeScript
1650906481 [sc-6596] alphabetize members of Tribute.d.ts
1650898869 [sc-6609] server: Enable teams feature flag for users with an email domain matching a team email domain
1650898863 [sc-6609] server: Move default teams list to a teams config - Team config now includes a list of teams and their associated collection id - Update seed files to use the new teams config
1650898851 [sc-6609] server: Add user email domain helper function
1650669039 [sc-6628] Update tests for selector generation
1650668554 [sc-6628] Don't ignore generated selectors with CSG for now
1650668549 [sc-6628] Clarify that random gen check doesn't work on selectors
1650668545 [sc-6628] Ignore magical dropdown attributes added on destinations
1650668545 [sc-6628] Exclude dropdown attributes from css-complete selector
1650668535 [sc-6628] Add config array for dropdown attributes to exclude
1650655369 [sc-6621] Partial revert of "[sc-6516] ext: Enable @typescript-eslint/consistent-type-assertions to make \`as\` more obvious in review"
1650654242 [sc-6621] Revert "[sc-6516] common: Add a utility to assert instanceof"
1650643385 [sc-5517] Update messaging
1650643385 [sc-5517] Remove support for dropdown in snippet body editor
1650643385 [sc-5517] Remove SnippetBodyDestination model
1650642675 [sc-6659] Fix text expander contact list id
1650641917 [sc-6604] Update test for new provisioning specs
1650641912 [sc-6604] Add pro beta new users onto correct mail drip
1650583864 [sc-5352] server: Use the default error handler instead of try…catch in every route handler
1650583864 [sc-5352] server: Convert routing to ESM
1650583864 [sc-5352] server: Add a default error handler supporting a custom Error class
1650583864 [sc-5352] Convert server/src/index.ts to ESM
1650579831 [sc-6477] Sync shortcuts after sources and labels are saved
1650578592 [sc-6612] Overwrite \`row\` in \`destination.matchers[0].data\` rather than in the top level
1650548900 [sc-5836] Reuse default cursor styling for unsaved row
1650548900 [sc-5836] Prevent the unsaved shortcut been selected in workspace
1650514987 [sc-6602] ext: notifyAllTabs in parallel
1650514720 [sc-6600] ext: Use the 'warn' log level for "Could not establish connection." errors
1650514720 [sc-6600] ext: Upgrade webextension-polyfill-ts to 0.26.0 to get webextension-polyfill@0.8.0
1650513661 [sc-6475] Remove deprecated ui test to solve pipeline issue
1650513661 [sc-6475] Deprecate SnippetSuggestion.srcUrl
1650513661 [sc-6475] Clean up getPlaceholderSrcMatches
1650513234 [sc-6475] Use new sharded sources in tab state and calculate source matches with new website sections model
1650513234 [sc-6475] Update save variable flow to account for website sections
1650513234 [sc-6475] Populate new localstorage source shards from all sources server pull
1650513234 [sc-6475] Make sure server returns ID when base url uniqueness conflict arises
1650513234 [sc-6475] Create new keys in localstorage for source sharding
1650513234 [sc-6475] Clean up last usage of getPublicSources
1650513234 [sc-6475] Add website section to extension model
1650499681 [sc-6341] server: Tests for clonePrivateLabels
1650499681 [sc-6341] Create test helpers
1650499681 [sc-6341] Create new route for cloning private labels
1650499681 [sc-6341] Add private label logic to existing cloneAndSave logic
1650498198 [sc-6511] ext: Update user team shortcuts when other user data gets updated - specifically on install/update, login and browser restart
1650498198 [sc-6511] ext: Cache user info in background and update on local storage change - update UserManager.getUser() to return the cached user info
1650498198 [sc-6511] ext: Cache team shortcuts in memory
1650497506 [sc-6511] ext: Split out getAllSnippetSuggestions to be re-usable
1650497506 [sc-6511] ext: Add tracking of team shortcut use for autofill.selected-snippets event
1650497506 [sc-6511] ext: Add tracking of team shortcut use for aggregate ate_snippetUsed event - pipe through team id to expandShortcut - add aggregation of team ids and numTeamShortcuts for ease of amplitude calculations
1650497506 [sc-6511] ext: Add team shortcuts into dropdown - Add optional team id into snippet suggestions model - Add helper for getting team snippet suggestions and setting team id
1650497505 [sc-6511] ext: Add helper function to get all team snippets from server without requiring a team id
1650497505 [sc-6511] ext: Add background user helper functions for teams
1650497505 [sc-6511] ext: Add alarm to fetch team shortcuts on 30 min interval
1650487322 [sc-6593] fix small button size issue
1650471949 [sc-6303] auto-fix test files via eslint to use "it" over "test" in
1650471917 [sc-6303] add eslint "it" enforcement in jest test
1650444688 [sc-6491] Drop \`paths_strings\` column from the \`sources\` table
1650424687 [sc-2163] Add tests for \`getMatchersForSource\`, \`getMatchersForDest\`, and \`destinationFromElement\`
1650424400 [sc-2163] Generate matchers for dests the same way we generate matchers for sources
1650423165 [sc-6555] Enable @typescript-eslint/no-misused-promises eslint rule
1650423161 [sc-6555] Enable @typescript-eslint/no-for-in-array eslint rule
1650423147 [sc-6555] Enable @typescript-eslint/await-thenable
1650396152 [sc-5351] modify knexfile.ts to accomodate "production" NODE_ENV
1650393432 [sc-6576] center align icons and adjust flex wrapping for bulk actions in workspace
1650392437 [sc-6584] extension: Adds original parentSourceId to clonedSrcMatch metadata
1650392413 [sc-6460] Open links within placholder modal in a new tab
1650390454 [sc-5351] prepare to change NODE_ENV from 'prod' to 'production'
1650212832 [sc-3592] server: Redirect to the uninstall page even if the user isn't logged in
1650178603 [sc-6555] Enable @typescript-eslint/no-throw-literal eslint rule
1650178594 [sc-6555] Enable @typescript-eslint/type-annotation-spacing eslint rule
1650098533 [sc-6516] Enable @typescript-eslint/prefer-for-of eslint rule
1650098419 [sc-6516] Enable @typescript-eslint/non-nullable-type-assertion-style eslint rule
1650098032 [sc-6516] Enable @typescript-eslint/no-non-null-asserted-nullish-coalescing eslint rule
1650097891 [sc-6516] Enable @typescript-eslint/no-base-to-string eslint rule
1650097237 [sc-6516] Enable @typescript-eslint/member-delimiter-style
1650096738 [sc-6516] ext: \`npm audit fix\` after ui-tests
1650095999 [sc-6516] ext: \`npm audit fix\`
1650095871 [sc-6516] Update @types/jest to align with jest
1650094972 [sc-6516] server: Enable @typescript-eslint/consistent-type-assertions to make \`as\` more obvious in review
1650094972 [sc-6516] ext: Enable @typescript-eslint/consistent-type-assertions to make \`as\` more obvious in review
1650088206 [sc-6516] common: Add a utility to assert instanceof
1650088206 [sc-6516] Enable the @typescript-eslint/prefer-string-starts-ends-with eslint rule
1650088206 [sc-6516] Enable the @typescript-eslint/prefer-includes eslint rule
1650087069 [sc-5902] ext: Rename destSelector to destination
1650087069 [sc-5902] ext: Rename SpreadsheetCellDestSelector to SpreadsheetCellDestination
1650087069 [sc-5902] ext: Rename CSSDestSelector to CSSDestination
1650083331 [sc-5902] ext: Rename SnippetInputDestination to SnippetBodyDestination
1650067125 [sc-5902] server: Test mappings routes
1650067125 [sc-5902] server: Mappings route
1650067125 [sc-5902] server: Mappings handler
1650067125 [sc-5902] server: Destinations handler
1650067125 [sc-5902] server: Create mappings table
1650067125 [sc-5902] server: Create destinations table and alter matchers to include destinations
1650067125 [sc-5902] server: Add matchers models for DestMatchers
1650067125 [sc-5902] server: Add mappings models
1650067125 [sc-5902] server: Add destinations models
1650067125 [sc-5902] ext: Use new Matcher and DestSelector models
1650067125 [sc-5902] ext: Use mappings routes instead of stitches routes
1650067125 [sc-5902] ext: Use \`mappingsv2\` instead of \`mappingsStore\` in local storage
1650067125 [sc-5902] ext: Update Mapping interface with new DestSelector format
1650067125 [sc-5902] ext: Rename sinkUrl -> sinkUri
1650067125 [sc-5902] ext: Iterate through each dest matcher when finding element
1650067125 [sc-5902] ext: Install monorepo on UI test
1650067125 [sc-5902] common: Rename destination \`paths\` property to \`matchers\`
1650067125 [sc-5902] common: Models for matchers
1650067125 [sc-5902] common: Models for mappings
1650067125 [sc-5902] common: Models for destinations
1650067125 [sc-5902] common: Deprecate stitches models and move to server
1650049160 [sc-6410] Update source seeds to insert into matcher table
1649955496 [sc-6515] Fix for each for index in Tribute
1649888826 [sc-6515] Add a lint rule to enforce for…of loops over \`.forEach(\`
1649888200 [sc-6351] Remove checklist autoshow experiment
1649887874 [sc-6070] Magical wrapped 2022
1649883735 [sc-6509] Calculate \`newSrcId\` in a useEffect
1649874872 [sc-6496] Change variable auto-suggest thresholds.
1649827335 [sc-5975] Add website section create endpoint
1649826292 [sc-5975] Migrate the existing base urls in the sources table to website sections as a seed
1649826292 [sc-5975] Create website sections table + schema
1649826292 [sc-5975] Create website sections for sources (both if it's specified in the input and if it's not provided - an older version scenario)
1649826292 [sc-5975] Add website section to the source schema
1649826292 [sc-5975] Add new route to get all website sections
1649826292 [sc-5975] Add clarifying comment on base url field
1649823045 [sc-643] extension: Make suggestion separator and value rendering dependent on the values, not the type
1649818562 [sc-6102] Apply the scrollLeft offset to position the dropdown for input elements that have overflowing text
1649817628 [sc-643] conditionally render magic 'fill everything' suggestion
1649817628 [sc-643] background: Update group label for magic fill in sheets to 'Remaining webpages'
1649817628 [sc-643] Replace dropdown magic fill text with 'Fill everything'
1649817628 [sc-643] Add a helper to create standard suggestions from srcMatches
1649817289 [sc-643] extension: Add suggestion to fill a single field when mapping exists
1649810211 [sc-6136] Log some info when addEventListener is not defined
1649804105 [sc-6474] Limit autosuggest shortcuts to strings > 11 characters
1649803757 [sc-6485] Do not null out snippet.parent_id on deletes
1649802977 [sc-6485] Remove foreign key constraint on snippets.parent_id
1649782245 [sc-6463] Increase autosuggest shortcuts default for legacy server config
1649735723 [sc-5003] Scroll newly added variable into view
1649735723 [sc-5003] Move variables list component to functional component
1649735264 [sc-6464] Remove duplicated @import prefix and related suffix on ShadowWrapper stylesheet lists
1649715513 [sc-6441] Open onboarding from pro beta upgrade
1649715513 [sc-6441] Deprecate pro beta ugprade checklist intro
1649714686 [sc-5704] Use 'Add' instead of 'Edit' when there are no variables
1649713820 [sc-6463] Roll out autosuggest to 100% and increase threshold
1649713526 [sc-6444] Change date on force sign up feature flag
1649712455 [sc-5542] Use ShadowWrapper for loading stylesheets
1649712455 [sc-5542] Add helper to ShadowWrapper for loaded stylesheets
1649551130 [sc-5776] Clarify that 'recently closed' is referring to tabs
1649444159 [sc-6433] Remove onboarding page in workspace
1649443128 [sc-6215] sever: Handle delete snippet logic when snippets to delete have child snippets
1649443128 [sc-6215] server: Upsert snippet with parentId when passed in
1649443128 [sc-6215] server: Test to ensure that parentId is retained when there is no parentId passed into an update
1649443128 [sc-6215] server: Test to ensure that deleting parent snippets nulls child snippet references
1649443128 [sc-6215] server: Test to ensure parentId is set appropriately on upsert
1649443128 [sc-6215] server: Migration to add parent id to snippet table
1649443128 [sc-6215] extension: Save snippet with parentId when accepting a shared shortcut
1649443128 [sc-6215] extension: Retain original snippetId for share flow
1649443128 [sc-6215] Add parentId to snippet models
1649442502 [sc-6385] Update referral credits share UTMs
1649442502 [sc-6385] Update referral credits sequences and deprecate old ones
1649442502 [sc-6385] Update referral credits displays to sequences
1649442502 [sc-6385] Move proBetaUpgradeExperienceEnabled to beta feature flags
1649438116 [sc-6404] Deprecate lastCopiedForAUrl
1649438114 [sc-6404] Show autosuggest variables prompt on copy
1649438094 [sc-6404] Update default autosuggest thresholds
1649438094 [sc-6404] Import nit fixes
1649438094 [sc-6404] Enabled autosuggest variable creation
1649438094 [sc-6404] Edit autosuggest shortcut code
1649438094 [sc-6404] Create autosuggest variable prompt help card
1649435577 [sc-6419] Add tracking for team tab impression
1649435577 [sc-6419] Add tracking for team bulk share
1649435577 [sc-6419] Add tracking for cloning a team shortcut
1649435577 [sc-6419] Add team shortcut counts to Amplitude user properties
1649435577 [sc-6419] Add optional property to snippet.save for team sharing dropdown selection
1649433990 [sc-6444] Roll out force sign up to 100% of new users
1649340666 [sc-6363] Extract share button fragment and onClick  shortcut handler - Extract team collection ids for re-usability
1649340666 [sc-6363] Add new custom single select dropdown menu
1649340666 [sc-6363] Add new bulk share dropdown menu with team sharing option
1649299941 [sc-6161] server: Promote some popular labels and rename others (take 2)
1649299941 [sc-6161] server: Add a util. to upsert using either the PK or unique constraint
1649276742 [sc-6282] Hide filter banner from teams tab view
1649276742 [sc-6282] Add team dropdown to shortcut row - Add props to shortcut row for draft team selection state and teams enabled - Save team selections when saving a shortcut - Set default team selections when adding a new shortcut - Adjust styling of shortcut row edit buttons to account for team dropdown
1649276742 [sc-6282] Add new teams dropdown component - Add new models for team dropdown selections and Private team option - Add helper functions for getting team collections
1649276742 [sc-6282] Add draft state for team share dropdown and slice functions - Add ability to set team sharing selections for new unsaved shortcut  - Update callers of addUnsaved to use new param format
1649276741 [sc-6282] Remove team collection from tag dropdown - Add team icon to tag filter dropdown and tags on shortcut row
1649276741 [sc-6282] Remove default fill color from Teams icons
1649276741 [sc-6282] Add optional icon to tags
1649276056 [sc-6282] Remove temp disableEdit and disableDelete from tag dropdown
1649276056 [sc-6282] Add additional type support to options-page-slice omit function
1649260731 [sc-6405] Fix options page signup show logic
1649258790 [sc-5732] Remove unused maybeShowTryShortcutsFrame
1649258384 [Snyk] Security upgrade moment from 2.29.1 to 2.29.2 fix: extension/package.json & extension/package-lock.json to reduce vulnerabilities
1649206038 [sc-6424] server: Add missing space in magical log_format before $http_x_amzn_trace_id
1649204812 [sc-6424] server: Prefer X-Amzn-Trace-Id over our own requestId for tslog
1649204812 [sc-6424] server: Include a sanitized X-Extension-Version header in tslog message
1649204812 [sc-6424] Add X-Amzn-Trace-Id to nginx's access.log
1649202018 [sc-6427] Temporarily change back options promo frames before pro-beta specific frame is live
1649200668 [sc-6422] Fix content panel fonts
1649187269 [sc-2779] Include healthd.conf into \`location / {\` so it still applies
1649179297 [sc-6420] config: Increase sendSnippetExpansionEventsIntervalMinutes to 3 hours
1649175818 [sc-6416] server: Fail on Redis connection errors rather than blocking indefinitely.
1649175334 [sc-2779] server: Include X-Extension-Version and upstream response times in access logs
1649142843 [sc-6388] Update options promo frame to have pro beta version
1649088373 [sc-6371] Unit test for cloneElementSrcMatch
1649088373 [sc-6371] Generate new SrcSelector id and matcher ids when cloning a SrcMatch
1649004769 [sc-6356] Deprecate options shortcut placeholders help card
1649004768 [sc-6356] Deprecate placeholders update view
1648845616 [sc-3686] server: Move legacy/deprecated AppConfig members to their own interface and definitions
1648845616 [sc-3686] ext: Rename ha-config.ts to config.ts
1648845616 [sc-3686] common: Remove a bunch of const/export/interface for AppConfig
1648845616 [sc-3686] Move ext. ha-config to common/config/app-config.ts
1648845616 [sc-3686] Move ext. fill-strategy-actions to common/config/
1648845616 [sc-3686] Move ext. fill-strategies to common/config/
1648845616 [sc-3686] Move \`ALLOWED_ATTR\` to fill-strategy-actions to avoid an import cycle
1648845616 [sc-3686] Copy server fill-strategy-actions over common/config/fill-strategy-actions.ts
1648845616 [sc-3686] Copy server fill-strategies over common/config/fill-strategies.ts
1648845616 [sc-3686] Copy server app-config over common/config/app-config.ts
1648845606 [sc-3686] Move all config values to common/config/app-config.ts
1648844977 [sc-6386] server: Convert error to warning when a duplicate snippet collection name is requested
1648835830 [sc-6384] Roll out referral credits to everyone
1648825437 [sc-6383] Provision more job functions to pro beta
1648786610 [sc-6359] Use a try catch on stitches get route and add types for \`req\` and \`res\`
1648786375 [sc-6359] Convert source paths to matchers before converting to legacy paths
1648786341 [sc-6359] Use types with stitch sources models
1648778673 [sc-6381] Remove superfluous eslint disable
1648778668 [sc-6381] common: fix all \`consistent-type-imports\` violations
1648778563 [sc-6381] server: fix all \`consistent-type-imports\` violations
1648778481 [sc-6381] extension: fix all \`consistent-type-imports\` violations
1648778104 [sc-6381] Enable consistent-type-imports to reduce circular references
1648777603 [sc-6377] Specify the SrcSelector type for all LabeledSrcSelector, SrcMatch, and SrcElement
1648749241 [sc-6377] ext: Convert LabeledSrcSelector, SrcMatch, and SrcElement to generics
1648743727 [sc-6248] server: csgBaseConfig.whitelist should be an array of simple selectors, not an array of attribute names.
1648743727 [sc-6248] ext: Use a shared callback for CSG to exclude classes/IDs/tags
1648743727 [sc-6248] ext: Use .each for most getSelectorsForSource tests
1648743727 [sc-6248] ext: Support class ignore/exclude RegExps in AppConfig
1648743727 [sc-6248] ext: Rename \`selectorConfig\` to \`OPTIMAL_SELECT_CONFIG\`
1648743727 [sc-6248] ext: Reference MAGICAL_VARIABLE_CSS_CLASSES via AppConfig
1648743727 [sc-6248] ext: Move excluded attributes for selectors to AppConfig
1648743727 [sc-6248] ext: Move \`containsNumberSequence\` pattern to AppConfig
1648743727 [sc-6248] ext: Make an \`attributeNameToGlobs\` helper available for other attribute lists to reuse.
1648743727 [sc-6248] ext: Don't initialize Sentry in jest tests
1648743727 [sc-6248] ext: Check optimal-select results before using its selector
1648743727 [sc-6248] ext: Call the \`subscribeToStoreSelector\` with the initial value, as documented
1648743727 [sc-6248] ext: Add a helper to identify the type of simple CSS selector that the CSG deny list callback is called with.
1648743727 [sc-6248] common: Enforce eslint sort-keys
1648743727 [sc-6248] Move priority matcher attribute names to common/config/matchers.ts
1648743727 [sc-6248] Move is-* CSS class exclude to AppConfig
1648743727 [sc-6248] Move MAGICAL_VARIABLE_CSS_CLASSES to common/
1648743727 [sc-6248] Move CSS_KEYWORD_CLASS_EXCLUDES to its own common/ file
1648740280 [sc-6248] ext: Use \`isSelectorRandomlyGenerated\` for CSG rather than our duplication of it
1648740280 [sc-6248] ext: Make selector ignore/exclude methods independent of optimal-select
1648740280 [sc-6248] ext: Correct names/types of baseSelectorConfigIgnore method arguments
1648740161 [sc-6368] vscode: Enable css.format.spaceAroundSelectorSeparator to match our current style
1648740161 [sc-6368] ext: Replace \`getGlobalConfigFromStore()\` and \`getUserInfoFromStore()\` callers with \`store.getState().…\` ones
1648740161 [sc-6368] ext: Clamp performance test values based on maximums from CI
1648695782 [sc-6368] ext: Don't clone the result of \`getUserFeatureFlagsFromStore\` but make it Readonly
1648695782 [sc-6368] ext: Don't clone the app config once per alarm
1648685704 [sc-6367] Remove all split variables with no matchers
1648685209 [sc-6365] Proactively check for a source id and path source id mismatch when a source is created
1648672345 [sc-6239] Remove missing variables message from edit variables view
1648672345 [sc-6239] Add tooltip to the flag next to not showing variables
1648665554 [sc-6358] Add tracking for panel tab selection
1648656230 [sc-6262] Use the page idle helper instead of using timeouts
1648656131 [sc-6262] Add page idle helper
1648656126 [sc-6262] Remove timeout between 'keysBeforeMeasurement' and 'sendKeys'
1648588525 [sc-6262] Add missing await when finding an element
1648579538 [sc-6344] ext: Fix eslint react/no-unused-prop-types violations and false positives.
1648579538 [sc-6344] Upgrade @typescript-eslint/{eslint-plugin,parser} to 5.17.0 to support TS v4.6.x
1648579081 [sc-6346] Add import/no-cycle rule to the server
1648531179 [sc-6339] Dedupe variable list by value in the variable picker
1648488981 [sc-6327] Show promo frame to pro beta users
1648478610 [sc-6146] Add unit test for forms magic fill listener
1648478610 [sc-6146] Add UI test for magic fills from existing mappings
1648477996 [sc-6146] Update to chromedriver 99
1648477996 [sc-6146] Allow jest to run UI tests in subdirectories
1648477996 [sc-6146] Add storage-utils file
1648477996 [sc-6146] Add more storage helpers for UI tests
1648477996 [sc-6146] Add basic page for variables and mappings
1648276103 [sc-6324] ext: Pro Beta Upgrade Checklist Panel CSS file typo fix
1648275987 [sc-6323] ext: Listen for resizes of overflow:auto inside <PortalFrame>
1648275987 [sc-6323] ext: Cleanup placeholder dialog markup/styles
1648249811 [sc-6322] Exclude Zendesk \`\.LR[a-z]+\` classes from CSS matchers
1648248872 [sc-6235] Dedupe srcMatches by value in panel
1648248872 [sc-6235] Dedupe srcMatches by value in dropdown
1648248872 [sc-6235] Add util function to dedupe src matches by value
1648247361 [sc-6318] server: Migrate matchers data.rule to be an array of strings
1648240271 [sc-5708] Focus on current tab in variable picker when creating new shortcut
1648240271 [sc-5708] Add test for sortSrcPagesBasedOnCurrentUrl
1648238250 [sc-6228] extension: change default dialog margin-block
1648238250 [sc-6220] extension: makes placeholder dialog scrollable
1648230729 [sc-6319] Add feature flag for force sign up
1648156326 [sc-6308] Increase options tab list font size to 16px
1648071174 [sc-6309] top-level: Upgrade Typescript to version 4.6.2
1648070991 [sc-6309] server: Upgrade Typescript to version 4.6.2
1648070991 [sc-6309] ext: Upgrade Typescript to version 4.6.2
1648059827 [sc-6302] server: Return an empty array for paths (instead of undefined) if the source is an element source
1648059827 [sc-6302] server: Don't return partial rules for older clients
1648059827 [sc-6302] ext: Don't find elements for arrays with 2+ entries (until we implement ShadowDOM stuff)
1648059827 [sc-6302] common: Use an array of strings instead of a string for \`CSSMatchers\`
1648052707 [sc-6306] Fix newly added shortcut highlighting by removing concat from options shortcut list rendering
1647980845 [sc-6007] ext: Add a test to ensure we don't generate garbage selectors for elements inside shadow DOM.
1647979535 [sc-6007] ext: Upgrade css-selector-generator to v3.6.0
1647978167 [sc-6298] ext: Expose \`loglevel\` on the global in all content scripts, not just the options page
1647978167 [sc-6298] ext: Expose \`Magical\` with test/debugging helpers on the global in all content scripts
1647974819 [sc-6265] Use transactions with async/await in snippet collections upset
1647974819 [sc-6265] Upgrade knex
1647974819 [sc-6265] Don't insert empty arrays because knex with throw an error
1647974819 [sc-6265] Create migration to hash matchers data for unique index
1647973843 [sc-6210] Add sales people to pro beta cohort
1647968295 [sc-6267] Use variables enabled as source of truth
1647966420 [sc-6294] don't render shortcut list dialogs for teams tab - unmount team shortcut list when not on a team tab
1647958819 [sc-6295] Always show team shortcut row buttons to increase discoverability
1647903257 [sc-6228] Change autosuggest threshold to 5
1647895642 [sc-5837] ext: Rename CSS_CLASS_EXCLUDE to CSS_KEYWORD_CLASS_EXCLUDES
1647895642 [sc-5837] Unify CSG and optimal select configs for sources and destinations
1647894438 [sc-6227] Turn on referral credits features values
1647894438 [sc-6227] Edit test for referral credits
1647886095 [sc-6266] Add options shortcut help card into manifest
1647881644 [sc-6260] Fix css for img in help panels
1647879705 [Snyk] Security upgrade ckeditor4 from 4.17.0 to 4.18.0 fix: extension/src/ui-tests/package.json & extension/src/ui-tests/package-lock.json to reduce vulnerabilities
1647645527 [sc-6252] Add top-level package.json to server deploy artifact
1647643971 [sc-6252] server: install top-level package.json on deploys
1647641508 [sc-6250] Use correct type in URL association migration
1647638766 [sc-6200] Code style fixes for options-app useRequest
1647638766 [sc-6200] Add clone button to team shortcuts
1647638739 [sc-6200] Update receive shortcuts dialog to use new shortcut cloning util
1647638739 [sc-6200] Update dialogs to use consistent toast getters
1647638739 [sc-6200] Move shortcut cloning logic to shortcut util
1647638739 [sc-6200] Export toast getters from options
1647635742 [sc-6188] Show pro beta variable suggestion
1647635720 [sc-6188] Create pro beta version of variable suggestion
1647632203 [sc-6179] Show variable suggestion panel help card
1647632203 [sc-6179] Refactor variable suggestion content
1647632203 [sc-6179] Add padding to help panels
1647631763 [sc-5993] server: Model function to promote labels
1647631763 [sc-5993] server: Add findAllPublicUserSourceLabels to model to retrieve models with public labels and sources for promotion
1647631763 [sc-5993] Migrate public user source labels to default source labels
1647625019 [sc-6145] Test for regex matching
1647625018 [sc-6145] Show variable suggestion options help card
1647624077 [sc-6145] Create variable suggestion help card
1647624058 [sc-6145] Refactor options shortcut help card close and classnames
1647623966 [sc-6145] Move options shortcut help card
1647623888 [sc-6145] Refactor props in options shortcut row
1647623629 [sc-6145] Add variable suggestion patterns in config
1647622325 [sc-6143] Update workspace to fetch and show team shortcuts and sidebar when team tab is active
1647622325 [sc-6143] Render team options sidebar when team id prop is set in options sidebar component
1647622325 [sc-6143] Ensure hidden attribute takes precedence over other styles
1647622325 [sc-6143] Add unit tests for getTeamSnippetsFromServer
1647622325 [sc-6143] Add team shortcuts to localstorage and redux global store
1647622325 [sc-6143] Add team shortcut capability to options shortcut list to render team shortcuts when team id prop is set
1647622325 [sc-6143] Add empty state graphic to options shortcut list when there are no shortcuts - separate from the no-filter state which shows messaging around filters
1647622325 [sc-6143] Add a teams mode to options shortcut row
1647622325 [sc-6143] Add a disabled state for snippet body editor
1647622324 [sc-6143] Add teams to user model
1647556611 [sc-6129] autofill-sheets: add test for creating new mapping
1647556611 [sc-6129] autofill-forms: add test for creating new mapping
1647556611 [sc-6129] Move getGoogleUserForSpreadsheet to own file
1647556611 [sc-6129] Add test for getGoogleUserForSpreadsheet
1647556611 [sc-6129] Add consts for GSheet cell ID and cell name attr
1647552514 [sc-6129] template-source: remove unnecessary tab state inits
1647552514 [sc-6129] mocks/tab-state: Add more mocks and sane defaults
1647552513 [sc-6129] Move other DOM observables to dom-observable.ts
1647552513 [sc-6129] Mitigate content-ui circular reference
1647552513 [sc-6129] Add tests for getMappingsForSinkUrl
1647552513 [sc-6129] Add test helper for mappings
1647552513 [sc-6129] Add \`jest-esm-transformer\` for js modules with Jest
1647536239 [sc-6219] Update pro beta onboarding path
1647527247 [sc-6090] Update snippet collection routes to handle team collection - getting all labeled collections for a user - adding collection items - removing collection items
1647527247 [sc-6090] Add team_id to snippet_collections table
1647527247 [sc-6090] Add seed for default team collections
1647462558 [sc-6125] Move options time saved to component
1647462558 [sc-6125] Move options footer to component
1647462558 [sc-6125] Move dialogs outside options main element
1647462558 [sc-6125] Extend top nav bar if teamsEnabled to account for tab sidebar
1647462558 [sc-6125] Add tabs to workspace if teamsEnabled - tabs will be for workspace and teams view - teams tab contains only placeholder content to be implemented later
1647462558 [sc-6125] Add new options tab component and active tab state
1647462558 [sc-6125] Add new grey color variable and tab icons
1647461472 [sc-6105] Disable team collection (tag) edit/delete buttons
1647461472 [sc-6105] Add teamId to SnippetCollectionMetadata
1647461472 [sc-6105] Add support for disabling edit/delete buttons on a per-tag basis - this will be used to allow team sharing prior to building out the teams sharing UI
1647459295 [sc-5904] Move legacy matchers to common/models/matchers.ts
1647458843 [sc-5904] server: Join sources and matchers when getting all sources for user
1647458843 [sc-5904] server: Delete unused source update logic
1647458843 [sc-5904] server: Create matchers when creating new source
1647458843 [sc-5904] server: Create matchers table and migrate sources.paths data
1647458843 [sc-5904] ext: Install monorepo dependencies when building the extension
1647458843 [sc-5904] common: Rename SrcVariableMatcher -> LegacySrcVariableMatcher and deprecate
1647458843 [sc-5904] common: Matcher interfaces
1647458843 [sc-5904] Handle LegacySrcVariableMatcher in selector.ts
1647458843 [sc-5904] Fix closing of JSDoc comments
1647458611 [sc-5904] Fix missing updates in extension/package-lock.json from Snyk update of ui-tests.
1647456565 [sc-6184] Actually fix the panel graphic size
1647454789 [sc-6041] Add test for teams handler
1647454789 [sc-6041] Add teamsEnabled feature flag
1647454789 [sc-6041] Add teams to user/info
1647454789 [sc-6041] Add teams model and handler
1647454789 [sc-6041] Add teams migration and schema
1647454789 [sc-6041] Add default team seed
1647408110 [sc-6081] server: Add a Pro-Beta cohort for mappingsEnabled:true
1647401764 [sc-5212] Use built-in TS types for onSubmit/onChange/onReset callbacks
1647401764 [sc-5212] Create DeleteAllVariablesDialog
1647401719 [sc-6189] Roll out sharing on pro beta to 50%
1647296087 [sc-6184] Fix variable insert help graphic size
1647282333 [sc-6057] Show Options onboarding page from params
1647282318 [sc-6057] Rename Options page params
1647018215 [sc-6181] Rename unsupported sites help card
1647018213 [sc-6181] Refactor help cards to use shared component
1647017694 [sc-6181] Rename panel introduction and pro beta upgrade checklist
1647017632 [sc-6181] Remove dropdown variable help card
1647016791 [sc-6180] Change help panel to support panel
1646953024 [sc-6114] server: Make sources paths and metadata backwards compatible
1646952935 [sc-6114] server: add \`metadata\` to \`Source\` interface
1646952935 [sc-6114] server: Update seeds with metadata
1646952935 [sc-6114] server: Migrate matchers with type \`modifier-metadata\` out of paths col and to metadata col
1646952935 [sc-6114] extension: Add \`metadata\` to \`BaseSource\` interface
1646952935 [sc-6114] common: Deprecate \`ModfierSrcMatcher\` and define \`VariableMetadata\`
1646940737 Partially revert "[sc-6161] server: Promote some popular labels and rename others"
1646940711 [sc-6178] Remove Google Docs from expansion unsupported site list
1646856163 [sc-6118] ext: Wait for data to be initialized in getUnsupportedFeaturesForSite
1646851267 [sc-6165] Add eslint alphabetal rule for localstorage
1646847604 [sc-6163] Add email check for desktop link from webflow
1646845763 [sc-6161] server: Promote some popular labels and rename others
1646845028 [sc-5516] Roll out closed tabs to 100% of pro beta users
1646774671 [sc-5728] server: Treat server static scripts as non-module sources
1646774671 [sc-5728] Port webflow head code to server
1646773189 [Snyk] Fix for 8 vulnerabilities fix: extension/src/ui-tests/package.json & extension/src/ui-tests/package-lock.json to reduce vulnerabilities
1646768217 [sc-6135] Check tab state exists before removing it
1646767410 [Snyk] Security upgrade tinymce from 5.8.2 to 5.10.0 fix: extension/package.json & extension/package-lock.json to reduce vulnerabilities
1646759578 [Snyk] Fix for 2 vulnerabilities fix: server/package.json & server/package-lock.json to reduce vulnerabilities
1646757881 [sc-6134] Ramp up pro beta cohort percentiles
1646689891 [sc-6128] Fail MR pipelines if UI tests do not pass
1646664789 [sc-6116] Update try variables url
1646433877 [sc-6098] Update list of unsupported sites in appConfig
1646433877 [sc-6098] Remove unsupported site view from right-rail
1646433877 [sc-6098] Open UnsupportedSitePanel when user tries to expand on unsupported site
1646433877 [sc-6098] Create UnsupportedSitePanel
1646433877 [sc-6098] Add UnsupportedSitePanel to fab
1646425191 [sc-6096] change referral credit update view to use CopyPanelShareURL
1646424718 [sc-6096] update CopyPanelShareURL to support inline copy button - add new styling to share.css
1646422661 [sc-6052] Add pro beta onboarding frame
1646422526 [sc-6107] Add checklist component padding for visual pleasure
1646421598 [sc-6097] Fix dialog error
1646417961 [sc-6075] Update dialog deeplink to open top shortcut dialog
1646417961 [sc-6075] Update close dialog param logic
1646417961 [sc-6075] Create top shortcut dialog
1646417961 [sc-6074] Reformat imports
1646372787 [sc-6101] ext: Lint rule to catch useEffect with no inputs argument
1646372341 [sc-6101] ext: Lint rule to prevent track() from being called directly inside a (P)react component
1646363866 [sc-3191] Show unsupported site view when user attempts to insert a shortcut on unsupported domain
1646363866 [sc-3191] Fix pro-beta-upgrade-update.css styling leak by removing unneccessary stylesheet import in right-rail.html
1646363866 [sc-3191] Configure unsupported domains as regex patterns
1646363866 [sc-3191] Add unsupported site handling to default view
1646363866 [sc-3191] Add styling for unsupported site view
1646363866 [sc-3191] Add HandWithBrokenWand svg to graphic.tsx
1646339030 [sc-6085] Pass snippet placeholder form ref via callback
1646332505 [sc-6091] Add settings deeplink
1646327131 [sc-6083] ext: Dropdown: Fix condition to ignore \`mousedown\` events in documentMousedown that happen inside the dropdown shadow root.
1646293249 [sc-6072] ext: TributeRange: Use the correct window to get the dimension for textarea/input
1646293249 [sc-6072] ext: TributeRange: Fix incorrect isFirefox check
1646293249 [sc-6072] ext: TributeRange: Avoid a negation in an \`if\` with an \`else\`
1646293249 [sc-6072] ext: TributeRange: Add debug logging in isMenuOffScreen
1646293249 [sc-6072] ext: Dropdown left offset for the trigger text needs to happen before offscreen calculations
1646283567 [sc-6072] ext: Show the dropdown at the max. z-index
1646282259 [sc-4322] ext: Trivial filling cleanups
1646270099 [sc-5647] field-perf: Increase perf ceiling expectations
1646269000 [sc-5647] snippet-body: Wait for editors to load in tests
1646269000 [sc-5647] snippet-body: Add missing waits
1646269000 [sc-5647] field-perf: Increase test delay after \`executeScript\`
1646269000 [sc-5647] ate-forms: increase test timeout
1646262405 [sc-5647] ui-tests: Increase default timeout to 60 seconds
1646262405 [sc-5647] options-perf: increase timeouts
1646262405 [sc-5647] magical-sources: Fix source references
1646262405 [sc-5647] magical-forms: Move dropdown const outside of fill-utils
1646262405 [sc-5647] magical-forms: Fix "Object is possibly 'undefined'" errors
1646262405 [sc-5647] ate-forms: Re-enable 'no-unnecessary-type-assertion'
1646262405 [sc-5647] ate-forms: Increase wait time for computeActualValue
1646262405 [sc-5647] ate-forms: Ensure date is always current
1646262405 [sc-5647] Use Jest's print methods in custom perf matcher
1646262405 [sc-5647] Skip tests that rely on external websites
1646262405 [sc-5647] Simplify Docker README
1646262405 [sc-5647] Change AUTO_OPENED_TABS back to one
1646155225 [sc-6068] Use useeffect on signup page tracking
1646094638 [sc-6021] return user from maybeSetUserBetaCohort
1646094638 [sc-6021] Add new users to either text expansion or pro beta lists
1646094638 [sc-6021] Add new provisioned users onto pro beta mail drip and remove from text expander list
1646093893 [sc-6056] Harpaul's shared shortcuts variable edition
1646093009 [sc-6053] Make onboarding url configurable
1646091767 [sc-5347] Move Dropdown to Shadow DOM
1646091244 [sc-6050] Show variable insert help card on first variables save
1646091244 [sc-6050] Fix imports to use full path
1646091244 [sc-6050] Create variable insert help card
1646090640 [sc-5017] Focus on current tab in dropdown using groupSortOrder
1646089896 [sc-6051] Use consistent \`closedAt\` date for new \`SrcPage\`s
1646089141 [sc-6046] Create create new shortcut and open options page website event
1646088063 [sc-6040] Use new deeplink logic for share app
1646088063 [sc-6040] Refactor deeplink dialog logic
1646088063 [sc-6040] Move share app close callback into the share app dialog
1646088063 [sc-6040] Deeplink to settings dialog from autosuggest
1646088063 [sc-6040] Add suggestion length in autosuggest tracking
1646082166 [sc-6047] Fix pro beta upgrade tracking and FF
1645898839 [sc-6049] ext: Expander: Only regenerate \`snippetsByTrigger\` if snippets change
1645898725 [sc-6049] ext: Add a helper to only subscribe to changes to a subset of the Redux store
1645898217 [sc-6049] ext: Expander: Don't cache srcPagesForOpenTabs in a store subscriber
1645830946 [sc-5886] Add test for \`updateRecentlyClosedTabs\`
1645830606 [sc-5886] Use SrcSelector test helper instead of duplicating function
1645830606 [sc-5886] Use Promise.all to fetch local storage for closed tabs
1645830606 [sc-5886] Update recently closed \`SrcPage\`s once per source update
1645830606 [sc-5886] Pass in User feature flags to updateRecentlyClosedTabs
1645830606 [sc-5886] Pass feature flags to SrcPage helpers
1645830606 [sc-5886] Move logic for closed tabs into separate function
1645830606 [sc-5886] Check closed tabs flag earlier
1645830606 [sc-5886] Await \`srcPagesForClosedTabs\` computation
1645830606 [sc-5886] Allow updateRecentlyClosedTabs to accept an array of SrcPage
1645830606 [sc-5886] Add unit tests for \`updateSourcesOnClosedTabs\`
1645830606 [sc-5886] Add manual mock for AppConfigManager
1645826748 [sc-5285] server: promote userSourceLabels to defaultSourceLabels if labels are public
1645826748 [sc-5285] server: label should not over write existing default source label
1645826748 [sc-5285] server: add unit test for default-source-label promotion
1645826748 [sc-5285] server: Remove some unnecessary uses of the explicit knex select<…> generic.
1645826748 [sc-5285] server: Insert defaultSourceLabels if the label is public
1645826748 [sc-5285] server: Find labels by ids
1645826748 [sc-5285] nit: alphabetize DEFAULT_SOURCE_LABELS
1645819430 [sc-5849] Import react-lottie-player and provide example
1645819430 [sc-5849] Add lint rule to disallow importing the normal Lottie player
1645807702 [sc-6044] Pro beta upgrade video should not be scrollable
1645801711 [sc-6014] ramp referralCreditsEnabled FF to 50%
1645754395 [sc-6019] Show correct styling for rate app modal
1645740282 [sc-5998] Add pro beta provisioning from referral credits
1645730677 [sc-5968] Prioritize notifications in order of chronology
1645660878 [sc-5873] Remove hasOpenedViaBrowserAction from placeholders modal open
1645642312 [sc-6001] Fix path to browser-performance.json in submit-performance-metrics.mjs
1645639957 [sc-6001] ext: Submit browser test performance data to CloudWatch
1645632819 [sc-5853] add sync storage installed flag for tracking first install for chrome profile
1645632819 [sc-5853] add hasSyncStorage and isFirstInstall to extension installed event
1645566665 [sc-5734] ext: Tweaks to ContentFrames so they work with auto-height
1645566572 [sc-5734] ext: Wait for PortalFrame height to be calculated before displaying
1645566572 [sc-5734] ext: Support auto-height calculations for <PortalFrame>
1645566572 [sc-5734] ext: Rename popup.css to content-panel.css to be more accurate
1645566572 [sc-5734] ext: Remove some more ContentDialog hard-coded heights
1645566572 [sc-5734] ext: Convert PortalFrame to a functional component
1645566572 [sc-5734] ext: Bump up fragile delay for variable label dialog focusing
1645541261 [sc-5996] Use top-most same-site window for calculating offset of content editable
1645541261 [sc-5996] Make similar dropdown position adjustments due to frames as the contenteditable code path
1645213257 [sc-5995] ext: Report extension performance numbers to GitLab
1645213257 [sc-5995] ext: Remove webdriver and chromedriver packages from ui-tests/package.json
1645213257 [sc-5995] ext: Don't hardcode registry domain and project path
1645213257 [sc-5995] ext: Bump chromedriver version to 98.0.1
1645213257 [sc-5995] ext: Also run 'Extension - Install Dependencies' job on develop
1645213257 [sc-5995] ext: Add junit.xml for UI tests
1645213257 [sc-5995] ext: 'Extension - UI Test' job needs 'Extension - Build'
1645205875 [sc-5992] ramp referralCreditsEnabled FF to 25%
1645132363 [sc-5825] ramp pro beta text variable cohort to 1% and add unit tests
1645003765 [sc-5791] Enable no-mixed-operators eslint rule
1645003765 [sc-5791] Enable eqeqeq eslint rule
1645003761 [sc-5791] Enable prefer-const eslint rule
1645003455 [sc-5791] Enable arrow-parens and arrow-body-style eslint rules
1645003321 [sc-5791] Enable prefer-destructuring eslint rule
1645003213 [sc-5791] Enable the max-len eslint rule
1645003122 [sc-5791] Enable operator-linebreak eslint rule
1645002974 [sc-5791] Switch to 2 space indentation
1645000242 [sc-4322] ext: Use element.style to set \`all:initial\` without being blocked by CSP.
1645000242 [sc-4322] ext: Drop unused \`document\` member from \`FillOptions\`
1645000242 [sc-4322] ext: Delete usage of DropdownVariableHelp since it probably should be in topLevelUI, is disabled for all, and is display:none
1645000242 [sc-4322] Use correct window and document references in getContentEditableCaretPosition
1645000242 [sc-4322] Use correct event name in function names (click -> mousedown)
1645000242 [sc-4322] Tribute: Remove the unused \`externalTrigger\` property.
1645000242 [sc-4322] Simplify and rename TributeRange.getDocument and getWindow
1645000242 [sc-4322] Remove unnecessary 'menu' variable
1645000242 [sc-4322] Enable no-unused-vars rule and cleanup related code
1645000242 [sc-4322] Don't disable eslint rules incompatible with TS for JS files
1644999565 [sc-4322] server: Silence express.urlencoded extended deprecation warning
1644969855 [sc-4372] Build extension in build stage
1644969855 [sc-3970] Use dependency cache for the lint/test job
1644969855 [sc-3970] Update test driver to work inside Docker
1644969855 [sc-3970] Remove \`jest-environment-selenium\` jest environment
1644969855 [sc-3970] Add job for UI tests
1644969855 [sc-3970] Add build step for installing and caching dependencies
1644969550 [sc-3970] Re-build UI-test image when Dockerfile changes
1644969550 [sc-3970] Re-build UI test image weekly
1644969550 [sc-3970] Add Docker file for UI tests to run in Gitlab CI
1644968151 [sc-3970] Remove unused content in extension gitlab-ci.yml
1644948000 [sc-5962] increase autosuggest shortcuts FF to 50%
1644900446 [sc-5332] ext: Fix and re-enable template-source 'init' tests
1644896713 [sc-5689] Enforce interface member alphabetical ordering in config files
1644896713 [sc-5689] Enforce interface member (non-alphabetical) ordering everywhere
1644896713 [sc-5689] Consolidate AppConfig interfaces into /common/
1644886554 [sc-5689] Unify AppConfig interface properties
1644885311 [sc-5689] Sort AppConfig interfaces alphabetically
1644883551 [sc-5689] ext: Enforce member and key alphabetical ordering for global-state.ts
1644875594 [sc-5689] ext: Always enforce eslint sort-keys for config files
1644875585 [sc-5689] common: Always enforce eslint sort-keys for config files
1644619645 [sc-5302] server: Don't assume argument to \`isSrcVariableMatcher\` is an object
1644613687 [sc-5950] Add back refer checklist component without referral credits
1644600080 [sc-5842] Fix proBetaUpgradeExperience FF date to Feb 11 (merge conflict)
1644599927 [sc-5842] update referral credits pro beta provisioning test
1644599927 [sc-5842] Roll out referral credits feature flags
1644596849 [sc-5692] Update date for preexisting referrals
1644596848 [sc-5692] Send referral credits emails
1644594705 [sc-5692] Move referral credits types to appConfig in common
1644594088 [sc-5692] Only auto provision from referral credits if under feature flag
1644547115 [sc-5946] Fix referral credits item
1644543038 [sc-5689] eslint: Add a top-level eslint script with a shared config
1644541936 [sc-5689] ext: eslint: Enforce sort-keys with minKeys:12
1644541936 [sc-5689] eslint: Enable @typescript-eslint/no-unnecessary-type-assertion
1644533385 [sc-5689] ext: Enable React lint rule react/jsx-handler-names
1644533332 [sc-5689] ext: Enable React lint rule react/jsx-tag-spacing
1644530548 [sc-5938] Revert removal of 'Invalid event type' from Sentry ignoreErrors
1644523782 [sc-5938] server: Add more detailed Redis statistics to /info
1644523782 [sc-5938] ext: Stop using /info for extension connection checks
1644523782 [sc-5938] ext: Increase the server reachability cache TTL to 10s
1644523782 [sc-5938] ext: Await a server reachability request in progress rather than starting a new one
1644515532 [sc-5859] Promise.all() Users.createGuest() to guarantee order of events
1644515380 Revert "server: Disable server/test/utils/source-utils.test.ts for blocking server promotion"
1644512487 [sc-5926] ramp panel enabled to 100%
1644511421 [sc-5939] ext: Ensure all errors logged in Sentry are also logged in the console
1644457832 server: Disable server/test/utils/source-utils.test.ts for blocking server promotion
1644454687 [sc-5675] server: Report redis status in /info
1644454687 [sc-5675] server: Add debug logs to confirm redis reads/writes are working
1644454687 [sc-5675] server: Add cacheGet and cacheGetJSON helpers with TS types
1644454687 [sc-5675] Move SESSION_COOKIE_MAX_AGE to sessions model
1644454687 [sc-5675] Implements retrieveCachedReqUserData
1644454687 [sc-5675] Caching logic for users model
1644454687 [sc-5675] Caching logic for sessions model
1644454687 [sc-5441] Connect to redis
1644450784 [sc-5933] Share by email dialog won't send emails
1644446159 [sc-5932] ext: Allow providing a static MAGICAL_CSP_NONCE_PREFIX for reproducible builds
1644442736 [sc-5911] Fix magical icon in dropdown in panel
1644442460 [sc-5905] ext: autofill-forms: Don't use instanceof for checking event types from another document/window/global
1644436513 [sc-5922] Fix share component styling
1644434096 [sc-5914] Magical icon next to "Shortcuts" in dropdown is missing
1644384874 [sc-2877] server: Allow request bodies up to 10MB
1644384874 [sc-2877] nginx: Increase client_body_buffer_size and proxy_buffers to reduce disk I/O
1644384859 [sc-2877] server: Tell caches that app config shouldn't be cached longer than the update interval
1644384859 [sc-2877] server: Report server memory usage on /info
1644365054 [sc-5800] server: Don't use JSON logs when running tests
1644364348 [sc-5877] Update time saved footer share tracking
1644364323 [sc-5800] server: Use a 50% Sentry sample rate in pre-prod. app configs
1644364323 [sc-5800] ext: json-rpc methods return PromiseLike instead of Promise
1644364323 [sc-5800] ext: Unwrap intermediate PromiseLike in the json-rpc client.request() return value
1644364323 [sc-5800] ext: Put Sentry relaying from content to background behind a config flag
1644364323 [sc-5800] ext: Only allow specific Sentry \`context\` strings
1644364323 [sc-5800] ext: Initialize the background Sentry transport used to relay from content
1644364323 [sc-5800] ext: Improve sentry error message when not using Error
1644364323 [sc-5800] ext: Don't pass Error arguments as Sentry extra.arguments
1644364323 [sc-5800] ext: Add a sentry transport that relays through an extension background page/script
1644364323 [sc-5800] ext: Add a background server to receive Sentry transport requests from content
1644364323 [sc-5800] ext: Add a PickByType utility type to pick members of a type that have a specific type.
1644361907 [sc-5901] Only updated sources for closed tabs if the feature is enabled
1644361907 [sc-5901] Correctly pass in private/public sources to \`getBestSourcesForUrl\`
1644360953 [sc-5854] Update referral credits config to fit in one line on share view
1644360953 [sc-5854] Fix show app dialog from time saved on sidebar
1644360953 [sc-5854] Fix pro beta upgrade styling
1644360953 [sc-5854] Fix panel copy issue
1644360953 [sc-5854] Don't show time saved on checklist
1644357811 [sc-5867] Fix checklist next item prompt for refer
1644351943 [sc-5841] Re-add non referral credits share view
1644351943 [sc-5841] Re-add non referral credits share shortcuts UI
1644351943 [sc-5841] Re add old time saved UI
1644351943 [sc-5841] Re add old share app dialog UI
1644351943 [sc-5841] Re add old share app UI
1644351943 [sc-5841] Add invite friends button to time saved if no referral credits
1644340906 [sc-5882] Increase throttle to 400ms in background sources
1644337957 [sc-5882] Pass feature flags into getForURL
1644337940 [sc-5882] Remove all relevant 'srcSheetsMappings' code
1644337210 [sc-5882] Update callers of getForUrl to pass in sources
1644336261 [sc-5882] Pass sources into getForUrl
1644293440 [sc-5869] ext: Upgrade chromedriver to v97.x
1644293440 [sc-5869] ext: Tweak performance UI test syntax and expected times so they pass again
1644292794 [sc-5862][sc-5875] ext: Dialog: Add missing cancel event listener removal
1644292794 [sc-5862][sc-5875] ext: Dialog event listeners aren't added if there isn't a re-render after opening
1644292074 [sc-5872] Update referral credits styling
1644292074 [sc-5872] Show num referred on referral credits component
1644278771 [sc-5789] Find event global for EventTargets that are Document or Window (on top of Element)
1644277803 [sc-5656] Use openOrFocusOptionsTab() on install to prevent loss of active tab
1644269701 [sc-5848] Fix snooze panel height
1644268690 [sc-5876] Fix referral credits share URL
1644265325 [sc-5829] Update share URL function to include UTMs
1644265325 [sc-5829] Get share url with UTM campaigns from share views
1644265325 [sc-5829] Add UTM campaign into share emails
1644213012 [sc-5863] server: Log more details about errors refreshing Google access tokens
1644212884 [sc-5863] server: Await \`refreshGoogleAccessToken\` to remove \`// @ts-ignore\`
1644155728 [sc-5861] Change onboarding from /extension-options to /workspace
1644042945 [sc-5856] Fix checklist title styling
1644015587 [sc-5548] Be smarter about updated outdated app configs in local storage when there the server call fails
1644015587 [sc-5548] Add generatedAt to the common app config
1644015587 [sc-5548] Add generatedAt into the server build script and server config
1644015587 [sc-5548] Add generatedAt into the extension build script and extension config
1644014091 [sc-5756] Add deeplink share app dialog open tracking
1644014091 [sc-5691] Show referral credits update
1644014091 [sc-5691] Deeplink into share app dialog
1644014091 [sc-5691] Create referral credits update view
1644014091 [sc-5691] Add website event to deeplink share page from webflow
1644014091 [sc-5691] Add feature flag for referral credits update
1644003920 [sc-5852] update extension summary wording to include free
1643997124 [sc-5385] Return an empty dest selector if mappings is not enabled
1643997124 [sc-5385] Get the correct window for fallback and move repeated code to helper function
1643997124 [sc-5385] Get selection from element root node instead of window and rename \`getWindowSelection\` -> \`getSelectionForNode\`
1643994094 [sc-5846] Adjust share dialog stylings to avoid not being able to x out
1643986870 [sc-5803] Show pro beta upgrade notification on fill
1643986870 [sc-5803] Refactor useAppSelector in Options app
1643986870 [sc-5803] Refactor notification framework to share dismiss function
1643986870 [sc-5803] Create pro beta upgrade notification view
1643986870 [sc-5803] Create pro beta upgrade checklist intro panel
1643986870 [sc-5803] Create dialog for pro beta upgrade experience
1643986870 [sc-5803] Add pro beta frame url
1643986870 [sc-5803] Add feature flags for pro beta upgrade experience
1643950510 [sc-5830] Fix dom observer to fire on initial load
1643950510 [sc-5830] Avoid extra global state updates when not needed by caching previous patches
1643936855 [sc-5839] Test saving shortcuts with variables
1643936855 [sc-5839] Test saving shortcuts with no variables
1643936855 [sc-5839] Test saving shortcut variables not in local storage
1643936855 [sc-5839] Remove unnecessary \`as\`
1643936855 [sc-5839] Only re-fetch sources if saved shortcut has different source
1643936855 [sc-5839] Move snippet test helper to own file
1643936855 [sc-5839] Add missing awaits for grabbing sources
1643936855 [sc-5839] Add basic test for saving no shortcuts
1643915816 [sc-5835] ext: Disable autoSessionTracking for content-scripts in 3rd-party pages
1643909833 [sc-5824] Make checklist title sticky
1643865991 [sc-5811] adjust time saved dialog styling
1643865991 [sc-5811] add unit test for referral-credits-common getNumReferred
1643865991 [sc-5811] Update referral credits graphics
1643865991 [sc-5811] Count preexisting referrals as 1
1643864922 [sc-5831] common: Add "ResizeObserver loop limit exceeded" to the Sentry \`ignoreErrors\` list.
1643840686 [sc-5816] add browser.ts into right rail to respond to dispatchWindowEvent notification from placeholder modal
1643839571 [sc-5758] ext: Remove unused fillable elements code
1643839571 [sc-5758] ext: Create tab state in \`getInitialTabState\` if has yet to be created
1643831512 [sc-5441] Create source-utils and snippet-utils tests
1643831264 [sc-5441] nit: Typos
1643831264 [sc-5441] Create helpers for util tests
1643828671 [sc-5822] ext: Use a constant for the dropdown container parent ID (and change from a class)
1643828671 [sc-5822] ext: TributeRange: Use a single mutation to append the input/textarea caret position <div>
1643828671 [sc-5822] ext: TributeRange: Use a constant for the input/textarea caret position <div>'s ID
1643828671 [sc-5822] ext: Ignore DOM mutations from our own in-content UI
1643816225 [sc-5727] add variable counts to autofill.snippet-selected event
1643816225 [sc-5727] add variable counts to ate_snippetUsed event
1643815954 [sc-5814] server: Return a 404 for invalid collection IDs from public requests
1643815954 [sc-5814] server: Check that a hashID is valid in unshortenUuid
1643815954 [sc-5814] server: Check that a collection ID is a valid GUID in /snippet-collections/:collectionId
1643757397 [sc-5750] Show feature sequence checklist to provisioned pro beta users from referral credits
1643757397 [sc-5750] Provision users onto pro beta from referral credits
1643757397 [sc-5750] Add test for referral credits pro beta cohort
1643755767 [sc-5802] update search shortcut checklist item
1643755767 [sc-5802] update Pro Beta checklist ordering
1643755767 [sc-5802] change checklist variable intro to link to Try it out page
1643755088 [sc-5815] Fix options shortcut help css
1643753660 [sc-5485] Update triggerInput to use useAppSelector instead of getUserSettingsFromStore
1643753660 [sc-5485] Update triggerInput and autosuggestShortcutEnabled to use partial
1643753660 [sc-5485] Move merge out of getUserSettingsFromStore into getUser
1643753660 [sc-5485] Cleanup usage of getUserSettingsFromStore
1643750965 [sc-5756] Refactor use app selector in dialogs
1643750965 [sc-5756] Consolidate share tracking
1643695160 [sc-5665] server: Undelete and log users which are still authenticating
1643695160 [sc-5665] server: Delete sessions when deleting a user
1643695160 Revert "[sc-5665] Don't return deleted users in \`Users.findBySessionId\`"
1643672080 [sc-5807] Revert "[sc-5495] Use \`crypto.randomUUID\` instead of \`uuid\` lib"
1643672080 [sc-5807] Revert "[sc-5495] Update node dev version to 14+"
1643672080 [sc-5807] Revert "[sc-5495] Add types for node v14"
1643671104 [sc-5807] Revert "[sc-5495] Uninstall unused uuid package"
1643671100 [sc-5807] Revert "[sc-5495] Add engines to package json and include in server deploys"
1643671083 [sc-5807] Revert "[sc-5495] Update eb default_platform"
1643667636 [sc-5495] Update eb default_platform
1643664116 [sc-5527] Update time saved dialog design
1643664116 [sc-5527] Update share shortcuts design
1643664116 [sc-5527] Update share first shortcut dialog design
1643664116 [sc-5527] Update share component to include referral credits
1643664116 [sc-5527] Update share app dialog design
1643664116 [sc-5527] Update panel share view design
1643664116 [sc-5527] Update checklist refer component to check number referred
1643664116 [sc-5527] Refactor sidebar use app selectors
1643664116 [sc-5527] Move options-sidebar to inside sidebar folder
1643664116 [sc-5527] Add referral credits sidebar component
1643664116 [sc-5527] Add referral credits feature flags
1643664116 [sc-5527] Add referral credit options in config
1643664116 [sc-5527] Add referral credit component
1643664116 [sc-5527] Add global state listener for localstorage referrals
1643654386 [sc-5495] Add engines to package json and include in server deploys
1643644244 [sc-5582] set beta cohort for text variable users when retrieving snippets if they contain sources
1643644244 [sc-5582] set beta cohort for newly registered users
1643644244 [sc-5582] set beta cohort for manually added users in beta list
1643644244 [sc-5582] return beta feature flags if user is in a beta cohort
1643644244 [sc-5582] rename isBetaUser to isInBetaUserList
1643644244 [sc-5582] add unit test for maybeSetUserBetaCohort
1643644103 [sc-5582] move user percentile to shared function
1643644103 [sc-5582] add pro beta cohort to onboarding
1643644103 [sc-5582] add helper function for setting Pro Beta cohort
1643411215 [sc-5665] Simplify \`signedInUserId\` const usage
1643411215 [sc-5665] Check for email in one-tap flow
1643392932 [sc-5665] Don't return deleted users in \`Users.findBySessionId\`
1643389870 [sc-5665] server: Don't delete the non-guest user in \`signin\`
1643323968 [sc-5754] Store panel introduction for firewall users
1643322782 [sc-5747] Update checklist design
1643322782 [sc-5747] Add feature flag to autoshow next checklist item
1643316644 [sc-5753] Fix homepage navigation bug
1643316644 [sc-5753] Center loading error state
1643316644 [sc-5753] Add go back button to error state
1643265786 [sc-5755] ext: Enforce max-len for TributeSearch
1643265782 [sc-5755] ext: Enforce no-mixed-operators for TributeSearch
1643265779 [sc-5755] ext: Enforce arrow-parens and arrow-body-style for TributeSearch
1643265776 [sc-5755] ext: Enforce class-methods-use-this for TributeSearch
1643265772 [sc-5755] ext: Enforce no-param-reassign in TributeSearch
1643265769 [sc-5755] ext: Switch TributeSearch to 2-space indentation
1643265766 [sc-5755] ext: Enforce prefer-const in TributeSearch.ts
1643265766 [sc-5755] ext: Convert TributeSearch to TypeScript
1643265755 [sc-5755] ext: Delete dead code from TributeSearch.js
1643265755 [sc-5755] ext: Assign tribute helper class instances within the Tribute constructor
1643265699 [sc-5755] ext: Fix undefined variable in TributeRange.selectElement
1643261049 [sc-4322] Remove references to TributeRange.getDocument() from commented out code
1643260977 [sc-4322] Reduce the number of callers to TributeRange.getWindow
1643260917 [sc-4322] Reduce the number of callers to TributeRange.getDocument
1643237313 [sc-5495] Use \`crypto.randomUUID\` instead of \`uuid\` lib
1643237313 [sc-5495] Update node engine version to highest supported by beanstalk
1643237313 [sc-5495] Update node dev version to 14+
1643237313 [sc-5495] Uninstall unused uuid package
1643237313 [sc-5495] Remove unused crypto-js package
1643237313 [sc-5495] Add types for node v14
1643235864 [sc-5714] Enable various rules related to var/let use
1643235864 [sc-5714] Enable the no-mixed-operators rule to clarify reading the code
1643235864 [sc-5714] Enable no-unused-expressions and clarify the code within Tribute.showMenuFor
1643235864 [sc-5714] Enable eslint/semi rule, use --fix to automate fixes
1643235739 [sc-5714] Change console logs to use loglevel and enable no-console in Tribute.js
1643230068 [sc-5725] ramp sign in to create shortcuts to 100%
1643230068 [sc-5725] ramp placeholder notification opening in panel to 100%
1643228872 [sc-5741] ext: background-tab-state: Don't await the tab url before returning the initial tab state
1643228723 [sc-5741] ext: tab-state: Rename \`initialPanelStore\` to \`initialTabState\`
1643228699 [sc-5741] ext: tab-state: Ensure initial state is populated in the content cache before applying partial updates
1643219212 [sc-5571] ext: Consolidate \`Mapping\` and \`Stitch\`, don't store \`SrcSelector\` in mappings store, and join sources and mappings when setting mappings store and in \`getMappingsForSinkUrl\`
1643219150 [sc-5571] server: Use \`ServerStitch\` in db schema
1643219150 [sc-5571] server: Don't join stitches and sources in server
1643219150 [sc-5571] ext: Use common models stitches
1643219150 [sc-5571] Add stitches to common models
1643216299 [sc-5733] ext: ate_hostPermissionsShow event should only be recorded when the banner shows
1643136901 [sc-5693] Fix create account checklist item display bug
1642807323 [sc-5280] Use actual trigger when opening the the placeholder modal
1642807035 [sc-5280] Rename variable to 'trigger' from 'shortcut
1642785435 [sc-5689] ext: Enable React lint rules jsx-no-useless-fragment
1642784722 [sc-5689] ext: Enable React lint rules for component definitions, indentation, and wrapping multiline JSX
1642783163 [sc-5689] ext: Enable React lint rule react/boolean-prop-naming
1642782891 [sc-5689] ext: Enable React lint rule react/jsx-pascal-case
1642782614 [sc-5689] ext: Enable React lint rule for prop equals spacing
1642782544 [sc-5689] ext: Enable React lint rule for curly spacing
1642782525 [sc-5689] ext: Enable React lint rules for closing brackets, prop indentation, and props-per-line
1642732718 ext: Improve React list performance by using \`key\`
1642731984 ext: Update react-redux to v7.2.6
1642731036 ext: Upgrade tinymce to v5.8.2
1642731036 ext: Upgrade eslint-config-preact to v1.3.0
1642731036 ext: Upgrade @tinymce/tinymce-react to v3.12.8
1642731036 ext: Update jest-junit to v13.0.0 and @reduxjs/toolkit to v1.7.1
1642731036 ext: Update ansi-regex to v5.0.1 to fix a security issue
1642728771 [sc-5672] ext: Move global state to its own background file
1642728771 [sc-5672] ext: Don't export \`tabStates\` and make its value \`ReadOnly\`
1642728771 [sc-5672] ext:  Rename background-store to background-tab-state
1642719303 [sc-5674] Use copy share url component in share view
1642719284 [sc-5674] Use copy share url component in export dialog
1642719254 [sc-5674] Replace copy icon with word copy
1642709186 [sc-5660] Increase \`eb deploy\` timeout for production
1642703569 [sc-5668] server: Upgrade hashids library to avoid errors from TS \`noUncheckedIndexedAccess\`
1642702278 [sc-5140] Update SplitVariable svg with new version
1642701906 [sc-5665] server: Correct a few \`User\` uses to be \`ReqUser\`
1642639306 [sc-5662] Add common/**/* to \`changes\` section for lint/test
1642638360 [sc-5662] Only run test coverage on develop when folder changes
1642634613 [sc-5660] Increase \`eb deploy\` timeout
1642633109 [sc-5659] Add logs when reqUser is not found
1642629142 [sc-5659] server: Use a subset of the user table for \`req.user\`
1642629142 [sc-5659] server: Return version with Users.findBySessionId to avoid an extra DB query
1642532957 [sc-5534] Update share view without auto-show
1642532957 [sc-5534] Remove shareCTATrigger from Global Store
1642532957 [sc-5534] Remove latest fill listener for share cta auto-show
1642526903 [sc-5538] Update timer icon
1642526903 [sc-5538] Update time saved sidebar UI
1642526903 [sc-5538] Update time saved message to separate message and emoji
1642467138 [sc-4986] Update existing options-shortcut-*-help cards to use common component.
1642467136 [sc-4986] Move options-shortcut-help-card.css to shared-ui-components.
1642467136 [sc-4986] Create common component OptionsShortcutHelpCard
1642445812 [sc-5503] ext: Enable \`noPropertyAccessFromIndexSignature\` tsconfig option
1642445812 [sc-5503] ext: Enable \`noImplicitOverride\` tsconfig option
1642445812 [sc-5503] Upgrade Typescript eslint packages to support \`override\`
1642445631 [sc-5503] server: Enable \`exactOptionalPropertyTypes\` tsconfig option
1642445631 [sc-5503] ext: Update typescript to version 4.5.4
1642445631 [sc-5503] ext: Fix errors due to default on \`useUnknownInCatchVariables\`
1642445631 [sc-5503] ext: Enable \`noUncheckedIndexedAccess\` tsconfig option
1642445631 [sc-5503] ext: DOM type fixes to support TS 4.5.4
1642445631 [sc-5503] Change RecursivePartial implementation to one that avoid the TS2589 error
1642445376 [sc-5503] server: Enable noPropertyAccessFromIndexSignature tsconfig option
1642445376 [sc-5503] server: Enable \`noImplicitOverride\` tsconfig option
1642360445 [sc-5503] server: Upgrade TypeScript to version 4.5.4
1642356693 [sc-5562] server: Test fixes for \`noUncheckedIndexedAccess: true\`
1642355876 [sc-5562] server: Enable the \`noUncheckedIndexedAccess\` tsconfig option
1642205008 [sc-5551] Add \`=""\` to \`data-magical-is-placeholder\` for the placeholders update snippet
1642198124 [sc-5540] ext: redirectOrFocusTabToOptionsPage: Properly handle no matching options tab open
1642195945 [sc-5547] Make the default sentry configs have a very low sample rate
1642185671 [sc-5525] Enable performance tracing for only the options page
1642185671 [sc-5525] Add more errors to ignore to config
1642183270 [sc-5545] ext: Use a simple selector in :not() for attaching the ContentUI so work with Chrome <88
1642181713 [sc-5071] Run code coverage on the default branch
1642181708 [sc-5071] Use \`rules\` instead of \`only\` in gitlab-ci.yml
1642178892 [sc-5530] Update checklist UI on workspace and panel
1642178892 [sc-5530] Change sidebar width
1642177043 [sc-5544] Check if TabState exists in onActivated listener
1642135060 [sc-5541] ext: Don't look for dirty shortcut rows if the shortcut list isn't even rendered yet
1642133515 [sc-5539] ext: Add missing closing bracket in ContentUI layout effect selector
1642106436 [sc-5531] Change template id for "update" emails
1642094553 [sc-5526] Turn off performance tracing in config
1642053206 [sc-5522] Update iguana options promo frame
1642051484 [sc-5109] server: Add BUILD_APPS, ExtensionVersionNumber, ExtensionVersionString and isValidExtensionVersionString
1642051484 [sc-5109] Update session version and send email
1642051484 [sc-5109] Enable @typescript-eslint/no-shadow instead of no-shadow
1642051484 [sc-5109] Create sessions version
1642051484 [sc-5109] Add unit tests for sendVersionUpdateEmail
1642049813 [sc-5109] server: Factor out extension version parsing from header reading
1642024391 [sc-5512] Use delay when deleting trigger for facebook and messenger
1642012923 [sc-5513] Remove Failed to Fetch from ignoreErrors
1642008060 [sc-5510] Allow custom urls in desktop link Sendgrid email
1641860105 [sc-5482] Bug fix for variable styling getting removed unintentionally on domMutation
1641854992 [sc-5471] Reinitialize sentry when configs are updated
1641854992 [sc-5471] Put original error message into unknown error
1641854992 [sc-5471] Add ignoreErrors after staging testing
1641604955 [sc-5467] Add cancel tracking to AutoSuggestShortcutPrompt
1641598184 [sc-5465] Add title to disabled variable picker tabs
1641597691 [sc-5456] Replace // copy with triggerInput from user settings.
1641596725 [sc-5389] Update toggles in settings dialog
1641596725 [sc-5389] Update settings dialog copy
1641596725 [sc-5389] Update error handling for save settings
1641596003 [sc-5464] Change autosuggest prompt graphic and remove help url
1641594140 [sc-5442] Update share first shortcut img
1641581949 [sc-5457] Fix checklist view margins
1641575882 [sc-5311] Install sentry libraries
1641575882 [sc-5311] Create Sentry init and move logging related functions into its own file
1641575882 [sc-5311] Allow Sentry to run on options page
1641575882 [sc-5311] Add sentry for options page
1641575882 [sc-5311] Add sentry for content-scripts
1641575882 [sc-5311] Add configs related to Sentry configurations
1641575882 [sc-5311] Add Sentry for background page
1641574526 [sc-5454] Remove the redundant 'user' prefix from user.userSettings
1641571032 [sc-5441] Styles search input to make whole width focusable
1641571032 [sc-5441] Sets focus on search bar when toggled open
1641566686 [sc-5448] Remove profile icon from panel
1641502253 [sc-5443] Fix variable picker tab edit variables and and new variables button styling
1641497999 [sc-5443] Remove extra \`0\` from options shortcut list when there are no shortcuts
1641489126 [sc-5365] Temporarily track urls open when CWS not open at install
1641486796 [sc-5437] Use configured trigger from user settings when opening placeholder modal
1641486796 [sc-5437] Remove unnecessary protection for possible undefined attributed
1641445305 [sc-5439] Ramp up autosuggest feature flag
1641406029 [sc-5427] Move OptionsShortcutPlaceholdersHelp with other help cards
1641406029 [sc-5427] Fix CSS file reference error within OptionsShortcutPlaceholdersHelp
1641403023 [sc-4822] Style search
1641403023 [sc-4822] Refactor to share filteredAll display behaviour for filter and search
1641403023 [sc-4822] Add search term prompt to "no-filter-results" graphic
1641399127 [sc-4822] Use filterSnippets to search through snippets in workspace
1641399127 [sc-4822] Implements banner to reset search and filter with filtered snippets count
1641399127 [sc-4822] Implement UI components for search behaviour
1641399127 [sc-4822] Add searchQuery to options page slice
1641399127 [sc-4822] Add a unit test for filterSuggestions
1641357470 [sc-4822] Refactor, rename searchTerm param to searchQuery in search utils
1641357463 [sc-4822] Search snippets with snippetSuggestions, including tags
1641355920 [sc-5185] Update appselector destructuring to avoid reload in share first shortcut dialog
1641355920 [sc-5185] Make shared function for notification storage setting
1641336438 [sc-5417] VariablesView should only call doneEditing when the component is unmounted
1641336438 [sc-5417] Remove redundant doneEditing
1641324195 [sc-5033] Purge closed tabs on startup
1641324194 [sc-5033] Update variables on closed tabs when another user makes a variable for that base URL
1641324194 [sc-5033] Track last visited time for tabs
1641324194 [sc-5033] Separate onStartup tasks in different listeners
1641324194 [sc-5033] Get \`srcPagesForClosedTabs\` once in \`options-shortcut-list\` instead of in every variable picker
1641324194 [sc-5033] Feature flag variables on closed tabs to canPromote
1641324194 [sc-5033] Don't store more than 25 closed tabs
1641324194 [sc-5033] Don't store closed tabs after they have been closed for a month
1641324194 [sc-5033] Add closed tabs to variable picker
1641324194 [sc-5033] Add \`srcPagesForClosedTabs\` to global state
1641324194 [sc-5033] Add \`recentyClosedTabStore\` to \`localStorage\`
1641324194 [sc-5033] 'Edit variables' from closed tab picker should open the tab in variable edit mode
1641314025 [sc-5313] Match french and portuguese extension descriptions with english versions
1641246024 [sc-1122] ext: Rename common.css to common-including-third-party.css.
1641246024 [sc-1122] Unify styles between right-rail.css and options.css in common.css
1641246024 [sc-1122] Remove unused .primary-cta-* CSS rules
1641246024 [sc-1122] Remove bootstrap usage from right-rail and from the extension
1641246024 [sc-1122] Remove .ha- class prefix from styles in Magical scopes
1641246024 [sc-1122] Introduce a foreground-color variable that can be used in conjunction with the background-color variable
1641246024 [sc-1122] Align text within the dropdown items to center with the dropdown arrow
1641245531 [sc-5245] Remove social share experiment
1641245531 [sc-5245] Refactor share by email component to include copy link
1641245531 [sc-5245] Refactor app selector to avoid unnecessary rerendering
1641245531 [sc-5245] Add rate app for first time saved modal
1641243633 [sc-5313] Update hours saved in extension CWS  description
1641238517 [sc-5284] ext: options: Preload the loading page gif to help it appear more often
1641237154 [sc-5284] Adjust loading styling to be centered
1641237154 [sc-5284] Add navbar into signup and onboarding pages
1641236496 [sc-5309] Update notification gif
1641236496 [sc-5309] Change panel view to default after opening placeholders on workspace
1641236414 [sc-5242] Use higher res favicons throughout the extension
1641236414 [sc-5242] Use equal vertical padding to keep favicon vertically centered with group header text
1641235901 [sc-5383] Reference event.composedPath() in expander instead of event.target
1641235901 [sc-5383] Get selection from element rootNode instead of the window for expansion
1640899514 [sc-5395] Remove read more from Settings join CTA
1640820451 [sc-5381] Re-style settings page and enable custom dropdown prompt
1640820404 [sc-5381] Add settings cancel button and tracking
1640810642 [sc-5375] Change the share emails reply to field to the user email when present
1640807342 [sc-5386] Re-add shareApp_show to workspace and create right-rail share tracking
1640798592 [sc-5231] Track snippet.autosuggest-creation.show
1640796285 [sc-5167] Refactor autosuggest to use user settings and set default threshold
1640796285 [sc-5167] Implement settings dialog
1640796285 [sc-5167] Enable custom trigger input via user settings
1640796285 [sc-5167] Add userSettings and related functions
1640731537 [sc-5167] Fix autosuggest-shortcut-prompt userClient name
1640731537 [sc-5167] Clean up profile circle styling
1640727271 [sc-5233] Move export / import / recover to the bottom of the sidebar
1640273724 [sc-5363] Flip gate on 11th shortcut to 50/50
1640201700 [sc-5355] server: snippetsHandler.upsert: Empty snippet IDs cannot be created by someone else
1640201700 [sc-5355] server: Snippets.findSnippetsNotCreatedByUser: Return early for an empty snippetIds array
1640198895 [sc-5356] server: Disable placeholdersNotifyUntilDismissEnabled due to user annoyance
1640152670 [sc-5349] ext: Add a LabelledSnippetCollection type to make it more clear when the label is available and what is stored in local storage
1640150174 [sc-5349] Only return labelled snippet-collections for a user for now
1640150025 [sc-5349] server: Add a \`ResponseWithStringError\` type to handle responses where we return a string body upon error.
1640129968 [sc-5348] server: SnippetCollections.findByCreatorUserId\`: Only select \`collectionId\` and \`snippetId\` from collection items
1640129539 [sc-5348] server: SnippetCollections.findByCreatorUserId\`: Don't query \`snippet_collection_items\` without \`collectionIds\`
1640115420 [sc-5343] Ramp up placeholders notification
1640036158 [sc-5336] Enabled variables for OG magical users
1640034732 [sc-5338] Use \`:not(…):not(…)\` CSS syntax instead of \`:not(…, …)\` because it requires Chrome 88+
1640032055 [sc-5326] Remove unnecessary z-index to prevent the icon from appearing above the bulk-actions
1640027239 [sc-5059] Update snippet list options and move create shortcut
1640026653 [sc-5303] Temporarily disable \`init\` tests in template-source.unit.test.ts
1640026646 [sc-5303] ext: Update template-source.unit.ts and tab-state mock for renames.
1640026436 [sc-5303] ext: global-slice: Use mergeWith to preserve object identity with partial global updates
1640026436 [sc-5303] ext: Use useAppSelector for global state in options-shortcut-list.tsx
1640026436 [sc-5303] ext: Replace 'store' with 'tabState' in tab-state.ts
1640026436 [sc-5303] \`connect\` only provides TabState, not Store
1640026436 [sc-5303] Use store.subscribe to watch for global changes outside of Preact components
1640026436 [sc-5303] Rename onStoreChange to onTabStateChange
1640026436 [sc-5303] Rename \`store\` to \`tabState\` in content
1640026436 [sc-5303] Remove the \`Store\` interface so \`store\` only contains tab state in content
1640026429 [sc-5303] ext:Use store helpers for synchronous reads of global state in content
1640024681 [sc-5303] ext: Use useAppSelector for global state in snippet-edit.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in share-view.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in progress-bar-component.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in popular-site-variable-help.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in placeholders-update-view.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in default-view.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in checklist-view.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in add-variable-checklist-component.tsx
1640024681 [sc-5303] ext: Use useAppSelector for global state in accept-shortcuts-checklist-component.tsx
1640024681 [sc-5303] Only pass tab state to RightRailContainer
1640024681 [sc-5303] Have checklist components get \`user\` via \`useAppSelector\`
1640024671 [sc-5303] Convert RightRailContainer to a functional component
1640024559 [sc-5303] panel-introduction-panel: Don't rely on \`global\` in mapStateToProps
1640024559 [sc-5303] Remove the toggleOpenClose fab prop since the function can be called directly
1640024559 [sc-5303] Remove some unused props from fab.tsx
1640024559 [sc-5303] Only update globa state in Redux store when global state changed, not non-global state
1640024559 [sc-5303] HelpPanel can get magicalMarketingURL from the redux store
1640024559 [sc-5303] Get featureFlags in ContentUI via useAppSelector
1640024559 [sc-5303] Fab: Get notifications via useAppSelector
1640024559 [sc-5303] Fab: Get fabPanelEnabled via useAppSelector
1640024559 [sc-5303] Fab: Get \`user\` via useAppSelector
1640024559 [sc-5303] Delete unused code to detect fillable elements
1640024559 [sc-5303] Convert the <Fab> component to a functional one
1640024559 [sc-5303] Convert VariablesView into a functional component
1640015270 [sc-5312] Add email tracking to sendgrid mail sends
1639779960 [sc-5314] Remove checklist from variables view and shareCTA
1639772513 [sc-5293] server: eslint: Remove unused disable directives
1639772513 [sc-5293] server: eslint: Make no-console an error
1639772513 [sc-5293] server: eslint: Make @typescript-eslint/no-unused-vars an error except ignoreRestSiblings
1639772513 [sc-5293] server: eslint: Make @typescript-eslint/no-non-null-assertion an error
1639772513 [sc-5293] server: eslint: Make @typescript-eslint/no-explicit-any an error
1639772513 [sc-5293] server: eslint: Make @typescript-eslint/explicit-module-boundary-types an error
1639772513 [sc-5293] ext: eslint: ignoreRestSiblings:true for @typescript-eslint/no-unused-vars
1639772513 [sc-5293] ext: eslint: Tribute: enforce continued 4-space indent instead of not enforcing indentation
1639772513 [sc-5293] ext: eslint: Remove unused disable directives
1639772513 [sc-5293] ext: eslint: Make object-shorthand an erorr
1639772513 [sc-5293] ext: eslint: Make no-useless-escape an error
1639772513 [sc-5293] ext: eslint: Fix one-var and no-var violations in TributeMenuEvents.js
1639772513 [sc-5293] ext: Remove eslint-disable comma-dangle
1639772513 [sc-5293] ext: Remove \`eslint-disable object-shorthand\`
1639772513 [sc-5293] ext: Remove \`eslint-disable curly\`
1639772513 [sc-5293] ext: Remove \`eslint-disable brace-style\`
1639772513 [sc-5293] ext: Remove \`eslint-disable @typescript-eslint/quotes\`
1639772513 [sc-5293] eslint: reportUnusedDisableDirectives and max-warnings 0
1639770923 [sc-5310] Fix snooze panel styling
1639770143 [sc-5278] Update sign in to create experiment
1639769714 [sc-5308] Fix data-magical-is-placeholder in placeholder shortcut
1639768362 [sc-5291] ext: Use spread with useEffect() to eliminate ExportDialog re-render
1639765047 [sc-5304] Turn off placeholders notification
1639696118 [sc-5281] Fix share view tracking
1639694145 [sc-5272] Fix checklist open on progress bar click
1639692081 [sc-2254] Move used Tribute code to src/extension/content-scripts/dropdown/
1639692081 [sc-2254] Delete remaining Tribute code
1639676999 [sc-5279] ext: Disconnect CONTENT_UI_ROOT when there is no UI rendering
1639671229 [sc-5235] ext: Options: Cleanup z-index values
1639671229 [sc-5235] Remove top banner signup section cta
1639671229 [sc-5235] Move host permissions section to options app
1639671229 [sc-5235] Create a Toast component
1639671229 [sc-5235] Consolidate OptionsNavbarApp into OptionsApp
1639670151 [sc-5228] Ramp sign in to create shortcut to 100%
1639669435 [sc-5274] ext: Workspace: Remove img-src from CSP to render images in shortcuts
1639610795 [sc-5265] Add tracking for go to workspace from panel
1639607786 [sc-5207] Don't clone placeholders if there is an existing placeholder with the same label
1639607048 [sc-5207] Find user source labels by source ids and user ids
1639607048 [sc-5207] Find source default labels by source id
1639607048 [sc-5207] Find all placeholders for a given user
1639607048 [sc-5207] Create index for source id in source default labels
1639600535 [sc-5207] Create index for sources public type creator user id
1639596384 [sc-5181] Use feature flags to filter sources for user
1639596384 [sc-5181] Pass user feature flags through route to model
1639596384 [sc-5181] Only set \`placeholderVariablesEnabled\` for >= 3.7
1639596384 [sc-5181] Augment notification flag to account for placeholdersEnabled
1639596384 [sc-5181] Add model/sources tests for returning sources
1639591427 [sc-5264] Ramp fabPanelEnabled and placeholderNotificationPanelIntroEnabled
1639511751 [sc-5255] Delete unused code to open the panel on messaging sites
1639511457 [sc-5255] Delete unused snippetView view
1639463553 [sc-5222] With the border-radius applied on the parent element, overflow hidden needs to be set in addition to clip child elements that may extend outside the container
1639419842 [sc-5236] Use a higher resolution icon for the autofill footer so it won't be blurry on HiDPI resolutions
1639415048 [sc-5246] Server: Enable placeholdersNotificationEnabled for canPromote
1639178438 [sc-5232] Make modal cancel callback mandatory
1639177865 [sc-5232] Allow placeholder modal to close when hitting \`esc\`
1639177842 [sc-5232] feature flags: account for placeholder onboarding
1639177810 [sc-5232] feature flags: increase fabPanelEnabled cohort
1639177705 [sc-5232] Add placehodler attribute to demo placeholder shortcut
1639177678 [sc-5232] Disable picker tabs if all non-placeholder sources are removed
1639177532 [sc-5232] variable-picker: only select one tab at a time
1639177468 [sc-5232] Match iframe promo frame URL with extension
1639166886 [sc-5203] Adding new placeholder should not create new source if the same placeholder label exists already
1639166568 [sc-5227] Enable placeholders by default
1639166458 [sc-5206] Update dynamic shortcut null states
1639166443 [sc-5206] Show label for canned shortcuts in default
1639166443 [sc-5206] Add learn placeholders url and move to appconfig
1639165657 [sc-5143] Track user shortcut creation in checklist
1639165657 [sc-5143] Show placeholders iframe
1639165657 [sc-5143] Show panel insert post placeholder snippet create
1639165657 [sc-5143] Serve notification on insert
1639165657 [sc-5143] Remove window check in fab.tsx
1639165657 [sc-5143] Create placeholders update view
1639165657 [sc-5143] Create placeholders intro feature flags
1639165657 [sc-5143] Create options placeholders shortcut row help card
1639165657 [sc-5143] Change panel-introduction-container to panel-card-container
1639165590 [sc-5216] Use removeAttribute() instead of removeNamedItem()
1639165590 [sc-5216] Show snippet icon beside placeholder variables within the picker and snippet body
1639165590 [sc-5216] Fix variable outline within snippet body editor
1639165590 [sc-5216] Create snippet-icon SVG
1639165510 [sc-5201] Use a const for source id data attribute in placeholder modal
1639165510 [sc-5201] Simultaneously update modal fields that use the same source id
1639165403 [sc-5221] Don't fire tribute-replace event until replacement finished
1639164951 [sc-5204] Add tracking for num placeholders + variables on snippet saving
1639163577 [sc-5215] Sets placeholder text in Typeahead to 'Describe the variable'
1639163577 [sc-5215] Replaces variable modal text and button icon to save
1639161658 [sc-5038] Create shortcut in panel when using the context menu
1639161658 [sc-5038] Create openSnippetBuilder to create snippets in panel from background
1639161658 [sc-5038] Clean up browser.contextMenus.onClicked and openSourcesBuilder
1639160136 [sc-5197] Use request cache for lastServerReachable ping
1639160136 [sc-5197] Add config for isServerReachable ping ttl
1639151645 [sc-5177] Create feature flag for MagicFill modification tracking
1639151558 [sc-5195] Consolidate FeatureFlags interface in /common/
1639148239 [sc-5213] Remove snooze hostnames logic
1639148222 [sc-5213] Update snooze panel content
1639090097 [sc-5175] server: Handle saving snippets which have sources not accessible by the saving user
1639090097 [sc-5175] server: Find UserSourceLabel by source ids
1639090097 [sc-5175] server: Create helper to replace source ids within a snippet
1639090097 [sc-5175] server: Create helper to determine which user source labels need to be created
1639090097 [sc-5175] server: Create helper to determine which sources need to be cloned within a snippet
1639090097 [sc-5175] add source_id index on user_source_label
1639086921 [sc-5175] server: CreatedAt and updatedAt should be determined by the DB for source creation
1639086905 [sc-5175] server: Import jsdom npm package
1639086905 [sc-5175] server: Find private sources created by users other than a specified user
1639086905 [sc-5175] ext: Refactor determination of whether a saved snippet includesVariableShortcut
1639086905 [sc-5175] ext: Force sync sources and labels after snippet save
1639086063 [sc-5111] expander: only open modal when every source is a placeholder
1639086063 [sc-5111] Store snippet on snippet suggestions
1639086063 [sc-5111] Remove special case filling on suggestion types
1639086063 [sc-5111] Remove extra fields from snippet suggestion
1639086063 [sc-5111] Populate source matches on variable shortcuts
1639086063 [sc-5111] Pass source matches from shortcut suggestion to placeholder dialog
1639086063 [sc-5111] Open modal from dropdown on missing source matches
1639086063 [sc-5111] Focus the first empty input field
1639086063 [sc-5111] Don't fill the shortcut if we're opening the placholder modal
1639086063 [sc-5111] Accept multiple triggers in replaceText
1639078562 [sc-4891] Implement autosuggest frontend
1639078488 [sc-4891] Set up autosuggest backend tracking and notifications
1639078488 [sc-4891] Implement autosuggest logic to trigger on 10th paste
1639078488 [sc-4891] FeatureFlag autosuggest and block FAB show on 10th paste for unflagged
1639077948 [sc-5178] ext: content-ui: Clear separation of top-level UI
1639077948 [sc-5178] ext: Rename fab-components to fab
1639077948 [sc-5178] Use useAppSelector to access global state from content-ui components
1639077948 [sc-5178] Merge fab.ts with fab-components.tsx and content-ui.tsx
1639077942 [sc-5178] Allow opening the panel on the workspace if fab was paused before
1639077711 [sc-5178] Rename fab.ts methods referencing "fab"
1639077711 [sc-5178] Move some fab tsx and css into content-ui files
1639077139 [sc-5178] Restore fab-components.tsx
1639077139 [sc-5178] Move fab-components.tsx to content-ui.tsx
1639037637 [sc-5183] Move trigger and variable help into help-cards and consolidate css
1639006299 [sc-5192] Fetch sources if placeholders or variables are enabled
1638998553 [sc-5176] Shortcut should not select when saved or canceled from workspace
1638996153 [sc-5012] ext: template-source: Leave ha-selection class removal to the \`SrcVariableHighlights\` component
1638996153 [sc-5012] ext: Rename existsInDraft in template-source
1638996153 [sc-5012] Delete draftSrcElements and now unused builder actions
1638996153 [sc-5012] Delete allElementsForTemplate
1638988908 [sc-5144] Split lastEditedShortcutID to Body and Trigger and call help on Focus
1638985994 [sc-4909] Update snippet save sanitize options
1638985994 [sc-4909] Remove unused sanitizeOptions param from getSnippetBody()
1638985994 [sc-4909] Remove allowed snippet tags from snippet save sanitize options
1638985067 [sc-5134] restore cursor position when inserting shortcut from placeholder modal
1638985067 [sc-5134] call closeModal before dispatching window event
1638983659 [sc-5170] Remove unused source RPC methods
1638983659 [sc-5170] Add \`LabeledSrcSelector\` type to Snippet interface
1638983128 [sc-5154] Add new time saved messages
1638982857 [sc-5146] Refactor user onboarding updates
1638980141 [sc-5150] ext: Pass the correct \`log\` to \`customizeLogging\`
1638976036 [sc-5150] ext: Add missing \`customizeLogging\` import
1638974953 [sc-5150] ext: Use a plugin to force loglevel to use the console.debug level
1638974953 [sc-5150] ext: Don't stringify log messages in so we get syntax highlighting and expandable objects
1638926139 [sc-5166] Remove old placeholder save logic
1638908717 [sc-5067] ext: Use an early return in saveNewSourceWithLabel to reduce nesting
1638908717 [sc-5067] ext: Replace module-self initialization with init calls in background.ts
1638908717 [sc-5067] Only save a new URL variable when the first non-URL variable is actually saved
1638908717 [sc-5067] Fix JSDoc comment formatting in server/src/routes/labels.ts
1638907356 [sc-5096] Support placeholder creation within VariableLabelDialog
1638907356 [sc-5096] Show Add New button in variable picker tab when addNewVariableCallback provided
1638907356 [sc-5096] Remove callbacks from VariableLabelDialogProps
1638907356 [sc-5096] Placeholders no longer need to be saved during snippet save flow
1638907356 [sc-5096] Pass addNewVariableCallback into VariablePickerTab for placeholder variables tab
1638907356 [sc-5096] Bug fix for cancel variable label
1638907356 [sc-5096] Allow NoncedStyle component to work on content pages and workspace
1638907356 [sc-5096] Allow Backdrop component to work on workspace
1638907356 [sc-5096] Add function to save a placeholder variable to the server
1638905245 [sc-5149] ext: Update app config on browser startup
1638898814 [sc-5118] Prefer public placeholder sources in case of duplicates
1638898814 [sc-5118] Placeholder picker accepts source matches instead of labels
1638898814 [sc-5118] Move labels seed to migration directory
1638898814 [sc-5118] Move common label ids into common/models/labels
1638898814 [sc-5118] Isolate integration test
1638898814 [sc-5118] Convert labels seed file to a migration
1638898814 [sc-5118] Add placeholder source matches to global state
1638898814 [sc-5118] Add default placeholder variables
1638898814 [sc-5118] Add 'down()' to placeholder-enum migration
1638894481 [sc-5145] Adjust trigger help copy for relevance
1638836695 [sc-5110] Refactor showsignup and showonboarding in options slice
1638836695 [sc-5110] Navigate to workspace from Magical header
1638830466 [sc-4909] server: Allow all domPurify default tags and attributes for snippet bodies
1638828440 [sc-5114] Update Variable tab component default state
1638818661 [sc3938] Toggling styling, cursor:pointer indicates checkbox toggle
1638818661 [sc-3938] Stop propagation for non-toggling children
1638818661 [sc-3938] Refactor row checkbox selection into separate function
1638818661 [sc-3938] Assign togglecheckbox handler to row child elements
1638811708 [sc-5100] Refactor variable label dialog to use content scripts dialog
1638811708 [sc-5100] Refactor placeholder dialog to use content scripts dialog
1638811708 [sc-5100] Refactor modified variables dialog to use content scripts dialog
1638811708 [sc-5100] Consolidate content script dialogs
1638484498 [sc-5102] make variable picker content scrollable
1638484498 [sc-5102] increase variable picker limit
1638464611 [sc-5070] Open FAB from create new shortcut in dropdown
1638460127 [sc-5060] Move options promo frame into options app
1638460127 [sc-5060] Move closedPromoFrameUrl into notifications storage
1638460127 [sc-5060] Change iframeEnabled feature flag name
1638460127 [sc-5060] Add options promo frame user feature flags
1638393126 [sc-4840] Open placeholder modal when shortcuts have placeholders
1638393126 [sc-4840] Move expander.ts filling logic to autofill-common
1638393126 [sc-4840] Don't return placeholder sources for older extension versions
1638393126 [sc-4840] Add event listener to fill shortcut from placeholder modal
1638393125 [sc-4840] Dispatch window event when filling from placeholder modal
1638393125 [sc-4840] Create shortcut body with contents of placeholder modal
1638393125 [sc-4840] Add 'DispatchWindowEvent' notification
1638392861 [sc-4840] Use SnippetIcon when missing srcUrl
1638392861 [sc-4840] Dangerously set modified snippet body with placeholders into modal
1638392861 [sc-4840] Add basic placeholder dialog
1638386833 [sc-4840] Delete placeholders when removed from shortcuts
1638386833 [sc-4840] Allow variable picker to accept additional attributes
1638386833 [sc-4840] Add placholder feature flag
1638386833 [sc-4840] Add placeholder tab to shortcut variable picker
1638386833 [sc-4840] Add placeholder sources when saving shortcuts
1638386829 [sc-4840] Add placeholder source type to extension
1638386667 [sc-4840] Add DB migration for placeholders and update types
1638386005 [sc-5026] getAllSelectableDomElements returns a Setof Element, not just HTMLElement
1638386005 [sc-5026] ext: canElementBeAVariable: Look for specific children to also allow creating a variable for
1638386005 [sc-5026] ext: Use .some to return a boolean while filtering selectable variable elements
1638386005 [sc-5026] ext: Move \`candidateElementChildSelector\` to AppConfig
1638386005 [sc-5026] ext: Factor out function to determine if a given element can be a variable
1638386005 [sc-5026] ext: Bail early from canElementBeAVariable to reduce work for each element
1638386005 [sc-5026] Use a CSS selector in AppConfig to filter variable root elements
1638386005 [sc-5026] Add unit test for getAllSelectableDomElements
1638381870 [sc-5065] Update uninstalled users chart
1638306656 [sc-5056] Fix checklist progress bar done styling
1638297558 [sc-5050] ext: eslint: Make react-hooks/exhaustive-deps rule an error
1638295087 [sc-5050] ext: eslint: Make @typescript-eslint/no-explicit-any an error
1638223394 [sc-5040] Rename addLabel background server method to saveNewSourceWithLabel
1638223394 [sc-5040] Make toAdd easier to read
1638223394 [sc-5040] Delete unused addSource server method
1638223394 [sc-5040] Delete a stale example comment in redux-store.ts
1638223394 [sc-5040] Cancelling adding a label to a new variable should remove the SrcSelector, not just update the draftSrcElements
1638209495 [sc-5027] Destructure user id from request
1638209495 [sc-5027] Convert fabPanelEnabled to be derived from userPercentile
1637941626 [sc-5028] Add 2nd round of beta users
1637880671 [sc-5025] Enable fab panel intro for users on versions gte v3.5.1
1637880607 [sc-5025] Enable fab for 1% of users
1637870204 [sc-5023] Support adjacent inputs in recursivelyReplaceFormFieldsWithValues()
1637870204 [sc-5023] Add test coverage for changing input value for recursivelyReplaceFormFieldsWithValues() unit test
1637870200 [sc-5023] Increase bufferDuration for change event observable
1637870159 [sc-5023] Clone HTMLElement before using in subsequent functions
1637870003 [sc-5023] Rename util function convertElementValueToTextNode to recursivelyReplaceFormFieldsWithValues
1637869743 [sc-5023] Subscribe to change event instead of input event
1637858075 [sc-5016] ext: Watch for DOM mutations in reactive variable highlights
1637858075 [sc-5016] ext: Render variable highlights with Preact in response to state changes
1637858075 [sc-5016] Move some functions out of template-source so it doesn't need to be imported
1637858075 [sc-5016] Ensure any Preact side-effects/memory is cleaned up in the deconstructor
1637854793 [sc-499] ext: Use outline instead of border for variable highlights to not shift layout
1637854173 [sc-1806] Set outline to none on input element
1637853897 [sc-1806] Alphabetize css properties for .ha-snippet-name input
1637851422 [sc-1806] Use destructuring import for hooks
1637851422 [sc-1806] Applies focus to trigger when panel snippet edit view is opened
1637788713 [sc-4873] Update content in shortcut trigger help component
1637788713 [sc-4873] Create common styling for options shortcut help components
1637779454 [sc-5022] Remove feature gate dialog
1637779454 [sc-5022] Destructure only necessary items from global state
1637779012 [sc-5022] Remove login feature gate for tags
1637779012 [sc-5022] Remove login feature gate for snippet body edit menu buttons
1637779012 [sc-5022] Destructure only necessary feature flag from global state
1637769642 [sc-5013] ext: Watch for \`value\` attribute changes so <input> are updated after JS mutations
1637769642 [sc-5013] Subscribe to input events only when input variables are selected
1637769298 [sc-5013] Store recently sent src elements instead of src matches
1637690788 [sc-5014] Revert "[sc-4946] Don't use global document in getSnippetBody"
1637690782 [sc-5014] Revert "[sc-4946] Move getSnippetBody and tests to shared/snippets"
1637683681 [sc-4567] Use a Fragment instead of an empty object for a VariablesList prop
1637683681 [sc-4567] Save sources when a label is added to a new variable
1637683681 [sc-4567] Save SrcSelector changes instead of manipulating draftSrcMatches
1637683681 [sc-4567] Remove unused \`sourceTransforms\` and \`srcUrl\` properties of \`StartEditing\`
1637683681 [sc-4567] Delete the 'template.click-save' event
1637683681 [sc-4567] Change variable-view button to "Done"
1637683681 [sc-4567] Add source to draftSrcMatches immediately upon adding a label
1637683681 [sc-4567] Add a note on getValueFromStore's JSDoc to only select the minimum necessary to improve performance.
1637640896 [sc-5008] Nest ViewStore in state under \`panel.views\`
1637607391 [sc-4985] ext: Delete link to progress-bar.css referenced from its own shadow DOM
1637607233 [sc-4985] Don't rely on :hover for .logo cursor property
1637603857 [sc-4985] ext: right-rail: Move the options client to top-level scope
1637603857 [sc-4985] ext: right-rail: Move SavedTimeFooter to the top-level scope
1637603857 [sc-4985] ext: right-rail: Move Login to the top-level scope
1637603857 [sc-4985] ext: right-rail: Move HomeButton to the top-level scope
1637603857 [sc-4985] ext: right-rail: Move BackButton to the top-level scope
1637603857 [sc-4985] ext: right-rail: Memoize MagcalLogo event listener
1637603857 [sc-4985] ext: right-rail: Get rid of unnecessary temp. return variable in RightRailContainer
1637603857 [sc-4985] ext: Move MagicalLogo and goToShareView to top-level of right-rail.tsx
1637360514 [sc-4873] Set up backend for triggerHelp
1637360514 [sc-4873] Refactor variableHelpShortcutId to lastEditedShortcutId
1637360514 [sc-4873] Implement front end for trigger-help
1637359906 [sc-4764] Variable picker variables should sort before limiting
1637359906 [sc-4764] Add labeled missing variables to picker
1637358446 [sc-4944] Make shortcut preview one line
1637358446 [sc-4944] Fix up text preview for add-variable-shortcut-checklist-component
1637358446 [sc-4944] Even out greyspace for platform options
1637358446 [sc-4944] Add gmail to frontend add variable shortcut checklist component
1637358446 [sc-4944] Add gmail as a platformToShortcutName instance, refactor shortcutIDs
1637357186 [sc-4920] Show options onboarding page
1637357186 [sc-4920] Replace try shortcuts with onboarding
1637357186 [sc-4920] Rename options-signup to options-signup-page
1637357186 [sc-4920] Don't show checklist or banner on onboarding page
1637357186 [sc-4920] Create options onboarding page
1637356530 [sc-4988] \`saveSnippet\` in \`background-snippets\` should take \`OptionsPageSnippet[]\` as input instead of \`Snippet[]\`
1637356530 [sc-4988] Remove \`save\` method from options page background
1637356530 [sc-4988] Change \`optionsClient.('save')\` calls to \`snippetsClient.('saveSnippets')\`
1637355203 [sc-4961] Only show checks in checklist if not connected to server
1637355203 [sc-4961] Don't show progress bar if server not reachable
1637355203 [sc-4961] Don't show accept shortcuts checklist item if not on server
1637355203 [sc-4961] Blocked server create account content
1637344643 [sc-4984] Turn off fab panel for non-beta users
1637282501 [sc-4585] extension: Check if source is in disabled sources when adding new source
1637282501 [sc-4585] extension: Add disabled sources to store
1637281908 [sc-4585] server: Add route to delete items from user_sources_disabled table
1637281908 [sc-4585] extension: Server call to reenable (delete disabled) sources
1637281177 [sc-3941] Use form when editting snippet in panel
1637281177 [sc-3941] Standardize tracking for saving snippets
1637281177 [sc-3941] Move save logic to snippet-utils
1637281177 [sc-3941] Move get trigger and body value to snippet_utils
1637281177 [sc-3941] Mock json-rpc in selector unit test
1637281177 [sc-3941] Don't render tags contianer div on new snippet (it'll be empty anyways)
1637275458 [sc-4905] Update options app imports
1637275458 [sc-4905] Open signup page from ctas
1637275458 [sc-4905] Move sidebar into options app
1637275458 [sc-4905] Don't show banner or checklist on signup
1637275458 [sc-4905] Create loading state
1637275458 [sc-4905] Add signup page
1637269120 [sc-4954] Refactor platformToShortcutName to an array
1637269120 [sc-4954] Don't check off create for add variable shortcut checklist component
1637269120 [sc-4954] Consolidate video and name platform info into config
1637260405 [sc-4887] Modify default label for gmail first name source
1637258011 [sc-4921] Ensure that panel on options page only has checklist view
1637120785 [sc-4872] Use new progress bar component in workspace
1637120783 [sc-4872] Progress bar UI changes
1637091465 [sc-4948] Accept generic variable type in picker
1637091435 [sc-4948] Pass onVariableClick function to VariablePickerTabProps
1637091435 [sc-4948] Move SrcMatch sorting outside of variable picker
1637091431 [sc-4948] Remove SrcMatch dependency from getVariablePill
1637091135 [sc-4948] Pass onClick method to VariablePill to reduce dependencies
1637078012 [sc-4946] tribute: Use \`stopImmediatePropagation\` on 'enter' key
1637078009 [sc-4946] Move getSnippetBody and tests to shared/snippets
1637078006 [sc-4946] Don't use global document in getSnippetBody
1637078001 [sc-4946] Remove HTMLElement typecasting
1637001808 [sc-4939] generate new local dev SSL cert
1636737566 [sc-4928] Add search shortcuts to checklists
1636736751 [sc-4714] Requery selector for input variables on input event
1636736751 [sc-4714] Function to convert elements with value attribute to text node with value + unit tests
1636736751 [sc-4714] Add ability to select elements with value attribute
1636582537 [sc-4853] Create context menu for create variables
1636582537 [sc-4853] Add full import paths in background files
1636582537 [sc-4852] Move startPanelIntroduction to background-fab
1636581439 [sc-4918] Change shortcut-list-slice name to options-page-slice
1636579210 [sc-4898] Ping servers before feature gating create
1636578599 [sc-4897] Update time saved tracking
1636572848 [sc-4868] Make default view tabs sticky
1636560953 [sc-4882] Update share view panel
1636560953 [sc-4882] Update share icon
1636560953 [sc-4882] Make getShareUrl not async
1636560953 [sc-4882] Add share icon into panel footer
1636490999 [sc-4874] make variables help card a little bigger
1636471471 [sc-4904] Remove 'type //' experiment
1636406349 [sc-4900] Remove unused 'updateSource' function
1636394057 [sc-4879] Remove <body> tags from variables when <body> only has text children
1636235118 [sc-4770] Add route to send emails from webflow
1636061757 [sc-4884] Add config secondsSaved to fix timessaved bug
1636047404 [sc-4871] Update snippet tutorial URL
1636047404 [sc-4871] Show only shortcuts on panel for non-beta users
1636047404 [sc-4871] Remove label for shortcut presentation in panel for non-beta users
1636047404 [sc-4871] Enable fab for non-beta users
1635992108 [sc-4870] Use latest selenium-webdriver
1635992108 [sc-4870] Use latest chromedriver
1635992108 [sc-4870] Remove unused \`shouldOpenOnboardingOnInstall\`
1635992108 [sc-4870] Change \`AUTO_OPENED_TABS\` to zero
1635992108 [sc-4870] Add timeouts to UI tests to fail faster
1635980468 [sc-4762] Remove Airbnb sweepstakes code
1635980468 [sc-4762] Refactor options sidebar for readability
1635876093 Remove dead applyModifier code
1635801002 [sc-4851] add character count to snippet events
1635800993 [sc-4851] Remove \`panel.tab\` since event volume is high
1635800984 [sc-4851] Deprecate \`missingElements\` from \`autofill.invoke\`
1635800961 [sc-4851] Don't track \`autofill.invoke\` on second dropdown view so we know when variable snippets were inserted through dropdown vs expansion
1635780171 [sc-4848] Add comment to #profile-dropdown z-index value
1635636992 [sc-4848] Sign out option hidden beneath create shortcut on workspace
1635550413 [sc-4845] Show completed checklist on the workspace panel instead of default view
1635540309 [sc-4830] Don't scroll the options-page headers so bulk-actions can be sticky without a magic number
1635537301 [sc-4831] Remove unnecessary if-condition
1635537175 [sc-4831] Traverse all mutation.addedNodes in snippet-body-editor
1635452744 [sc-4796] Fix ui-test exclude matcher
1635452718 [sc-4796] Replace \`updateUser\` with \`fetchUserAndDataFromServer\` in website events
1635452718 [sc-4796] Remove unused JSON-RPC methods
1635452717 [sc-4796] Add \`fetchUserAndDataFromServer\` to User RPC server
1635452695 [sc-4796] Consolidate user data and seting amplitude
1635452498 [sc-4796] Move \`updateAllDataFromApiForUser\` to backgrond-users.ts
1635446488 [sc-4812] Wrap cookie.get(…) calls in try…catch to handle host permissions not being granted
1635437838 [sc-4795] Render SignupDialog after isServerReachable request finishes
1635437261 [sc-4747] The header should be sticky even when the right rail is scrolled out of the viewport.
1635437101 [sc-4747] Sticky header for bulk actions in the workspace
1635381033 [sc-4745] set createdAt timestamp when creating new modified variables
1635381033 [sc-4745] add tracking for modified variables - add tracking when modifier dialog is opened - add tracking after labeling the new modified variable
1635378073 [sc-4775] Open signup in dialog instead of webflow from time saved
1635377504 [ch4363] Show popular site help card after inserting a shortcut
1635377504 [ch4363] Rename variable help css
1635377504 [ch4363] Create popular site variable help card
1635377504 [ch4363] Add popular site list to config
1635376030 [sc-4790] Use node version 16 for extension on Gitlab
1635375241 [sc-4790] Use node version 14 for server on Gitlab
1635364931 [sc-4788] add top-level package.json with dev. scripts
1635364931 [sc-4788] Run server prestart scripts before starting the dev server
1635362081 [sc-4776] Move continue as guest button to bottom of signup dialog
1635355638 [sc-4783] Add PRODUCTION_BETA_USERS
1635289955 [sc-4518] Remove RateAppDialog + related assets and tracking
1635289941 [sc-4518] Open TimeSavedDialog instead of RateAppDialog from options app
1635289932 [sc-4518] Add tracking to time saved dialog
1635288929 [sc-4518] Create util function to convert totalTimeSaved to seconds
1635288929 [sc-4518] Create time saved dialog
1635288928 [sc-4518] Add nextTimeSavedThreshold to NotificationStorage
1635288909 [sc-4518] Add social share enabled feature flag
1635288827 [sc-4518] Add platform assets
1635288057 [sc-4765] add additional gmail variable selector rules
1635284365 [sc-4737] reference CSSSrchMatcher explicitly when using src path of type 'css'
1635284365 [sc-4737] add new ModifierMetadata type to source paths
1635284365 [sc-4737] add modifier-metadata to paths for new modified sources
1635284365 [sc-4737] add modifier-meta to seed sources with modifiers
1635278134 [sc-4767] skip dom purification if src has a modifier
1635278134 [sc-4767] refactor allowedSrcTemplateTags to common appConfig
1635278134 [sc-4767] move ALLOWED_ATTR to common appConfig
1635278134 [sc-4767] add gmail recipient modifier to list of modifiers that use raw value for its rich text value
1635264137 [sc-4729] Show feature gate create component with dialog slice
1635264137 [sc-4729] Create feature gate create component
1635264137 [sc-4729] Add feature flag for sign in to create new shortcuts
1635264137 [sc-4729] Add config for number of shortcuts to gate create
1635222476 [sc-4350] Add test cases for \`ol\` and \`em\` tags
1635222472 [sc-4350] Remove extra outer tags to prevent line breaks and change \`trimWhitespace\` to return a  DocumentFragment
1635222060 [sc-4350] Uncomment richtext code in template-source
1635222060 [sc-4350] Make \`trimWhitespace\` recursive and simplify cases by taking input as Node instead of HTMLElement
1635197058 [ch4613] Track when server is not reachable
1635197020 [ch4613] Check firewalled users for signup dialog
1635183549 [ch4613] Add info server to extension
1635183548 [sc-3718] Reload page when options page is requesting redirectOrFocusTabToOptionsPage()
1635183548 [ch4613] Skip webflow onboarding on install
1635183548 [ch4613] Open signup dialog from workspace CTAs
1635183548 [ch4613] Logout flow should reset notifications.timesReloaded to 0
1635183548 [ch4613] Create continue as guest UI in signup dialog
1635183548 [ch4613] Configure reload logic for signup dialog
1635183548 [ch4613] Allow extension to GET /info route of server
1635183548 [ch4613] Add signup dialog slice logic
1635183548 [ch4613] Add reload threshold for signup dialog show
1635167220 [ch4731] Allow variable picker to rerender when tinymce mounts
1634941352 [sc-4712] Remove canPromote split variable functionality
1634941352 [sc-4712] Hide split button if there's nothing to split
1634941351 [sc-4712] Render ModifiedVariablesDialog from fab components
1634941351 [sc-4712] Open ModifiedVariablesDialog with name split modifiers from variables list
1634941351 [sc-4712] Allow ModifiedVariablesDialog to open through a BuilderAction step
1634941351 [sc-4712] Allow ModifiedVariablesDialog to open through SourcesTabApi
1634939656 [sc-4712] Create ModifiedVariablesDialog with props
1634939656 [sc-4712] Allow for storing and updating modifiedVariablesDialogProps into TabState
1634935410 [sc-4658] Shortcut trigger should not allow space in between
1634935403 [sc-4658] Combine options and panel trigger validation logic
1634935140 [sc-4658] Standardize shortcut name to shortcut trigger on options and panel
1634932428 [sc-4746] Add student to signup detail functions
1634867350 [ch4730] Remove variable help section from the panel
1634851547 [sc-4684] update share by email component to use new isEmail function
1634851547 [sc-4684] read value for variables that are type HTMLInputElement
1634851547 [SC-4684] update gmail seed for To Recipient - use new path rules for compose and reply windows - switch to use To Recipient label
1634851547 [SC-4684] update findElementForSource to return all matches
1634851547 [SC-4684] add modifier functionality for gmail-recipient-first-name
1634851547 [SC-4684] add isEmail utility to validate email address format
1634851547 [SC-4684] add gmail recipient first name modifier
1634782576 [sc-4309] \`alphaSortSrcMatches\` unit test
1634782576 [sc-4309] Sort variables in dropdown, panel variables view, and variable picker
1634782576 [sc-4309] Remove 'Snippets' groupTitle because we no longer use it
1634782576 [sc-4309] Comparison function to sort srcMatches alphabetically by label and then by plainTextValue
1634772148 [sc-4656] Try to avoid randomly generated identifiers in selectors.
1634772148 [sc-4656] Share common getSelectorsForSource test code
1634766737 [sc-4732] Exclude src/ui-tests from test coverage
1634762847 [sc-4701] Set panelIntroductionStarted when user closes it
1634762158 [sc-4700] allow canPromote users to view missing source details - avoid grouping unlabeled missing sources for canPromote users
1634761206 [ch4698] Show options shortcut row help
1634759956 [sc-4259] Let users without authn record use non-Google login
1634759293 [sc-4667] Don't change icon colours when the page state changes
1634759293 [sc-4667] Add extension staging icon assets
1634749920 [sc-4668] Use Typescript for jest configuration
1634749920 [sc-4668] Run tests with coverage for Gitlab CI
1634749920 [sc-4668] Remove unsued mocha dev dependency
1634749920 [sc-4668] Move jest config files to extension/
1634749920 [sc-4668] Match ts-jest version with jest
1634749920 [sc-4668] Fix ts-jest transformer option to use typescript files
1634749920 [sc-4668] Fail test suites if coverage is too low
1634749920 [sc-4668] Add visual line coverage to Gitlab MRs
1634669668 [ch4683] Fix refer variables checklist completion
1634596038 [ch4524] Update share first shortcut modal to include copy url
1634585935 [ch4524] Create copy share url component
1634570160 [sc-4678] explicitly set source modifier to null when creating new source objects - this will avoid state issues where an old state's modifier value gets merged in
1634570160 [sc-4678] allow null source modifier value
1634565740 [ch4534] Refactor create variable shortcut checklist check off
1634565740 [ch4534] Fix progress bar create variable shortcut styling
1634322343 [ch4682] Add accept shortcuts tracking
1634320552 [sc-4681] Disable panel introduction via the server
1634317121 [sc-4677] Use array destructuring to pull first tab from browser.tabs.query()
1634317088 [sc-4677] Add JSDoc to openOrFocusTab
1634316987 [sc-4677] Start panel introduction on the active tab for the active window
1634241683 [ch4675] Make insert variable shortcut checklist resources more helpful
1634240301 [ch4674] Expand learn variables when checked off
1634238113 [sc4673] Use priority attributes for optimal-select
1634238113 [sc4673] Use ISO date strings for createdAt/startedAt
1634238113 [sc4673] Test priority and excluded attributes for \`getSelectorsForSource\`
1634234205 [sc-4653] Update label seeds pertaining to Person.follows schema
1634231878 [sc-4660] separate split modifier button into 2 parts to allow generating only a first or second part
1634231878 [sc-4660] change splitSource to more generic applyModifier
1634231878 [sc-4660] Separate first name extraction from last name extraction
1634159326 [sc-4662] Fix flaky labels models tests
1634155428 [sc-4356] Move server label models to common/models/labels
1634155169 [sc-4356] Move ext label models to common/models/labels
1634136019 [ch4577] Use attribute excludes for sources with optimal-select too
1634136019 [ch4577] Allow data-test-id/data-testid attribute values in matches CSS rules
1634133147 [ch4636] Remove deprecated community modal code
1634132907 [ch4643] Change join now cohort to banner
1634052517 [sc-4646] Rename default_source_label table to source_default_labels
1633986624 [ch4645] Rename organization => company for labels + add school label
1633737770 [sc-3549] Specify userId with startSession() for test/routes/labels
1633737770 [sc-3549] Simplify logic in LabelManager.saveUserSourceLabel()
1633737770 [sc-3549] Provide promoteLabel method within SourcesTabApi
1633737770 [sc-3549] Log srcMatch from variable editor when canPromote user clicks variable
1633737770 [sc-3549] Clicking up-arrow icon in variable editor now sets the label as defaultSourceLabel
1633737770 [sc-3549] Allow tests to change User.canPromote
1633737770 [sc-3549] Allow canPromote users to POST defaultSourceLabels
1633737770 [sc-3549] Add test coverage for POST /labels/default-source-labels
1633737770 [sc-3549] Add server call from extension to update default source label
1633737770 [sc-3549] Add ability to split variable from editor
1633737770 [sc-3549] Add SourcesTabApi.splitSource() method
1633737770 [sc-3549] Add LabelManager function to keep defaultSourceLabels updated in localStorage
1633729135 [sc-4635] Return early if there are no sources to create
1633729135 [sc-4635] Avoid server calls if sending empty array
1633726453 [sc-4502] add labels seed data - remove the person label seed file as we will use just a single label seed file
1633721129 [ch4412] Add environment variable config for ad-hoc beta users
1633719066 [ch4412] Set up the correct feature flags for beta users
1633712812 [sc-4628] Allow rollup to detect common/ folder
1633702791 [sc-4600] apply URL default source label when saving a source of type URL - add sources test case to check URL default label gets set appropriately
1633634379 [sc-4600] add upsertDefaultSourceLabel handler function
1633632688 [sc-4541] Hitting enter to submit the form
1633632688 [sc-4541] Focus input when the dialog opens
1633632688 [sc-4541] Escape closes dialog
1633632688 [sc-4541] Add CSS for menu item active state
1633630484 [sc-4489] Associate existing URLs with standardized URL label
1633628339 [sc-4489] Use correct URL label id when creating URL variable
1633628339 [sc-4489] Add locale const for en-us
1633628339 [sc-4489] Add URL label id const to common/models/labels
1633628172 [sc-4612] Store public labels as top-level consts
1633628172 [sc-4612] Rename test const \`LABEL_ID*\` to \`PRIVATE_LABEL_ID*\`
1633628172 [sc-4612] Make test label name unique by default
1633628172 [sc-4612] Fix label tests asserting no public labels
1633628172 [sc-4612] Explicitly create label with duplicate name and locale
1633628172 [sc-4612] Change "default-source-labels" to work along other integration tests
1633628172 [sc-4612] Change "GET /labels" to work along other integration tests
1633628172 [sc-4612] Assert one public label is returned for user with no associations
1633625024 [ch4619] Update accept shortcuts on install feature flag for EE release
1633589293 [ch4618] Add tracking to pin app checklist item
1633540345 [ch4576] Populate paths.creatorUserId for source creation
1633385772 [sc-4582] Add font-sizes, word-breaks to CSS exclude list
1633385768 [sc-4582] CSS class excludes list should use "contains" regex
1633385357 [sc-4582] Catch optimal select errors install of silently failing
1633384807 [sc-4575] Tweak css-selector-generator config to reduce latencies
1633384737 [sc-4575] Move CSG_BASE_CONFIG to app config
1633369629 [sc-4581] Update to extension name
1633305159 [sc-4573] Update extension description
1633122855 [sc-4545] Prevent expansion on shortcut editor triggers
1633122855 [sc-4545] Disable dropdown workspace on snippet trigger
1633121594 [sc-4542] CSS updates to variables view on panel
1633120385 [sc-4544] Replace <p> that aren't paragraphs with <span>
1633120385 [sc-4544] Move "Try your shortcuts" into the extension to fix the dropdown positioning/sizing
1633112043 [sc-4540] Prevent saving empty shortcuts in workspace
1633108654 [sc-4539] Picking variables from picker should limit dropdown variables
1633108632 [sc-4539] Flip to using \`extended_valid_elements\` within tinyMCE editor settings
1633043295 [sc-4536] Prefix JSON-RPC debug logs with tab and frame id
1633043184 [sc-4536] Only log JSON-RPC methods when the server instance handles the methods
1633029133 [ch4515] Fix variable checklist ui
1633028601 [sc-4520] Update srcPage url in updateTabStateAsyncProperties
1633028601 [sc-4520] Change updateTabStateAsyncProperties to accept a Tab
1633028601 [sc-4520] Change createTabState to accept a Tabs.Tab
1633028601 [sc-4520] Buffer tab updates to reduce state notifications
1633025659 [sc-4527] Append the FAB_ROOT on every renderFab call when disconnected
1633021289 [sc-4526] Use \`maxCombinations\` config property when using \`getCssSelector()\`
1632936096 [sc-4480] Don't use rich text for variables until we fix \`trimWhitepsace\`
1632925559 [sc-4511] Fix source modifiers when purified element is an instance of HTMLBodyElement
1632867207 [sc-1847] Update two-step shortcut wording
1632866454 [ch4483] Variable picker CSS fixes
1632866454 [ch4483] Right rail snippet edit view CSS fixes
1632866454 [ch4483] Options page CSS fixes
1632864618 [sc-4514] Change tutorial link in variable shortcut help card to use the learnVariablesURL
1632864526 [sc-4514] Reword dynamic and canned shortcuts in panel
1632859507 [sc-4506] Hide insert variable checklist item if platform does not exist
1632846777 [sc-4510] Shorten variable picker web page text
1632844840 [sc-4499] Remove create shortcut context menu before adding it
1632843835 [ch4487] Update structured source path for Twitter
1632843835 [ch4487] Catch queryselector errors when finding elements
1632843835 [ch4487] Cannot retrieve saved twitter variables
1632843299 [sc-4512] reword snippets to shortcuts in variable help card
1632805777 [ch4484] Exclude cedexis from autofill-form injection in manifest
1632785297 [sc-4479] Update linkedin name source paths - add labels for linkedIn first name, last name, full name
1632777763 [ch4498] Add feature flag for dropdown help card
1632776425 [sc-4490] Show tab with most matches on variable picker
1632774317 [sc-4476] checklist: prefill snippet with sources for variable picker
1632756189 [ch4464] Prioritize case-sensitive matches in edit variable label dropdown
1632611002 [ch4485] Fix insert variable shortcut Twitter typo
1632516063 [ch4478] Disable share first shortcut modal when share shortcuts disabled
1632502564 [ch4448] Variable picker CSS fixes
1632502564 [ch4448] Use display: none instead of visibility: hidden to hide formatting toolbar so that it doesn't take up space
1632502564 [ch4448] Snippet trigget and body editor CSS fixes
1632502564 [ch4448] Panel footer CSS fix
1632502564 [ch4448] Move beta tag inline with tabs
1632502564 [ch4448] Don't show progress bar on snippet edit view
1632502564 [ch4448] Bold label name in pills even if label is null
1632501840 [ch4446] Change help panel height if live chat is enabled
1632501839 [ch4446] Update help panel buttons with live chat behind feature flag
1632501717 [ch4446] Add liveChatEnabled feature flag with default false
1632499751 [ch4442] Switch getStore() calls to getValueFromStore + helper functions for more performant lookups.
1632499751 [ch4442] Create getValueFromStore() which will clone a specified value inside the Store, bypassing the need to clone the entire store.
1632499751 [ch4442] Adding lint rule to disallow getStore() by default
1632462339 [ch4442] Remove getStore() from variable label dialog
1632461351 [ch4442] Remove getStore() from FAB
1632461086 [ch4442] Remove getStore() from right rail components
1632461086 [ch4442] Remove getStore() call from Options Page dialogs
1632433748 [ch4462] Ensure variable help panel exists when modifying style
1632428686 [ch4472] Remove gmail add variableshortcut
1632410133 [ch4466] Change join CTA to cohort 1
1632354142 [ch4436] Keep snippet-edit trigger state within component
1632350245 [ch4443] Trim whitespace from label names
1632348694 [ch4428] Tighten up label dropdown styles
1632348694 [ch4428] Show dialog on Backdrop component
1632348694 [ch4428] Move variable label dialog code below fab container
1632348694 [ch4428] Explicitly piece together edit label dialog dropdown
1632348694 [ch4428] Clear variable label validity after user types
1632341372 [ch4341] Create seeds for variable shortcuts to accept in variable checklist
1632341372 [ch4341] Associate linkedin first name source with first name label
1632341371 [ch4304] Gmail name source
1632325821 [ch4305] Twitter sources modifications
1632325785 ch4305] Move label id constants to common/models/labels.ts
1632325459 [ch3405] Create common/models/users.ts and move admin user id constant to it
1632166462 [ch4381] Use class instead of inline styling on // dropdown
1632166462 [ch4381] Get rid of inline styles in fab on options page
1632160402 [ch4432] Follow TitleCase naming convention for variable-list components
1632160244 [ch4432] Update HyperLinkRemoveIcon and use in the variable list
1632159474 [ch4432] Delete unused .ha-hyperlink-icon styles
1632159323 [ch4432] Use CSS to implement variable list hover styles
1632152338 [ch4431] Revert acb883 changes to performance tests
1632151856 [ch4426] Add missing snippet_sources source_id index
1631853891 [ch4423] Move npm ci to Procfile
1631852823 [ch4423] Add sha-bang to eb predeploy script
1631851964 [ch4423] Package .platform directory in the EBS archive
1631851034 [ch4423] Run \`npm run prestart\` as an EBS predeploy script
1631848173 [ch4422] Variable dialog should only show when setting variable label
1631847251 [ch4423] Re-enabled knex migrations and seeds
1631842844 [ch4224] server: Delete unused Source routes/methods
1631842844 [ch4224] Rename and share the SrcModifier type with the server
1631842844 [ch4224] Rename CSSPath to ElementSrc and UrlSelector to UrlSrc
1631842844 [ch4224] Generate additional source paths with css-selector-generator
1631842844 [ch4224] Generate a 'css-complete' selector for new variables
1631842844 [ch4224] Create a common SrcType interface
1631842844 [ch4224] Convert sources.paths to an array of objects
1631842844 [ch4224] Add types to /sources response body and dependencies
1631842844 [ch4224] Add minimal types for optimal-select
1631833599 [ch4404] Use ContentPanel to fix dialog styling
1631833599 [ch4404] Only show variable label dialog in top window
1631831934 [ch4032] Seed Labels for Person domain
1631831934 [ch4032] Run seeds on deployments
1631831934 [ch4032] Initial sources seed should ignore on id conflict
1631831934 [ch4032] Drop structured data table
1631831934 [ch4032] Alter label table for structured data info
1631831934 [ch4032] Add timestamp to sources seed
1631831353 [ch4355] Add wysiwygUsed flag to panel save snippet for parity
1631831353 [ch4355] Add shortcut variable usage data to amplitude user property
1631831346 [ch4355] Track label saving to server success and error
1631830974 [ch4355] Pluralize labels in LabelsServerApi.save()
1631829232 [ch4402] Reset the editor state on submit of variable
1631828280 [ch4409] Set delete dialog state to closed on submit
1631821418 [ch4421] Update platform to shortcut name shortcut trigger
1631806690 [ch4413] Show VariablesBetaIcon in variable picker
1631806690 [ch4413] Show VariablesBetaIcon in panel
1631806690 [ch4413] Add VariablesBetaIcon
1631805344 [ch4419] Progress bar number left special case create account
1631748892 [ch4401] Change unlabeled variable label in snippet body
1631748141 [ch4316] Store which variable shortcut a user selected
1631748141 [ch4316] Insert variable shortcut checklist item
1631748141 [ch4316] Create variable shortcut checklist item
1631748141 [ch4316] Add variable shortcut checklist item
1631748141 [ch4316] Add find snippet by id route
1631738991 [ch4316] Variables intro checklist item
1631738991 [ch4316] Refer variables checklist item
1631738693 [ch4316] Add variable checklist list
1631738164 [ch3195] Use a CSS variable for the dropdown max-width
1631738164 [ch3195] Show dropdown help card next to dropdown
1631738164 [ch3195] Only show the fab/panel in the top-level document
1631738164 [ch3195] Export the FAB ShadowRoot
1631738164 [ch3195] Create dropdown variable help card
1631738164 [ch3195] Close dropdown variable help card once and for all
1631736251 [ch4394] FAB should only show when clicked from browserAction
1631734649 [ch4394] Panel should never automatically open
1631733297 [ch4400] Reset baseUrlInUse in VariablePicker when all source removed from SnippetBody
1631732291 [ch4354] Bug fix for user-source-label saving to exclude existing non-labeled sources
1631732201 [ch4354] SnippetBody should get appropriate labels from SourceLabelStore
1631732003 [ch4354] Variable picker should get labels from srcMatch.label
1631732003 [ch4354] Dropdown should get labels from srcMatch.label
1631725762 [ch4377] Upsert URL label when creating variables for a new site
1631721530 [ch4377] Remove missing variables from picker
1631721506 [ch4377] Remove missing suggestions from dropdown
1631651815 [ch4397] Adding a variable using dropdown should update the VariablePickerTab component
1631651749 [ch4397] Create helpers for getting data from sourceWrapper
1631650726 [ch4397] Selecting variable from picker should keep dropdown updated
1631650726 [ch4397] Rename VariablePicker component
1631650718 [ch4397] Update props to VariablePicker component
1631650518 [ch4397] Refactor snippetVariableSelected to accept a snippetId instead of destSelector
1631639739 [ch4295] Use mutation observer on SnippetBodyEditor to track variables removed
1631639739 [ch4295] Put sanitization back in panel and options to remove \`magical-from-source-page\` on save
1631639739 [ch4295] Don't show checkmarks on dropdown in SnippetBodyEditor
1631639709 [ch4295] Allow \`magical-from-source-page\` and \`contenteditable\` on spans in TinyMCE
1631639564 [ch4295] Add data-magical-snippet-id attribute to snippet body editor component for getting snippet id in snippet-utils
1631638519 [ch4395] Fix response from POST sources/
1631638519 [ch4353] update to use SrcMatch in variable label dialog props, callbacks and builder action stream
1631638519 [ch4353] add edit label button in variable list
1631638519 [ch4353] add edit functionality to variable label dialog - add isEdit prop - open edit dialog from variable list edit button - add background-source method to handle the source label edit
1631634989 [ch4111] Use variable picker component from SnippetBodyEditor component
1631634989 [ch4111] Styling of variables within variable picker tab
1631634989 [ch4111] Add variable picker tab component
1631634989 [ch4111] Add variable picker component
1631634852 [ch4111] Extension: Add config values for variable picker
1631634852 [ch4111] Add chrome icon
1631631423 [ch4369] Move panel introduction checklist circle
1631372811 [ch4376] Update filterSuggestions type
1631372811 [ch4376] Deprecate 'searchValue' in favor of 'searchValues'
1631372811 [ch4376] Add labels to searchValues
1631311511 [ch4301] tribute: Use element \`ownerDocument.defaultView\` in \`updateSelection\`
1631308795 [ch4111] Server configs for variable picker
1631305584 [ch4347] Move Tribute/dropdown keydown event to capturing phase
1631301741 [ch4326] Label dialog and typeahead UI/UX enhancements
1631301741 [ch4326] Implement typeahead in variable label dialog
1631301741 [ch4326] Don't import VariableLabelDialog so that unit tests pass
1631301741 [ch4326] Add react-bootstrap-typeahead + @types modules
1631300291 [ch4370] set 'undefined' is not assignable to type 'boolean'
1631297067 [ch3197] Show options shortcut help card on workspace
1631297054 [ch3197] Create options shortcut row help card
1631238942 [ch4299] Fix for srcSelectors that are text nodes
1631227332 [ch3194] Store if panel introduction has been started
1631227332 [ch3194] Open panel introduction panel
1631227332 [ch3194] Create panel introduction card
1631227332 [ch3194] Create browser notification for Magical Pro Beta
1631220576 [ch4357] userSourceLabelsToSave should only look at new source matches
1631220474 [ch4288] Add sources index on creator_user_id and public
1631217255 [ch4288] server: Save sources as public if coming from ATE extension
1631217255 [ch4288] server: Add handler for create sources route
1631217255 [ch4288] extension: Save all sources as public
1631210739 [ch4288] Remove unused \`urlHasSources\` function
1631210739 [ch4288] Remove private \`trackTemplates\` call
1631204308 [ch4231] watch localstorage changes for label data and update tabState / global state - update label data with the rest of user data on alarm
1631204308 [ch4231] add named type for LabelStore, UserSourceLabelStore, DefaultSouceLabelStore - add sourceLabelStore into cachedSourcesForUrl - add labelStore into global store - cleanup background label
1631204308 [ch4231] add label into SrcMatch, add builder actions for labeling and background source call to save label
1631199390 [ch4231] update server for label routes/model
1631199390 [ch4231] add variable label dialog to fab (unstyled)
1631198774 [ch4233] Set up LabelsServerApi
1631198774 [ch4233] Manage label items in localstorage with LabelManager
1631193998 [ch4349] Add panel.variables.view back to tracking
1631150146 [ch4293] Add panel menu tracking and clean up unused events
1631149221 [ch4328] Share UserId/GUID types between the server and extension
1631121911 [ch4340] Open workspace on create shortcut from checklist
1631119202 [ch4338] Clean up notification tracking
1631073783 [ch4327] Delete notification panel code
1631051843 [ch4291] Hide suggestions over limit, unless a user is searching
1631051843 [ch4291] Exclude test files from rollup
1631047196 [ch4291] Create and sort ShowMoreVariablesSuggestion
1631047196 [ch4291] Alphabetize suggestion types
1631047196 [ch4291] Add support for ShowMoreVariablesSuggestion
1631047196 [ch4291] Add config for limiting number of variables in the dropdown
1631047196 [ch4291] Add 'showAllVariables' state to dropdown
1631040702 [ch4270] Use the correct window for Tribute.range.getCurrentFrameAbsolutePosition()
1631040702 [ch4270] Use \`window.frameElement\` to get frame element instead of iterating through all frames
1631028675 [ch4310] Show progress bar on default view
1631022653 [ch4317] Style changes to panel shortcut create/edit
1630953535 [ch4313] Don't attach dropdown on every keystroke
1630952387 [ch4297] Rename SnippetEditProps attribute isTriggerAvailable to isTriggerValid
1630952387 [ch4297] Remove valid property from SnippetEditStore
1630952387 [ch4297] Provide util to determine if TinyMCE body is empty
1630952387 [ch4297] Only show prefix error when trigger is not empty
1630952387 [ch4297] Move empty snippet body check logic on SnippetEdit component into the onSave() function
1630949823 [ch4202] Reset dropdown view after selecting shortcut
1630868488 [ch4203][ch4256] Only insert/delete text if necessary
1630868488 [ch4203] Show dropdown for dynamic shortcut expansion
1630868488 [ch4203] Run expander.ts at document_idle
1630868488 [ch4203] Move destSelectorFromElement to selector.ts
1630868488 [ch4203] Match extension v1 config with server
1630868488 [ch4203] Initialize expander.ts where dropdown is initialized
1630868488 [ch4203] Consolidate SrcPage computations
1630868488 [ch4203] Add relevantSrcPagesForSnippet helper
1630868488 [ch4203] Add opts struct to showMenuForCollection
1630868488 [ch4203] Add collection config override to Tribute-js
1630868488 [ch4203] Add \`newUnfilledSnippetSuggestion\` helper
1630857068 [ch4034] add label routes, handler and route tests
1630856674 [ch4034] add label, userSourceLabel, defaultSourceLabel CRUD and tests
1630852838 [ch4034] move getFirst() into utils
1630852838 [ch4034] add models for new tables
1630809704 [ch4034] add migration scripts for variable labeling
1630779796 [ch4290] Sort feature flags alphabetically
1630779796 [ch4290] Remove variables and mappings if disabled
1630779796 [ch4290] Add \`mappingsEnabled\` feature flag, off by default
1630723560 [ch4294] Use \`MAGICAL_NO_STITCH_CLASS\` on TinyMCE body
1630687783 [ch4249] Use share by email component in share app dialog
1630687783 [ch4249] Parameterize \`onSendEmailClick\` for share-by-email
1630687783 [ch4249] Add share app email route
1630682791 [ch4263] Fix emoji in progress bar
1630615625 [ch4119] Use the correct window for Tribute.range.getWindowSelection()
1630615625 [ch4119] Use \`contenteditable="false"\` in variable span and remove zero width space
1630615625 [ch4119] Update \`isSnippetBuilder\` for SnippetBodyEditor component (for rich text and non-rich text cases)
1630615625 [ch4119] Rename getTriggerInput and getBodyInput to getTriggerValue and getBodyValue, and return string values instead of HTMLElements
1630615625 [ch4119] Rename \`template-source.css\` to \`variable-highlight.css\` and move to shared-ui-components
1630615625 [ch4119] Remove sanitization on snippet save in panel to be consistent with options page
1630615625 [ch4119] Fix ui tests for shortcuts -> optionsPage store rename in ch4010
1630615625 [ch4119] Enable // to insert variables in workspace
1630615625 [ch4119] Delete code for editing text inside variable span
1630615625 [ch4119] Attach autofill-forms window event listeners inside TInyMCE's <iframe>
1630590290 [ch4266] Rename ate_installed cwsUrlOpen property
1630548238 [ch4262] Use rollup-plugin-sourcemaps to consume third-party sourcemaps for dev.
1630534827 [ch4254] Add non breaking space into checklist name
1630534150 [ch4266] Add more information to ate_installed event
1630522698 [ch4265] Filter instead of remove ate checklist items
1630517361 [ch4261] Upgrade rollup-plugin-chrome-extension to v3.6.2
1630517361 [ch4261] Remove duplicate manifest permissions
1630512620 [ch4260] Quick: Fix stylesheet performance issue on options page by loading editor css on options.html
1630445565 [ch4257] Remove getStore() call in OptionsShortcutRow
1630438513 [ch4253] Rename filterSnippetSuggestions to filterSuggestions
1630438170 [ch4253] Enable searching all suggestions
1630437449 [ch4253] Add BaseSuggestion interface
1630434353 [ch4167] Prevent flicker of snippet body in the panel
1630434353 [ch4167] Move snippet edit panel width/height overrides to the lowest common ancestor that uses the variables
1630434353 [ch4167] Add a CSS transition for the snippet-edit size changes
1630434059 [ch4250] Tell eslint we have two separate projects with their own eslint config
1630432397 [ch4253] When a user logs out, force acceptShortcuts checklist option to true
1630431955 [ch4251] Don't pass an empty srcUrl to \`isOptionsPage\` in right-rail
1630431038 [ch4178] Remove unused details param to onInstallOrUpdate()
1630431038 [ch4178] Remove defaultSnippets from extension config
1630431038 [ch4178] Only create a test default snippet for dev builds and use in UI tests
1630431038 Revert "[ch4178] Don't load default snippets if accept shortcuts on install"
1630413656 [ch4147] Turn on no-console for linting rules
1630413656 [ch4147] Migrate off console.log in expander
1630413656 [ch4147] Add debug level logs in common code paths
1630413651 [ch4147] Use loglevel library to log to console
1630374380 [ch4009] Add num shortcuts to share shortcut by email
1630372125 [ch4247] Change accept shortcuts on install feature flag to new users
1630371891 [ch4247] Feature flag checklist
1630355660 [ch3908] Use \`SnippetBodyEditor\` component in panel
1630355660 [ch3908] Don't use grow wrap in panel
1630355030 [ch3908] Move rich text incompatible editor to \`SnippetBodyEditor\` component
1630355030 [ch3908] Move \`SnippetBodyEditor\` styling to shared ui components
1630349977 [ch4178] Don't load default snippets if accept shortcuts on install
1630328424 [ch4246] Hide panel close and help on workspace
1630259633 [ch4244] Prose Mirror editor fill strategy modifications
1630151174 [ch4028] Remove ServerSnippet.name as this is no longer used in the extension
1630151174 [ch4028] Compute if trigger is available when showing create/edit shortcut panel view
1630100458 [ch4207] Update user in \`updateAllDataFromApiForUser\`
1630100458 [ch4207] Update user data before setting amplitude properties
1630100458 [ch4207] Rename \`setUserInfo\` to \`setAmplitudeUser\`
1630100458 [ch4207] Remove \`setAmplitudeUser\` before initBackground call
1630100458 [ch4207] Do not update the user in \`setAmplitudeUser\`
1630100458 [ch4207] Consolidate promises in \`updateAllDataFromApiForUser\`
1630098241 [ch4229] Update sign in checklist copy
1630098241 [ch4228] Bugfix to properly remove acceptShortcuts from checklist when FF disabled
1630093102 [ch2667] Use Promise.all in \`updateTabStateAsyncProperties\`
1630093102 [ch2667] Update tabs when sources change
1630093102 [ch2667] Update mutation observer tests
1630093102 [ch2667] Throttle sources storage observable
1630093102 [ch2667] Publish \`SrcMatch\`es instead of \`SrcPage\`s
1630093102 [ch2667] Get sources from store instead of background
1630093102 [ch2667] Add source transforms to TabState
1630093102 [ch2667] Add \`SrcSelector\`s to TabState
1630090904 [ch4230] Fix checklist home button issue
1630084605 [ch3994] Clean up dialog showModal + close logic on render
1630078528 [ch3994] Don't double init the global store notifications listener
1630069023 [ch4166] Open workspace from browser action if on chrome tab
1630017683 [ch4010] Rename shortcuts slice to optionsPage slice
1630017683 [ch4010] Rename onApply to onTagDropdownApply and export
1630017683 [ch4010] Move snippetCollections to global slice from shortcuts slice
1630017683 [ch4010] Move \`tag-utils.ts\` from options to shared and move \`onTagDropdownApply\` to \`tag-utils.ts\`
1630017683 [ch4010] Move \`shotcut-tags-dropdown.tsx\` to shared ui components and rename to \`tags-dropdown.tsx\`
1630017683 [ch4010] Move \`options-store.ts\` to src/ and rename to \`redux-store.ts\`
1630017683 [ch4010] Move \`hooks.ts\` to src/
1630017683 [ch4010] Don't show tag dropdown when creating a new snippet
1630017683 [ch4010] Add tags to bottom of panel snippet edit view
1630017683 [ch4010] Add lint rule to not import from content-scripts, background, or options in shared
1630017126 [ch3296] Update pending deletion class
1630017126 [ch3296] Set panel shortcut  delete to opacity 0 when not hovered
1630016333 [ch4211] Add panel to workspace
1630014559 [ch4129] Remove preceeding // from shortcut list in panel
1630014559 [ch4129] Remove preceeding // from shortcut edit in panel
1630014559 [ch4129] Remove preceeding // from panel titles
1630014552 [ch4129] Remove preceeding // from dropdown options
1629993212 [ch4204] Panel header missing buttons
1629923708 [ch3749] Update share dialog UI to match figma
1629923708 [ch3749] Only render share dialog contents we want to show it
1629923708 [ch3749] Focus email input when clicking on containing area
1629923708 [ch3749] Create share by email component
1629923708 [ch3749] Add shareByEmail client API methods
1629923708 [ch3749] Add react-tag-autocomplete dependency and types
1629923708 [ch3749] Add API route to send share emails
1629906128 [ch3749] Add generic \`sendTemplatedEmails\` function
1629906128 [ch3749] Add 'sendEmailTemplate' function
1629816398 [ch3749] Add 'addContactsToSendgridLists' function
1629772988 [ch4177] Update eslint packages
1629772988 [ch4177] Remove accept shortcut content from checklist
1629772988 [ch4177] Move \`shouldShowOptionsChecklist\` to checklist-common.ts
1629772988 [ch4177] Add restricted import path config
1629772988 [ch4177] Add options.ts import check
1629772988 [ch4177] Add minimum config to enable import eslint plugin
1629772988 [ch4177] Add message to existing import rule
1629772988 [ch4177] Add eslint-import-resolver-typescript
1629480868 [ch4173] Remove progress bar done text on checklist
1629476464 [ch4159] Don't do contenteditable actions if contenteditable="false"
1629476464 [ch4159] Add test for contenteditable="false"
1629464775 [ch4154] Throw an error if we can't find creator user (they are deleted)
1629464775 [ch4154] Show empty recieve modal instead of error toast
1629464775 [ch4154] Set default string for sharer name in empty collection recieve modal
1629405676 [ch4072][ch4155] Remove references to magic packs in receive shortcut dialog
1629337306 [ch4072][ch4155] Return undefined highlightedSnippets when snippet collection contains no snippets
1629316809 [ch3697] Update create snippet checklist item
1629316809 [ch3697] Add pin app checklist item
1629316808 [ch3697] Update refer checklist item
1629316808 [ch3697] Open checklist on options page
1629316808 [ch3697] Make progress bar accessible from options page
1629316808 [ch3697] Add name details to create account checklist item
1629316808 [ch3697] Add accept shortcuts checklist item
1629316807 [ch3697] Update insert snippet checklist item
1629311354 [ch3697] Refactor toggle checklist item functionality
1629310242 [ch4095] Feature flag accept Harpaul's shared shortcuts
1629310242 [ch4095] Create accept Harpaul's shortcuts dialog
1629310242 [ch4095] Add Harpaul's shared shortcuts collection ID into config
1629309934 [ch4161] server: Unfork Gitlab CI deploy action
1629309934 [ch4161] server: Deploy to staging automatically again
1629309934 [ch4161] Update stale usage comment for bump-and-tag-version.sh
1629264973 [ch4161] server: Specify the elastic beanstalk application label using appropriate tags
1629227979 [ch4148] Don't send duplicate srcPage updates.
1629221265 [ch4136] Update fill strategies for input/textarea
1629221265 [ch4136] Form UI Tests: Add tests for expansions performed in between text
1629221265 [ch4136] Add fill strategy actions for input/textarea
1629221259 [ch4136] Form UI Tests: Allow tests to pass a function to execute before typing the trigger
1629219559 [ch4136] Form UI Tests: Test contenteditables with initial value instead of placeholder
1629219559 [ch4136] Form UI Tests: Replace placeholders with initial value support for input/textarea
1629215507 [ch4150] Don't updateSrcPagesForOpenTabs when variables FF is disabled
1629214509 [ch4019] update snippet collection upsert to optionally merge label and metadata - we want to avoid wiping label / metadata if only one of the values are being upserted
1629140660 [ch4131] Fix TinyMCE expected output
1629140659 [ch4131] Wait for the frameSelector to be found before switching to it
1629140659 [ch4131] Use actual Trix output for test comparison
1629140659 [ch4131] Use a callback for determining actual test values
1629140659 [ch4131] Use \`id\` as passed to \`addRow\`
1629140659 [ch4131] Use CKEditor 5's actual output value for test comparison
1629140659 [ch4131] Fix quill expected test output
1629140659 [ch4131] Fix ckeditor 5 expected output
1629140659 [ch4131] Fix Slate test and expected output
1629140659 [ch4131] Disable input type=number/email tests since we broke them
1629140659 [ch4131] Disable broken ckeditor 4 test
1629140659 [ch4131] Augment HTMLElement with getTestResult()
1629138137 [ch4131] Improve forms.html layout/styles
1629138114 [ch4131] fix contenteditable placeholder tests to expect the placeholder prefix
1629138095 [ch4131] fix CKEditor 4 taking over UI tests
1628888750 [ch4092] Facebook comments should perform delay between repeating fill actions
1628888749 [ch4092] Support delays between repeating actions
1628816435 [ch4063] Use v2 filling strategies
1628816435 [ch4063] Support single dispatchEvent as a FillAction
1628816435 [ch4063] Support generic execCommand as a FillAction
1628816435 [ch4063] Simplify sheets filling strategy
1628816435 [ch4063] Simplify input and textarea filling strategy
1628816435 [ch4063] Simplify contenteditable filling strategy
1628816435 [ch4063] Rename EventAction to DispatchEventsAction
1628816435 [ch4063] Remove unused dispatchEvents fill strategy
1628816435 [ch4063] Move ALLOWED_ATTR and ALLOWED_LINK_ONLY_SITE_TAGS constants
1628816435 [ch4063] Alphabetize FillActions
1628816435 [ch4063] Add v2 of filling config
1628816435 [ch4063] Add stronger types to EventActionData.eventInit
1628816435 [ch4063] Add common fill strategy actions
1628816435 [ch4063] Add FillStrategyV2 types
1628789184 [ch4124] Update delete shortcut toast message
1628720498 [ch3945] Store accepted shortcut on shortcut share accept and send email
1628720498 [ch3945] Add error logs to sendgrid calls
1628720498 [ch3945] Add acceptCollectionEmailTrackingEnabled feature flag
1628718873 [ch3996] Open reshare collection state from website event
1628718864 [ch3996] Add shouldRefresh to redirectOrFocusTabToOptionsPage
1628699702 [ch4104] Properly aggregate snipped IDs for shortcut expansion events
1628699702 [ch4104] Don't assume how to aggregate new expansion event properties
1628697247 [ch4008] Ramp join now CTA to 100%
1628692220 [ch4104] Record the snippetId for shortcut expansions
1628692220 [ch4104] Record snippet IDs for shortcut deletions
1628636768 [ch4080] update fill strategy for DraftJS to use a consistent strategy everywhere - due to changes in DraftJS, there is no need to special case FB/messenger from other DraftJS instances
1628625162 [ch3977] Retrieve the rich text enabled flag only once instead of per item
1628625162 [ch3977] Pre-compute toSnippetCollectionsBySnippetId
1628621548 [ch4059] add tracking on magic link success and error
1628572436 [ch4065] Tracking workspace (options page) opening with TTI
1628572436 [ch4065] Move median and setSnippets to a new performance-utils.ts
1628572436 [ch4065] Log workspace (options page) Time to Interactive (TTI) values with ?perf-test.
1628572436 [ch4065] Add a performance test for workspace (options) TTI
1628284983 [ch4006] Remove top margin from dialog titles
1628284983 [ch4006] Fix feature gate dialog styling
1628284983 [ch4006] Fix export dialog styling
1628284619 [ch4035] Match synthetic paste event dispatched from fill strategies to events dispatched from user interaction
1628284619 [ch4035] Match synthetic keyup event dispatched from fill strategies to events dispatched from user interaction
1628284619 [ch4035] Match synthetic keydown event dispatched from fill strategies to events dispatched from user interaction
1628284619 [ch4035] Match synthetic input event dispatched from fill strategies to events dispatched from user interaction
1628284619 [ch4035] Match synthetic change event dispatched from fill strategies to events dispatched from user interaction
1628284619 [ch4035] Match synthetic beforeinput event dispatched from fill strategies to events dispatched from user interaction
1628282333 [ch4057] Don't add test files to deployment archive
1628279893 [ch3887] extension: Add contenteditable performance benchmarks
1628279893 [ch3887] Force expander DEBUG=false in non-prod. when the URL contains 'perf-test'
1628265701 [ch4012] Use ts-jest 'mocked' helper instead of 'as'
1628265701 [ch4012] Move authn upsert into sign-in and promote functions
1628265701 [ch4012] Allow users to sign in to same account with different provider
1628265701 [ch4012] Add test logging into account with different provider and same email
1628265701 [ch4012] Add provider login error to logs
1628265701 [ch4012] Add oauth_accounts index on provider username and type
1628263196 [ch4023] Panel expands when on snippet edit view
1628263196 [ch4023] Fix progress bar width in expanded panel
1628133499 [ch4029] Update chromedriver to Chrome 92.x
1628112557 [ch4022] server: change dev logging level to 'debug'
1627661259 [ch4001] Allow desiredUserId backdoor to continue to be usable
1627616477 [ch3997] Feature flag disable iframe
1627596677 [ch3889] Suffix /callback to magic-link route
1627585836 [ch3889] Update signup URL redirects
1627585836 [ch3889] Enable CORS for sessions/magic-link
1627585836 [ch3889] Add magic link sign in and verification scripts
1627585394 [ch3889] Serve static files from Elastic Beanstalk
1627521663 [ch3993] Rename app to Magical - Text Expansion
1627486230 [ch3701] Throw instead of returning undefined in \`getAuthProfile\`
1627486230 [ch3701] Rename OAuthProfile to AuthProfile
1627486230 [ch3701] Rename 'oauth-account-providers.ts' to 'auth-account-providers.ts'
1627486230 [ch3701] Move redirect out of \`providerLoginSuceeded\`
1627486230 [ch3701] Add magic.link passport strategy
1627486230 [ch3701] Add magic link dependencies
1627486230 [ch3701] Add magic link authentication
1627486230 [ch3701] Add \`magic-link\` case to \`getAuthProfile\`
1627486230 [ch3701] Add \`OAuthProviderNames\` type to exclude magic link authn
1627482821 [ch3976] ext: Update urijs to 1.19.7
1627482818 [ch3976] ext: Update ts-jest to 27.0.4
1627482815 [ch3976] ext: Update jest to 27.0.6
1627482805 [ch3976] ext: Update jsdom to v16.6.0 to remove dep. on 'requests'
1627403220 [ch3974] Quill editors on aetna domain should expand like plaintext
1627403220 [ch3974] Factor plain text actions out so it can be reused
1627363590 [ch3969] server: Output junit.xml unit test reports from jest
1627363574 [ch3969] extension: Output junit.xml unit test reports from jest
1627340072 [ch3944] Swap sessions userId composite index columns
1627339801 [ch3944] Add index for refresh_token
1627326001 [ch3954] Add banners.css to web_accessible_resources
1627316507 [ch3943] Create new shortcut from dropdown should open options page with new draft shortcut
1627314983 [ch3943] Rename localstorage autosuggestShortcutBody to prefillNewShortcutBody
1627152591 [ch3943] Search utils filterSnippetSuggestions() should return all suggestions when given an empty search term
1627087869 [ch3819] Handle firewall users (or any user with unsynced snippets) by showing a single import/export dialog - users behind a firewall won't have data synced and can't share, so we don't want to show the new export dialog
1627087866 [ch3819] Add export shortcuts modal
1627087821 [ch3819] Convert import export dialog to just import
1627072462 [ch3828] Use separate release channel branches per deliverable/product
1627069808 [ch3631] Send email reminder to rate app
1627069808 [ch3631] Remove rate app notification
1627069808 [ch3631] Don't show modal to anyone who already rated
1627069808 [ch3631] Add rate modal on 15 min savings
1627058879 [ch3939] Fix ProfileCircle FOUC by waiting for styles to load
1627053702 [ch3934] Try showing onboarding notification during onStartup
1627053702 [ch3934] Make the onboarding notification run two hours after user creation
1627052993 [ch3643] split out options body as a component to leverage useAppSelector for dialogs
1627051588 [ch3643] add delete shortcut dialog slice to re-use delete shortcut dialog component for single and bulk delete - update delete shortcut dialog to use dialog state and move to options app
1627051588 [ch3643] add bulk delete button in shortcut list action bar
1627051280 [ch3643] update delete shortcut dialog to accept an array of snippets - update delete options page API to accept array - update ate_removeSnippet tracking to show a count of the number of snippets deleted
1627049555 [ch3904][ch3747] if first name is missing default to show 'Someone' on receive shortcut dialog
1627049555 [ch3747] show tags on unsaved snippet rows and apply tags on save
1627049555 [ch3747] move tag helper functions to tag-utils - cleanup to use new tag-utils functions
1627049555 [ch3747] apply auto-tagging on accepting a share shortcut
1627049386 [ch3747] fix typo in snippet collection items post error
1627049386 [ch3747] add type for DuplicateShortcut grouping - used to keep reference to both the shared shortcut id and existing shortcut id
1627049386 [ch3747] add slice for snippet collections for unsaved snippets
1626994061 [ch3854] Remove current onboarding notification
1626994061 [ch3854] Alphabetize alarm order
1626994061 [ch3854] Add onClick logic for onboarding notification
1626994061 [ch3854] Add maybeCreateOnboardingNotification on an alarm
1626994060 [ch3854] Remove pin the app notification
1626988038 [ch3932] extension: Bump TypeScript target to ES2020
1626986726 [ch3794] Replace a getStore() in share-shortcuts-dialog.tsx
1626986726 [ch3794] Fix missing space between dialog buttons
1626986726 [ch3794] Don't render <ShareAppDialog> when it's closed
1626986726 [ch3794] Don't render <ImportExportDialog> when it's closed
1626986726 [ch3794] Don't render <DeleteShortcutDialog> when it's closed
1626986726 [ch3794] Call close callback from the import confirmation dialog X icon
1626986726 [ch3794] Automatically focus the tag name in the tag create/edit dialog
1626986726 [ch3794] <Dialog> onCloseCallback should be called on all closes, not just cancels
1626974703 [ch3922] Expander: Only convert the typed text to lowercase if it's not an exact trigger match
1626974703 [ch3915] Remove the placeholder focusin listener when its feature flag is enabled
1626974318 [ch3899] Don't hide the checkbox for saved in-conflict shortcuts
1626974318 [ch3899] Don't change the background to gray when hovering over saved shortcuts in conflict
1626973245 [ch3901] Rename EditorContent component to SnippetBodyPreview
1626973245 [ch3901] Fix forwarded ref for the content editor
1626968355 [ch3909] expander: Move uppercase check inside the 'if (matchingSnippet) {'
1626965617 [ch3915] autofill-forms: Put user fill modification code behind the variables feature flag
1626965238 [ch3562] Use match-sorter to search through suggested shortcuts instead of the original search logic that only looked at the start of words
1626965238 [ch3562] Treat trigger, expansion and name as separate search values, so exact matching on a specific value is more meaningful.
1626965238 [ch3562] Search within tags + display them if found on the dropdown.
1626955213 [ch3912] Expander: Use instanceof instead of element.matches in key handlers
1626916823 [ch3847] Add Coda.io attribute to event-based fill strategy
1626898338 [ch3909] Expander: Use a proper enum for trigger capitalization constants
1626898338 [ch3909] Expander: Move uppercase trigger check after exact match check
1626895342 [ch3841] server: Move fill strategy types to isolated file
1626895342 [ch3841] Move fill strategies to own file
1626895342 [ch3841] Factor out contenteditable actions
1626895342 [ch3841] Add contenteditable config section before input+textarea
1626894944 [ch3906] Expander: Use a Map of triggers => snippet instead of searching an array on every keystroke
1626894944 [ch3906] Expander: Rename \`shortcut\` argument of \`checkShortcuts\`.
1626887188 [ch3875] Use startSession() where possible in users integration test
1626887188 [ch3875] Refactor startSession test helper to accept a reqBody param
1626887188 [ch3875] Move refresh token generation to helper
1626887188 [ch3875] Backfill refresh tokens when using ateUserId backdoor to create a session
1626887188 [ch3875] Add integration tests for user using ATE user id to create session
1626886194 [ch3898] Remove join community modal
1626879392 [ch3843] Replace BUILD_APP checks with fabPanelEnabled feature flag
1626879392 [ch3843] Enable the variablesEnabled feature flag for canPromote users
1626879392 [ch3843] Context menu opens options page instead of panel if fabPanelEnabled
1626848445 [ch3876] Add missing/incorrect modal tracking
1626813071 [ch3846] Remove duplicate unsynced banner
1626813071 [ch3846] Move navbar placement in HTML markup
1626813071 [ch3846] Move join now sidebar show logic to sidebar component
1626813071 [ch3846] Move banners to a component
1626813071 [ch3846] Define join now cohorts as constants
1626813071 [ch3846] Cleanup of banner styling
1626807668 [ch3848] Logo opens options page
1626807668 [ch3848] Add home button and move back button
1626792227 [ch3885] Add 'closeTab' to website events
1626726420 [ch3818] Share shortcut on each shortcut row
1626726420 [ch3818] Migrate share shortcuts dialog to redux
1626722122 [ch3870] Server deployments should post to the #builds slack channel
1626706716 [ch3722] Show modal for share shortcut on first shortcut save
1626499793 [ch3618] Add setup for MagicPacks from sharing shortcuts
1626451825 [ch3782] Add profile circle to panel header
1626451824 [ch3782] Make profile circle shared UI component
1626445419 [ch3831] Minimize vertical padding on navbar
1626445041 [ch3829] Allow customizing the ShadowWrapper tag name and attributes
1626390274 [ch3774] Remove createHTMLShortcut model, functionality, and supporting image
1626362829 [ch3817] Replace brb default shortcut with share magical
1626362383 [ch3823] Fix date formats for WYSIWYG date picker macro
1626360627 [ch3812] ext: Use !!sharedCollectionId directly instead of state to show the receive shortcuts dialog
1626360627 [ch3812] ext: Receive shortcuts dialog should determine isUserLoggedIn via app state
1626360624 [ch3812] Stop rerendering on received shortcuts modal
1626332809 [ch3820] Replace html svgs with components
1626281316 [ch3800] update shortcut save/cancel button sizes
1626281316 [ch3800] update 'new shortcut' button to 'create shortcut'
1626281316 [ch3800] remove help button from rich text editor toolbar
1626281316 [ch3800] move tags below the save/cancel buttons
1626281316 [ch3800] Add grey background to shortcut row on hover and selection
1626280150 [ch3806] Remove the browserAction contextMenu before creating
1626277360 [ch3806] Add a 'Show Magical sidebar' browserAction context menu item
1626275987 [ch3806] Enable the fabPanelEnabled feature flag for canPromote users
1626272377 [ch3764] ext: Add 100px top offset for scrolling elements into view on the options page
1626232756 [ch3400] Override the UI test user-agent string to block server access during tests
1626232756 [ch3400] Close auto-opened onboarding tabs for existing UI tests
1626232756 [ch3400] Block UI test network access
1626212321 [ch3780] Rename options page to workspace
1626196926 [ch3778] Migrate to use browser.contextMenus.onClicked to configure contextMenus
1626134566 [ch3761] Fix join community modal showModal logic
1626133543 [ch3765] Use continue instead of return in \`notifyAllTabs\`
1626119646 [ch3755] notifyAllTabs should not notify chrome:// pages
1626119646 [ch3755] Check for empty URL before checking permitted origin
1626117249 [ch3675] extension: Populate GOOGLE_ACCOUNTS on background startup rather than all of setUserInfo
1626117249 [ch3675] extension: Backup the auth. cookie on startup
1626117249 [ch3675] ext: clear authCookieBackup on logout
1626117249 [ch3675] ext: browser.runtime.onStartup warning about re-enabling
1626117249 [ch3675] ext: Await getAccessToken in Google refreshToken function
1626117249 [ch3675] ext: Await AUTH_COOKIE_RESTORE_PROMISE for authenticated requests
1626117249 [ch3675] ext: Add a restoreAuthCookie helper
1626117249 [ch3675] Add a JSDoc comment to startNewSession.
1626117249 [ch3675] /sessions/onboard should redirect to signup-details when user.company is missing
1626112521 [ch3756] Assign context menus with an id
1625867841 [ch3670] server: Return refreshToken in /sessions/guest route
1625867841 [ch3670] server: Generate refreshToken when creating a guest
1625867841 [ch3670] server: Find user by refreshToken before creating new guest
1625867841 [ch3670] server: Create UserSession interface
1625867841 [ch3670] server: Change createUserSession to return UserSession, and createGuest and findOrCreateUser to return User
1625867841 [ch3670] server: Add refresh token column to users table
1625867841 [ch3670] extension: Set refreshToken in sync storage on new session and remove on logout
1625866872 [ch3748] Disable forceSignUpEnabled for all users
1625865506 [ch3709] Add tracking for join CTA experiments
1625864421 [ch3746] Remove encyptedBody from snippet responses
1625863566 [ch3547] Ignore 'Could not establish connection.' errors in the first 1s
1625860874 [ch3745] Adjust import/export model to sidebar and remove it from the navbar
1625850458 [ch3735] Get user info from store instead of local storage
1625850458 [ch3735] Add Provider wrapper around OptionsNavbar
1625800842 [ch3495] Add setup to detect and count pastes
1625799996 [ch3714] Remove import export model on sidebar
1625799996 [ch3714] Add Preact Navbar with functionality and responsiveness
1625772100 [ch3721] Update 'Clear-Site-Data' response header from logout route
1625765179 [ch3647] update openOrFocusTab and openOrFocusOptionsTab to accept a shouldRefresh parameter
1625765179 [ch3647] Add context menu for creating shortcuts - open new unsaved shortcut in options tab after creating shortcut from context menu
1625756764 [ch3685] remove login gate for creating a share shortcuts link
1625699803 [ch3708] Add tracking for feature gates
1625691606 [ch3690] Set user id in sync storage when updating from server and remove when logging out
1625691606 [ch3690] Add syncStorageRemove function
1625687836 [ch3593] server: Remove cookies from the Clear-Site-Data header to differentiate between log out and clearing cookies
1625687836 [ch3593] extension: Shorten request log prefixes
1625687836 [ch3593] extension: Restore the SID cookie if it's deleted for a cause other than 'expired_overwrite'
1625687836 [ch3593] extension: Reduce nesting and add names to cookie onChanged callbacks
1625687836 [ch3593] extension: Backup the SID cookie on changes
1625597074 [ch3658] read redirectTo query param for oauth callbacks to allow for custom redirect from webflow
1625341652 [ch3606] Add portugese and french translations for extension description and browser action title
1625340617 [ch3667] Join now CTA should be above airBnb sweepstakes in sidebar
1625340545 [ch3667] Add a Sign In button for guests on options page
1625325430 [bugfix] Fix server deploy pipeline
1625325396 [bugfix] Rename portugese locale
1625269718 [ch3664] Make community modal more friendly
1625269573 [ch3665] Change "Share app" to "Invite Friends"
1625267571 [ch3666] Use \`node:latest\` when uploading builds to chrome store
1625263119 [ch3606] Add portugese and french locales
1625260630 [ch3661] Add iframe=true to signup URL query parameter
1625257625 [ch3652] update community modal to use a gif instead of Lottie
1625257392 [ch3652] add onLoad to NoncedStyle component - update Dialog component to wait for stylesheets to load before showing
1625251761 [ch3657] Fix spacing between buttons
1625248875 [ch3656] Update community, support and cta on sidebar
1625244508 [ch3653] Update extension builds to honor monorepo tagging format
1625241228 [ch3653] Update bump increment comment
1625241177 [ch3653] Use bash in bump and tag script
1625239510 [ch3651] Share shortcuts dialog style fix
1625181881 [ch3649] Turn off all notifications
1625178157 [ch3334] Community Modal
1625177987 [ch3334] Add lottie player
1625177048 [ch3515] Show login feature when guests attempt to use variables in WYSIWYG editor
1625176998 [ch3515] Show login feature when guests attempt to tag
1625176868 [ch3515] Create feature gate modal and slice
1625176003 [ch3514] Force users to install
1625162261 [ch3493] add user property tracking for tagged shortcut counts
1625162202 [ch3545] add ui test for LinkedIn profile page public variables
1625161410 [ch3489] Pull dialog styles into dialog.css for dialog components
1625161410 [ch3489] Migrate import/export dialog to preact
1625161410 [ch3489] Migrate delete shortcut dialog to preact component
1625161410 [ch3489] Migrate Share Shortcuts guest and logged in dialogs to preact
1625161410 [ch3489] Migrate Share App dialog to preact
1625161410 [ch3489] Migrate Receive Shorcuts dialogs to preact
1625161410 [ch3489] Migrate Delete Tag dialog to preact
1625161410 [ch3489] Migrate Create or Edit Tag dialog to preact
1625161410 [ch3489] Migrate Create HTML Shortcut Dialog to preact component
1625161410 [ch3489] Dialog preact component
1625161410 [ch3489] Add shadow root wrapper component
1625161410 [ch3489] Add nonce to the Content Security Policy
1625161410 [ch3489] Add idea code styles for WebStorm to gitignore
1625161410 [ch3489] Add comment explaining why we pull directly from local storage
1625161410 [ch3489] Add NoncedStyle component
1625161236 [bugfix] Update server build script to account for new tag format
1625159123 [bugfix] Change tagging format to  prefix
1625100008 [bugfix] Update root gitlab-ci.yml syntax error
1625099736 [bugfix] Update root gitlab-ci.yml
1625098706 [bugfix] Update bump and tag script syntax error
1625094206 [ch3244] Migrate vscode tasks to root
1625094199 [ch3244] Merge .vscode/settings.json
1625094191 [ch3244] consolidate .vscode/launch.json
1625094175 [ch3244] Remove server/.gitlab directory
1625094140 [ch3244] Strip module suffix from git tag for manifest.json
1625094133 [ch3244] Add server eb config
1625094022 [ch3244] Refactor .gitlab-ci to work with monorepo
1625094010 [ch3244] Consolidate bump-and-tag-version script
1625093901 [ch3244] Move server code into subdir
1625093764 [ch3244] Merge remote-tracking branch 'server/develop'
1625093698 [ch3244] Move code into extension subdir
1625090786 [ch3336] Remove nested if statement
1625090786 [ch3336] Add hijacking placeholders with focusin and blur once event listeners
1625075699 [ch3639] await redirect to options page
1625060450 [ch3599] Improve share shortcuts tracking
1625010888 [ch3634] clean up sendgrid api call
1625010887 [ch3634] add route to add to rate app remind sendgrid list
1624928540 [ch3635] add signup url to sidebar cta
1624896246 [ch3614] Enable share shortcuts feature for all users
1624727855 [ch3611] Fixing regression with processing %clip% variable
1624668109 [ch3610] Add feature flag for appendPlaceholders
1624654835 [ch3499] add custom referral code into default snippet to share
1624654560 [ch3551] add banner join now cta feature flagged
1624652520 [ch3582] only show pin extension to new users
1624651986 [ch3528] add join now sidebar cta feature flagged
1624651228 [ch3583] turn on rate app notification for everyone
1624651148 [ch3583] only enabled onboard notif for new users
1624650885 [ch3523] update join now cta design
1624650092 [ch2845] make fill text format configurable - update ha-config with new text format and to fix plain text destinations
1624650092 [ch2845] make fill strategy url string RegEx
1624650092 [ch2845] make editor fill strategy dynamic and configurable
1624649877 [ch2846] Update fill strategy config
1624643805 [ch3530] create experiment for join ctas
1624638505 [ch3548] Package bootstrap CSS with the extension
1624635181 [ch3555] Support pages with reloading iframes (e.g. Smart Recruiter)
1624635181 [ch3555] Removing support for expansion in Gmail
1624635181 [ch3555] Remove encapsulated jQuery function
1624635181 [ch3555] Remove all usage of jQuery for expansion
1624635181 [ch3555] Remove Google Plus special case
1624635181 [ch3555] Attach on window capturing phase instead of document for expansion
1624631121 [ch3607] Use an inline visibility: hidden to prevent the notification panel from rendering before fab.css loads.
1624630251 [ch3607] Don't show scrollbars in notification panels
1624578397 [ch3604] Await promises when opening/creating tabs
1624560649 [ch3535] Use typed JSON-RPC clients
1624560649 [ch3535] Use JQuery types
1624560649 [ch3535] Fix missing and incorrect argument for getting triggerInfo
1624560649 [ch3535] Fix expander.ts lint issues
1624560649 [ch3535] Enforce window selection
1624560649 [ch3535] Check for missing key property
1624560649 [ch3535] Check for Keyboard event instance type on originalEvent
1624560649 [ch3535] Change expander.js expansion to .ts
1624560649 [ch3535] Change debugLog to take variadic arguments
1624560649 [ch3535] Add snippet tracking type
1624560649 [ch3535] Add console error for missing trigger info
1624560649 [ch3535] Add and fix basic types
1624560649 [ch3535] Add JQuery types
1624500743 [ch3597] Update usage of ChromeWebstore to receive JSON-formatted responses
1624467884 [ch3537] Handle users.email not being unique
1624467884 [ch3537] Drop uniqueness on users.email and add index on users.deleted
1624467884 [ch3537] Drop redundant index snippet_collections.creator_user_id
1624460258 [ch2846] Add new fill strategy configuration - update allowedAttr to include title, target to match CE config
1624429583 [ch3588] Send the trackingDeviceId to /session/onboard
1624425631 [ch3588] Remove the \`replaceChromeExtensionPageWithOnboarding\` feature flag
1624394728 [ch3578] Remove leftover console.log that spams websites when a content-panel is used
1624394728 [ch3578] Include the Amplitude device ID in the uninstall URL
1624393446 [ch3511] Rename \`payloadUserId\` to \`analyticsPayload\` and add logging
1624391287 [ch3511] Return 'false' for lastSessionUninstalledAt when \`null\`
1624375263 [ch3580] Set \`richTextEditorEnabled\` to \`true\` for firewalled users
1624374364 [ch3511] Add \`lastSessionUninstalledAt\` property to /users/info
1624324877 [ch3553] Track when users accept shared shortcuts to amplitude
1624320030 [ch3567] add utm campaign on share shortcuts
1624302971 [ch3533] feature flag experiment for new user force signup
1624063756 [ch3491] Use key instead of keyCode within key* event handlers
1624063756 [ch3491] Refactor check for tribute open into helper
1624051335 [ch3491] Replace keyUpHandler with keyDownHandler to handle buffer clearing
1624051311 [ch3491] Clear expansion buffer on selection change anywhere in the document
1624047070 [ch3536] handle large requests to delete sendgrid uninstalled users
1623985057 [ch3120] Run tests on every merge request
1623985057 [ch3120] Add build manifest script to \`pretest\` script
1623979908 [ch3120] Use slim image instead of alpine
1623979908 [ch3120] Use --verbose when running jest tests
1623979908 [ch3120] Remove dynamic imports in sessions unit test
1623979908 [ch3120] Add teardown logic to integration tests
1623979882 [ch3120] Separate jest unit and integration config
1623979358 [ch3120] Upgrade jest and ts-jest to v27
1623979118 [ch3120] Do not make sendgrid requests on develop or in tests
1623960815 [ch3517] Output git-describe string on /info
1623959649 [ch3517] Move some @types packages to prod deps.
1623958027 [ch3517] Remove implicit \`any\` from delete-uninstalled-users-weekly-cron.ts
1623958027 [ch3517] Enable the \`knexStringcase\` plugin for seeds/migrations
1623958027 [ch3517] Convert seeds file to use ESM and camelCase
1623917292 [ch1599] Write git/version details to dist/build.json
1623917292 [ch1599] Read from dist/build.json for GET /info
1623888899 [ch3314] Enable \`noImplicitAny\` in tsconfig.json
1623888851 [ch3314] Fix types on DB queries joining snippets with source IDs
1623888851 [ch3314] Fix \`noImplicitAny\` violations in models/handlers
1623888851 [ch3314] Add types to request params
1623888851 [ch3314] Add types to TS migration files
1623874269 [ch3314] Use cors types
1623874269 [ch3314] Give types to functions which create users
1623872804 [ch3314] Add type to \`env\` in knex-config.ts
1623872798 [ch3314] Passport type fixes
1623872776 [ch3314] Use \`qs\` package for query string arguments
1623872755 [ch3314] Install missing @types packages
1623861885 [ch3479] Add separate model for empty shortcuts link with functionality and CSS
1623853281 [ch3505] fix onboard notification copy
1623812864 [ch3460] Test that snippet body edits are preserved on storage changes.
1623812864 [ch3460] Rename snippet-body-editor-lossless.ui.test.ts
1623804780 [ch3502] \`npm audit fix\`
1623795585 [ch3501] fix onboard notification featureflag name
1623787518 [ch3498] Update \`chrome-webstore-manager\` to fix security vulnerabilities
1623783130 [ch3497] Resolve/reject a promise depending on the result in addToSendgrid
1623783098 [ch3497] Return a response for POST /users/waitlist and /users/switch-for-premium
1623779378 [ch3467] Update existing shortcut triggers and bodies in the options page when storage changes, if not dirty.
1623738358 [ch2596] Move shortcut body trailing space plaintext code to the extension.
1623685347 [ch3316] Create and return PublicSnippetCollectionMetadata with creatorUserId omitted from SnippetCollectionMetadata when accessing public route
1623685310 [ch3316] Add referralCode to UserPublicInfo
1623448176 [ch3468] Update extension name
1623447902 [ch3468] Open signup flow in the same tab when receiving share as a guest
1623442104 [ch3464] Add more .vscode/settings.json formatting settings
1623431472 [ch3462] Change signup page to open on new tab
1623429122 [ch3457] Only show pop-up when leaving options page when there are dirty or conflicting snippet row forms
1623429122 [ch3457] Maintain isDirty attribute on OptionsSnippetRowState
1623423944 [ch3463] Hide checkboxes in TagDropDown component when options.isSelectable is false
1623374699 [ch3448] Use the post filtered snippet list for all computations on snippet list
1623373564 [ch3453] show try shortcuts on default in config
1623373245 [ch3414] eslint: Allow named non-arrow callback functions
1623373245 [ch3414] Use 100% width for .body-field-readonly
1623373245 [ch3414] Recreate the TinyMCE editor if the TinyMCE iframe reloads due to being moved.
1623373245 [ch3414] Persist snippet body rich editor content upon blur. Restore upon frame reload.
1623373245 [ch3414] Add a setBodyEditorContent helper
1623367320 [ch3449] Update toast grammar for shared shortcuts
1623364638 [ch3454] add try shortcuts enabled to config
1623364358 [ch3449] Modify toast durations
1623339571 [ch3421] Only load TinyMCE when the shortcut body is clicked/focused in the options page
1623339571 [ch3421] Convert magical_formatting SVG inline \`style\` to attributes to prevent CSP violations
1623336357 [ch3439] switch amplitude setGlobalUserProperties to setUserProperties as it is deprecated
1623292540 [ch3419] Show create html dialog if users have rich text editors enabled
1623292540 [ch3419] Add "style shortcuts" modal to options page
1623292241 [ch3427] Save default snippets on use
1623291996 [ch3427] Do not reinstall default snippets upon logout
1623291734 [ch3417] Call localStorageClearOnLogout when logging the user out
1623291183 [ch3417] retain notifications and latestfill on logout
1623283688 [ch3416] Use tagDropDownComponent and specify isSelectable
1623283688 [ch3416] Share all shortcuts when none are selected
1623283688 [ch3416] Modal says 'All shortcuts' when all shortcuts are shared
1623283688 [ch3416] Allow bulk actions when nothing is selected
1623283688 [ch3416] Add ability make tags not selectable.
1623282835 [ch3431] update sweepstakes link and date
1623281336 [ch3429] update airbnb raffle to a sweepstakes
1623278422 [ch3430] update raffle to sweepstakes
1623267290 [ch3428] update signup url from options cta
1623205591 [ch3411] Bulk check should be unchecked  when there are no shortcuts
1623205518 [ch3411] No filtered records message should not show when there are no shortcuts
1623195598 [ch3408] Add feature flag for sharing button
1623195205 [ch3409] focus on tag name input on modal open
1623194423 [ch3410] Reset selected ids when snippets are saved
1623193520 [ch3408] Enable shortcut sharing with \`canPromote\` users
1623190800 [ch2933] fix issue with create/edit tag toast message showing both error and success
1623190800 [ch2933] add support for tag colors - randomly pick from pre-set list of colors when creating a tag
1623190544 [ch3408] Move shareShortcutsEnabled to feature flag
1623188938 [ch3354] Check for cookie change removed flag on listener
1623188687 [ch3350] insert snippet collection metadata through POST - avoid merging metadata as tag color should only be set on creation but not updated - only allow merging of snippet collection label on conflict to avoid wiping metadata on upsert
1623188687 [ch3350] add tests for snippet collection metadata
1623188687 [ch3350] add tag color metadata to snippet collection model
1623188687 [ch3350] add migration for snippet collections metadata
1623188641 [ch3331] Evaluate conflicts using snippet body instead of plainTextBody
1623188621 [ch3331] When snippet is new, show Discard action instead of Cancel
1623188621 [ch3331] Show 3 distinct lists of snippets on snippet list
1623188621 [ch3331] Move conflict as an OptionsSnippetRowProps instead of within the mode prop
1623188621 [ch3331] Mark new snippets that are in conflict with a new icon
1623188621 [ch3331] Filters should not apply to snippets in conflict
1623188621 [ch3331] Compute unsaved snippets in conflict within the reducer
1623188621 [ch3331] Compute saved snippets in conflict within the reducer
1623188181 [ch3406] Clear selected shortcuts when filter is reset
1623178345 [ch3243] add gray border to notification gifs
1623177931 [ch3397] Replace [data-is-editing] with [data-mode=edit]
1623174297 [ch3323] Redirect existing users to options page when logging in
1623173938 [ch3356] Improve empty tag dropdown copy
1623173938 [ch3356] Fix tag filter banner copy, link margin, and colour
1623173937 [ch3356] Add a \`helpUrl\` helper
1623172783 [ch3354] Create listener on the the shareId cookie to redirect or focus the options page
1623167375 [ch3354] Create listener on the the shareId cookie to redirect or focus the options page
1623126206 [ch3353] update airbnb raffle wording
1623121146 [ch3348] update onboard notif copy
1623121129 [ch3348] feature flag onboard notification
1623107190 [ch3349] feature flag onboard notif
1623093893 [ch3332] update rate app notification copy
1623093768 [ch3345] Enable WYSIWYG for 50% of new users on 3.2.x and 100% of 3.3.x users
1623082919 [ch3328] Only show delete icon for unsaved shortcuts in edit mode
1623082450 [ch3321] Strip subdomain from the cookie domain when listening for logout
1623078582 [ch3313] Correct snippet collection db-schema values
1623077550 [ch3319] update rate app notification
1623076750 [ch3322] update magical logo without beta
1622990948 [ch3318] Add back the cookie options, but strip the max-age
1622924535 [ch3318] Fixes + workarounds for logout issues
1622858688 [ch3312] Add tracking for share and tag features
1622856203 [ch3312] Replace  with always-populated snippetIds
1622855456 [ch3312] Replace \`numSnippets\` with always-populated snippetIds\`
1622855040 [ch3257] Get expansion timeout from app config
1622855040 [ch3257] Change expansion buffer timeout to two seconds
1622855040 [ch3257] Add 'scto' as amplitude property if present in sync storage
1622851249 [ch3311] Server: add expansion timeout to app config
1622850797 [ch3274] Use the public endpoint for snippet collection when receiving a share
1622850797 [ch3274] Remove unused function maybeShowShareDialog
1622850797 [ch3274] Check to see if user is logged in before saving received shortcuts
1622850139 [ch3263] Evaluate selectedIds in shortcut list as a set to avoid duplicate entries
1622850139 [ch3263] Ensure duplicates dont get added to filteredCollectionIds
1622850139 [ch3263] Clicking indeterminate inputs should flip to checked
1622849317 [ch3271] Split GET snippet collection into public and protected endpoints for our different use cases
1622849078 [ch3281] revert 'create-tag' button id deletion
1622849078 [ch3281] Update snippet collections locally when deleting a snippet
1622849078 [ch3281] Show number of items in collection when deleting tag
1622847990 [ch3220] Remove console logs
1622847990 [ch3220] Prevent screen from scrolling to top on click of delete of edit tags
1622847990 [ch3220] Perform tag name validation before save
1622847990 [ch3220] Ensure tags are saved with a unique name
1622847990 [ch3220] Editing tag names should not edit collection items
1622847990 [ch3220] Clear selected snippets when applying filters
1622838443 [ch3300] Save default shortcuts before adding to a collection
1622837074 [ch3192] update magical logo on options page
1622829570 [ch3238] Tag dropdown null state - allow creating tag from filter dropdown when no tags exist - update Create tag modal button to say Create if no shortcuts selected, instead of Create and Apply
1622826749 [ch2816] Update comment on how to run delete-uninstalled-users-weekly-cron.ts
1622824228 [ch3238] add bold styling to Tag name on delete tag modal
1622823702 [ch3238] add a No Results filter message in shortcut list
1622821977 [ch3238] style tag filter banner as per figma designs
1622821061 [ch3222] Remove checkbox for shortcuts that are new
1622821061 [ch3222] Consolidate styling for tags
1622821061 [ch3222] Bulk select should only select filtered snippets
1622818127 [ch3267] Only \`convertNewlineToBr\` for snippet saves from non-WYSIWYG body fields
1622818127 [ch3267] Only \`convertNewlineToBr\` for imports with \`version\` < 3
1622818127 [ch3267] Improve \`convertNewlineToBr\` and move to utils.
1622771970 [ch3219] Save default snippets before saving its collection
1622770795 [ch3201] Use "shortcut" or "shortcuts" depending on share count
1622770795 [ch3201] Update share modal to match figma
1622770795 [ch3201] Center shortcut number text in modals
1622770795 [ch3201] Add tracking for shortcut copy link
1622770795 [ch3201] Add pluralize util for shortcut text in modals
1622765698 [ch3240] Sort tags alphabetically in dropdown
1622765698 [ch3240] Sort labels on shortcuts alphabetically
1622765386 [bugfix] Don't process 0 snippet deletes from server response as error
1622765374 [ch3159] Rename tag action button label
1622765122 [ch3175] Fix label styling when displayed in shortcut list
1622761456 [ch3175] Tag modals styling
1622761456 [ch3175] Allow labels to be removed and applied to all snippets with that label
1622761452 [ch3175] Allow labels to be created and applied to selected snippets
1622761345 [ch3175] Allow labels to be editted
1622761309 [ch3175] Save snippet collection item changes to the server
1622761309 [ch3175] Create SnippetCollectionBulkItem interface
1622761309  [ch3175] Ensure snippet ids added to collections are unique
1622758728 [ch3183] move notification logic into client
1622758300 [ch3218] don't show notifications on magical sites
1622757793 [ch3252] Make src/ui-tests a devDependecy of ./
1622757510 [ch3239] fix share app modal graphic
1622750094 [ch3212] add styling to tag dropdown
1622741884 [ch3251] update pin notification gif
1622736216 [ch3245] Use \`<u>\` for TinyMCE underlines instead of \`<span style="text-decoration: underline;">\`
1622735834 [ch3226] Use unminified TinyMCE assets for dev builds
1622735834 [ch3226] Update the URL for the WYSIWYG help button
1622735834 [ch3226] Reset the TinyMCE undo state and mark the field as not dirty after the \`setContent(initialValue, { format: 'raw' })\`
1622727573 [ch3214] Only show the WYSIWYG incompatible warning if the snippet is incompatible
1622694697 [ch3228] Change call to logout endpoint to be a POST
1622691443 [ch3223] Change /sessions/logout to the POST method.
1622689890 [ch3223] Proceed with clearing the cookie and storage if the DB session can't be deleted.
1622689586 [ch3223] Add quotes and explicit fallback \`Clear-Site-Data\` header values.
1622672823 [ch3215] update share urls for app and shortcuts
1622672613 [ch3216] add share urls into config
1622668210 [ch3063] add new tag dropdown component
1622668210 [ch3063] add filter tag dropdown to snippet list header
1622668210 [ch3063] add bootstrap-react
1622668210 [ch3063] add Edit Tags dropdown to shortcut list - populate tag dropdown with collections data from state
1622668210 [ch3063] Styling for tag edit and tag filters
1622666753 [ch3204] add gif into rate app notifications
1622651325 [ch3122] feature flag rate app notification
1622651325 [ch3122] create rate app notification
1622650425 [ch3140] Add shared-ui-components/tinymce-icons.js to web_accessible_resources
1622648648 [ch3136] Fix incorrect negation for '<br data-mce-bogus="1">' check
1622647568 [ch3181] check time saved greater than 0
1622643532 [ch3180] Add success toast upon logout
1622643509 [ch3180] Ignore default snippets when highlighting newly added snippets in green
1622612356 [ch3140] Style the formatting toolbar like a floating panel and improve borders
1622612308 [ch3140] Add a Magical TinyMCE icon pack
1622606824 [ch3136] Make the WYSIWYG body field required
1622606598 [ch3164]Show a banner on the snippet body when rich text isn't supported
1622606459 [ch3159] create common get all snippets test method
1622606459 [ch3159] Use provided id on collection creation
1622606459 [ch3159] Support upserts on POST /snippet-collections
1622606459 [ch3159] Add POST /snippet-collections/items route
1622606459 [ch3159] Add DELETE /snippet-collections/items route
1622606459 [ch3159] Add DELETE /snippet-collection route
1622606352 [ch3129] Send all snippets (including defaults) to global state when snippets change in local storage
1622606352 [ch3129] Perform user logout flow when API server SID cookie changes
1622606352 [ch3129] Factor login or update logic to separate function
1622606352 [ch3129] Add logout to options page
1622598775 [ch3172] Add wysiwygDateVariableFormats to appConfig
1622598017 [ch3170] Store snippet collections into SnippetList state
1622598017 [ch3170] Get snippet collections keyed by snippet id
1622598017 [ch3170] Display labels for snippets through collections OptionsSnippetRowProps
1622597202 [ch3137] Define date formats for use in date variable picker in wysiwyg editor
1622597202 [ch3137] Add date variable selection to Tiny editor
1622597202 [ch3137] Add clip variable selection to Tiny editor
1622596759 [ch3173] Closing received shared shortcuts modal should clear cookie
1622588135 [ch3119] Rename SNIPPET_SHARE to SNIPPET_COLLECTIONS
1622587859 [ch3119] Rename collection creation to "save"
1622587530 [ch3119] Support removing items from existing collections
1622587530 [ch3119] Support adding items to existing collections
1622587523 [ch3119] Support removing collections
1622587523 [ch3119] Add snippet collection bulk item interface
1622582436 [ch3119] Update local storage when creating a snippet collection
1622578262 [ch3119] Update snippet collections whenever we sync snippets
1622578260 [ch3119] Add server interaction for storing snippet collections
1622569842 [ch3168] Set the TinyMCE content using the raw format to preserve surrounding \`&nbsp;\`
1622567626 [ch3051] Accept shared shortcuts on options page
1622558759 [ch3099] add airbnb raffle dates to config
1622552507 [ch3051] Merge isEditing into an enum type within mode property on OptionsSnippetRow
1622552507 [ch3051] Get snippets by collection id from the server
1622552507 [ch3051] Add gray info toast
1622525190 [ch3069] feature flag airbnb raffle to start/end date
1622525190 [ch3069] create airbnb raffle sidebar
1622525190 [ch3069] add referrals to update user data sync
1622523067 [ch3124] rename notif to notification
1622523067 [ch3124] refactor notifications to its own panel
1622499411 [ch3087] Only allow registered users to create shared shortcuts
1622499409 [ch3087] Save default snippets to server before sharing
1622499384 [ch3087] Update button styling to honor disabled state
1622499384 [ch3087] Allow OptionsApi.save() to take an array of snippets
1622499382 [ch3087] Open share shortcuts dialog with share link for selected shortcuts
1622499268 [ch3087] Create snippet share collections on the server
1622484135 [ch3087] Convert ServerSnippetCollection to SnippetCollectionMetadata model
1622480496 [ch3157] Return inserted SnippetCollectionMetadata on POST
1622475326 [ch3090] Convert findSnippetIdsByCollectionId() to pluck
1622474047 [ch3090] Scope cookies to top-level describe block
1622474047 [ch3090] Change snippet collection to use snippet ids instead of number
1622474047 [ch3090] Add test for GET /snippet-collections
1622474047 [ch3090] Add snippet collection test helpers
1622474047 [ch3090] Add GET /snippet-collections route
1622437537 [ch3152] Prevent conversion of \`<b>\` to \`<strong>\` and \`<i>\`  to \`<em>\` in TinyMCE.
1622389186 [ch3147] Add a help button to the WYSIWYG toolbar
1622261901 [ch3088] hide iframe on close and show iframe if url changes
1622257965 [ch3130] Logout endpoint - clear session + cookie
1622243532 [ch3035] add time saved sidebar element
1622243311 [ch3128] add top ten percent users for rate app feature flag
1622242979 [ch3035] add shortcut expansions to latestfill
1622236595 [ch3126] Track whether a snippet save used WYSIWYG
1622236200 [ch3126] Enable the rich text editor for any snippets that are compatible with the TinyMCE config
1622227188 [ch3083] Ignore checkbox interaction when determining onSnippetInput()
1622227188 [ch3083] Add reactive checkboxes to snippet list
1622222394 [ch3068] return number of referrals for a user
1622222126 [ch3042] show onboard notif panel if not done onboarding in 2 hours
1622222126 [ch3042] create onboard notif panel
1622222126 [ch3035] change time saved ha config array to match server
1622212043 [ch3082] Remove UI test depencies from top-level package.json
1622212043 [ch3082] Change forms.html to use UI test node modules
1622212043 [ch3082] Add isolated UI testing package.json
1622211989 [ch3040] redirect ate users in onboard route
1622173238 [ch3112] Add a \`FF_RICH_TEXT_USERIDS\` environment variable to grant the \`richTextEditorEnabled\` feature flag to specific users.
1622154156 [ch3066] feature flag join community sidebar button
1622150215 [ch2951] show pin notif on first options close
1622150215 [ch2951] feature flag panel fab
1622150215 [ch2951] create pin panel notification
1622140296 [ch2786] Improve the logic of redirecting the user to the options tab
1622140296 [ch2786] Display share modal when cookie contains shareId
1622140296 [ch2786] Clear shareId from cookie when share modal is closed
1622138528 [ch2786] Move getCookieValues into util
1622055824 [ch2810] weekly script for deleting uninstalled sendgrid users
1622054974 [ch2786] Ignore .idea folder in git
1622051693 [ch3061] Remove duplicate Plus icon
1622051693 [ch3061] Move the options page sidebar to its own Preact component
1622051693 [ch3061] Create the 'global' redux store slice from the existing \`store.global\`
1622051693 [ch3061] Create default global state in a function
1622051693 [ch3061] Convert some options page methods and element references to be static
1622051693 [ch3061] Add recoveryState to the global store
1622045435 [ch2971] open registration on install for ate
1621984418 [ch3050] ensure that editors are usable after filling
1621980198 [ch3047] Wait for expected output in UI test
1621980198 [ch3047] Add trix dev dependency
1621980198 [ch3047] Add Trix UI test
1621974391 [ch3048] take down promo iframe
1621964030 [ch3029] Return number of snippets in SnippetsCollection model
1621964030 [ch3029] Error handling for SnippetCollections get handler
1621958396 [ch3033] Add slate UI test
1621958361 [ch3033] Add slate-js dependencies
1621957884 [ch3033] Add Quill editor UI test
1621890465 [ch3039] update time saved messages
1621638714 [ch3033] Add TinyMCE UI test
1621638714 [ch3033] Add Quill dev dependency
1621633516 [ch3031] Add CKEditor4 UI test
1621633511 [ch3031] Add optional frame selector for editors in iframes
1621631994 [ch3031] Add CKEditor5 classic test case
1621631994 [ch3031] Add CKEditor4 dev dependency for UI tests
1621631991 [ch3031] Add CKEditor5 classic editor dependency
1621610397 [ch3022] Use find by CSS selector instead of by id
1621610397 [ch3022] Add option for sanitizing input and output
1621610397 [ch3022] Add draft-js editor test
1621610275 [ch3022] Add basic draft-js editor
1621610157 [ch3022] Add draft-js as a dev dependency for testing
1621608922 [ch3028] Bump hosted-git-info to v2.8.9
1621566184 [ch3024] Switch back to upstream rollup-plugin-chrome-extension v3.5.6
1621565864 [ch3023] \`npm audit fix\` bumping hosted-git-info and y18n
1621544841 [ch2950] Make a reusable <ContentPanel> component using a <PortalFrame>
1621537878 [ch3017] Attach expander on all contenteditable elements
1621536903 [ch2994] add route to get user name from referral code
1621534155 [ch3016] Update Microsoft SSO configurations
1621525886 [ch3010] Log in JSON format when not developing
1621523984 [ch3007] Provider callback should redirect to errorUrl on errors
1621523172 [ch1851] Check the Google access token response status
1621523019 [ch1851] Install @types/node-fetch
1621456273 [ch2770] Allow for cascading delete on snippet in the share table
1621456261 [ch2770] Add routes + functionality for create a snippet share and fetch a snippet share
1621456140 [ch2770] Add db migration file for new snippet_collections and snippet_collection_items tables
1621456140 [ch2770] Add .idea folder to gitignore
1621451367 [ch2935] added localization to chrome extension
1621446332 [ch2710] refactor right rail to not show tertiary buttons as default
1621446332 [ch2710] create basic help panel
1621436878 [ch2974] Remove permission requests to file:///* origins
1621435911 [ch2973] Ensure expander listeners get destroyed on update before they are re-added
1621403723 [ch2976] change shareurl
1621380511 [ch2972] Revert "[ch2742] expander: use input event instead of keypress"
1621380511 [ch2972] Revert "[ch2742] expander: get current character from event.data"
1621380511 [ch2972] Add shortcut check to zero timeout
1621380497 [ch2972] Revert "[ch2742] Add test for synchronous expansions"
1621379719 [ch2972] Revert "[ch2940] Remove Gmail specific listener"
1621379717 [ch2972] Revert "[ch2940] Move keyup handler to capturing phase"
1621379714 [ch2972] Revert "[ch2940] Add deconstructor to expander-js"
1621367020 [ch2790] Remove browser.permissions methods from BrowserApi
1621366554 [ch2790] Replace wildcard origin with specific protocols when requesting permissions for origins
1621292571 [ch2780] Add error message to *serverError tracking events
1621289434 [ch2949] expander: Avoid deep cloning store on every keystroke
1621288893 [ch2931] Clear default snippets when user performs import overwrite
1621288893 [ch2931] Add default attribute to snippets coming from defaultSnippets store
1621288336 [ch2856] Don't use a \`userPartial\` property for the setUserProperties RPC method call.
1621283802 [ch2940] Remove Gmail specific listener
1621283802 [ch2940] Move keyup handler to capturing phase
1621283802 [ch2940] Add deconstructor to expander-js
1621278022 [ch2930] Use SnippetManager.getSnippets() to populate the options page snippet list
1621054387 [ch2939] Enable the \`richTextEditorEnabled\` user feature flag when user.canPromote is true
1621053723 [ch2938] Lazily initialize TinyMCE when it's visible using IntersectionObserver
1621050549 [ch2926] Don't convert new lines to <br> when saving snippets with the rich text editor
1621050549 [ch2926] Basic TinyMCE support for snippets in the options page
1621035846 [ch2926] Install the tinymce-react package
1621033026 [ch2886] change sign in button to not google specific
1621028254 [ch2871] Isolated fix for expansion in zendesk editors
1621028024 [ch2742] expander: use input event instead of keypress
1621028024 [ch2742] expander: get current character from event.data
1621028024 [ch2742] expander: drop unsued code
1621028024 [ch2742] expander: cache snippets from store
1621028024 [ch2742] Refresh page for every expansion test
1621028024 [ch2742] Notify default snippet changes, once
1621028024 [ch2742] Add test for synchronous expansions
1621024982 [ch2086] Convert export shortcuts version to integer
1621022304 [ch2906] change demo to try shortcuts, open on default
1621006055 [ch2892] hide iframe if removed by user until update
1621005048 [ch2086] change json import/export format
1621004780 [ch2772] Fix logging message when email not provided by auth provider
1621004447 [ch2772] add microsoft sso route
1620940437 [ch2766] Render the options page snippet list with Preact
1620935371 [ch2766] Render the options page footer using Preact
1620935371 [ch2766] Add a redux store for the options page
1620932533 [ch2773] Support auth routes for facebook OAuth
1620932533 [ch2773] Create generic functions for auth routes (entry route, callback, loginSuccess)
1620932533 [ch2773] Configure passport FacebookStrategy
1620932533 [ch2773] Add passport-facebook package
1620849411 [ch2766] Hide the options page close icon SVG
1620849241 [ch2766] Make the banner have a higher z-index than positioned close buttons
1620848134 [ch2766] Install @reduxjs/toolkit and react-redux packages
1620848085 [ch2766] Alias react libraries to preact/compat
1620778709 [ch2884] send only sendgrid first name for waitlist users
1620769590 [ch289] Don't request a refresh token for the Google OAuth login flow
1620769590 [ch289] Add unit tests for handlers/sessions
1620769263 [ch289] Make Google SSO methods generic to an "auth provider"
1620769142 [ch289] Find and store users by OAuth account during sign in/up
1620768954 [ch289] Make access token and expiry optional
1620768954 [ch289] Add authn/authz type to oauth_accounts
1620768954 [ch289] Add Google Profile interface
1620768744 [ch289] Add debug logs to googleCallback
1620739423 [ch2819] update background server request test for cookies
1620739423 [ch2819] send referralcode cookie to server
1620739423 [ch2819] add cookie function to browser api
1620705089 [ch2775] validate referredbyuserid
1620705089 [ch2775] shorten uuid for referral code
1620705089 [ch2775] save referred by user id in user model
1620705089 [ch2775] refactor user params to object
1620704040 [ch2804] reorder sidebar options
1620690229 [ch2801] Use actionable-icon for dialog close buttons
1620689566 [ch2786] add share app on options sidebar
1620676578 [ch2858] add route to add waitlist form submissinos to sendgrid
1620403021 [ch2665] create ate specific checklist
1620179685 [ch2815] remove sendgrid user removal on uninstall
1620162118 [ch2814] Remove setting \`synced:false\` outside of save/delete attempts
1620159438 [ch2792] add tests for different req user upserting the same snippet id
1620159437 [ch2792] add upsertAndClone to snippet handler and route based on extension version
1620159437 [ch2792] add findBySnippetId to snippet model - move snippet creator check up one level into the handler
1620146211 [ch2806] Enable eslint jsdoc/no-bad-blocks rule
1620146211 [ch2806] Enable JSDoc recommended eslint rules except ones that require documenting
1620146211 [ch2806] Enable JSDoc check-indentation and check-line-alignment eslint rules
1620145892 [ch2769] remove zendesk from ha-config default to match server config
1620145892 [ch2769] avoid dispatching multiple editor events for facebook/messenger
1620143657 [ch2790] Cleaning up JSDoc formatting in background-snippets.ts
1620142243 [ch2790] Consolidate tracking events after handling saving/deleting of snippets offline
1620142218 [ch2790] Use snippet id from saved snippet server response when saving to localStorage
1620142218 [ch2790] Resolve unsynced snippets before fetching
1620142218 [ch2790] Render a banner on the options page when there are unsynced snippets
1620142218 [ch2790] Handle snippet saving when there is a server error
1620142218 [ch2790] Handle snippet deletion when there is a server error
1620142218 [ch2790] Add synced and deleted attribute to Snippet model
1620079066 [ch2792] add helper function to parse extension version header
1619805016 [ch2791] update magical h1 font
1619797221 [ch2789] Session should return null  when no session found
1619645012 [ch2392] Use the "view" suffix for the share view
1619645012 [ch2392] Remove redundant "View" suffix from variablesView
1619644884 [ch2392] Rename ha-value* classes
1619644884 [ch2392] Rename default view to remove right rail suffix
1619644881 [ch2392] create variables tab component in menu
1619644774 [ch2392] create shortcuts tab component in menu
1619644539 [ch2392] replace right rail default with menu
1619624771 [ch2750] Implement a <PortalFrame> component to isolate components from site styles/scripts
1619624771 [ch2750] Create shared actionable icon styles
1619624771 [ch2750] Add panel to choose the snooze duration
1619542267 [ch1898] update chrome driver to work with Chrome 90
1619542267 [ch1898] add vscode launch json for ui test debugging
1619542267 [ch1898] Differentiate Magical dropdown tests
1619542267 [ch1898] Add generated forms test page
1619542267 [ch1898] Add file URLs to manifest for offline web pages
1619542267 [ch1898] Add UI tests for ATE style expansion
1619542267 [ch1898] Add JSDOM dependency
1619538400 [ch2511] Pass \`KeyboardEventInit\` as separate type
1619538400 [ch2511] Drop misnomer \`isContentEditable\`
1619538400 [ch2511] Assume Selection.anchorNode is an HTMLElement for contenteditables
1619538400 [ch2511] Add types to replaceTriggerText
1619538400 [ch2511] Add return type and empty check for isReactEditor
1619537354 [ch2511] Use typescript with selection helpers
1619537354 [ch2511] Convert getTriggerInfo and Add interface for return
1619537354 [ch2511] Check for missing anchor nodes in pasteHTML
1619537354 [ch2511] Assume we will always have the ownerDocument.defaultView
1619537354 [ch2511] Add JSON-RPC autofill server
1619477535 [ch2511] Add argument types to straightforward functions
1619475920 [ch2511] Fix moment-js import
1619475920 [ch2511] Change fill-utils extension to use .ts
1619471291 [ch2537] fix adding variables into snippets
1619469113 [ch2751] Updgrade moment-js library which include typescript defs
1619458028 [ch2536] Add paused hostname information to the local storage and the global store
1619451216 [ch2536] Update notifyAllTabs to loop through all tabs and send a  message to each one
1619451216 [ch2536] Deleted pausedAt from panel in TabState
1619318710 [ch2629] send users uninstall to server route
1619211512 [ch2560] test for sessions uninstall route
1619211512 [ch2560] store uninstalledAt field for sessions
1619211417 [ch2560] add user uninstall route for sendgrid handling
1619206484 [ch543] Updated the UI for the share view
1619206484 [ch543] Show computed total time saved in the checklist refer component
1619206484 [ch543] Added a footer on all of the panel views that shows the user how much time they've saved
1619192386 [ch543] Create a getTotalTimeSaved function that returns the amount of time saved respective to the desired unit as well as the timeSavedMessage
1619192386 [ch543] Added the totalTimeSaved into the global store and updated the information on any latestFill change
1619191863 [ch543] Added variablesFilled and snippetCharsSaved into the latestFill local storage object
1619120554 [ch2740] Update sendSnippetExpansionEventsIntervalMinutes to 60 mins
1619120454 [ch2740] Update sendSnippetExpansionEventsIntervalMinutes to 60 mins
1619113064 [ch2730] Add tracking for all host permission section interactions on actions page
1619109758 [ch2730] Add closable host permission top section to options page
1619107378 [ch2730] Add browser permission methods to BrowserApi
1619019853 [ch2412] remove deprecated panel intro views
1619019070 [ch2652] add users who switched to premium to sendgrid
1619016117 [ch2723] add param to onboarding urls for better tracking
1619015812 [ch2727] Workaround CWS not handling concatenation of a string reference and a literal in the name
1619015812 [ch2727] Fix ATE staging CD environment name
1618983678 [ch2643] close variable builder when navigating out through progress bar
1618979627 [ch2727] Setup ATE extension staging CD
1618976781 [ch2720] Block cross-site guest session creation for extensions < 3.1.0
1618976757 [ch2720] Enable extension CORS headers on all routes by default
1618976660 [ch2720] Set the header \`X-Content-Type-Options: nosniff\` to CORB
1618973009 [ch2726] Update amplitude event 'ate_snippetUsed' destSelector related attributes to plural when storing arrays
1618962167 [ch2724] Remove check for '<all_urls>' when checking for 'clipboardRead' permission
1618957536 [ch2702] add destSelector and destSelectorType to expansion event tracking
1618956718 [ch2712] Only trim end if trigger has trailing space
1618956718 [ch2712] Hide dropdown if mention text starts with whitespace
1618954082 [ch2711] Move the options page promo frame URL to appConfig
1618953293 [ch2714] make dropdown null state ate friendy
1618951836 [ch2721] Don't re-open Tribute after a user-close unless the mentionText is ""
1618947943 [ch2719] Add optionsPromoFrameUrl to app-config
1618947386 [ch2703] Replace non-breaking spaces with spaces in trailing plainTextBody whitespace
1618946213 [ch2700] Update side panel links on options page
1618946213 [ch2700] Update Magical logo on options page
1618938095 [ch2548] Add an X-Extension-Version header to all API requests
1618898759 [ch2688] Use \`fetchJSONWithCredentials\` inside \`startNewGuestSession\` to receive cookies
1618894564 [ch2688] Change refresh-fetch library to not send Content-Type headers when there is no body
1618854683 [ch2678] Return the user after updating the type
1618854683 [ch2678] Move user update logic to a handler
1618854683 [ch2678] Merge user onboarding payload with update request
1618854683 [ch2678] Add explicit lodash dependency
1618846897 [ch2686] fix expansion syntax error
1618636827 [ch2685] Log request method, path (and sometimes headers) for on protectedRoute 401s
1618623388 [ch2685] Include \`CSRF_TRUSTED_EXTENSION_ORIGINS\` in \`ensureTrustedOrigin\`
1618612760 [ch2682] Consolidate cors configurations
1618612760 [ch2682] Allow extension CORS requests for IPs ending in .1 through .12 (~5%)
1618592669 [ch2547] only check clipboard data if shortcut contains %clip%
1618592448 [ch2644] check off autofill checklist item in messaging destinations
1618591346 [ch2656] don't attach to iframes for expander as we already work via allframes in manifest
1618588117 [ch2671] Warn when draft items on options page
1618588115 [ch2671] Add tracking to recovery flow
1618588095 [ch2671] Show number of current and recovered shortcuts in modals
1618588094 [ch2671] Set recovery modal and button state based on interaction with recovery modal
1618588077 [ch2671] Determine initial state of recovery button and modal
1618588076 [ch2671] Add "choose which to import" recovery logic
1618587646 [ch2671] Use params for \`addRow\`
1618587646 [ch2671] Allow import from sync storage recovery
1618587646 [ch2671] Add shared \`shortcutsFromSyncStorage\` for ATE migrations
1618587646 [ch2671] Add recovery modals for options page
1618546273 [ch2574] Use the same MutationObserver for both template-source subscribers
1618546273 [ch2574] Use a single mutation observer in template-source only when there are SrcSelectors for the URL
1618546273 [ch2574] Test that a mutation observer is only used when necessary for variables
1618546273 [ch2574] Split init of template-source into separate builder and variable use portions
1618546273 [ch2574] Move suggestion/source test constructors to their own files to be shared
1618546273 [ch2574] Have vscode-jest only auto-run unit tests
1618546273 [ch2574] Have TS generate ES modules
1618546273 [ch2574] Automatically clear and reset mock calls and instances before every test.
1618546273 [ch2574] Add manual mocks for fab.ts and json-rpc.ts
1618546273 [ch2574] Add a run command for an individual test. Add watching and timeout.
1618519371 [ch2673] Add a warning message for questionable desiredUserId use
1618518265 [ch2673] Disable the intialApp='ATE' check for creating sessions with a specific user ID.
1618512312 [ch2583] Only auto-migrate shortcuts for users pre v3
1618512312 [ch2583] Move ATE shortcut storage prefix to shared
1618512312 [ch2583] Filter local storage changes to "local" storage area
1618512312 [ch2583] Check against existing shortcuts when migrating from ATE
1618503069 [ch2508] replace snippets with shortcuts in ui
1618467042 [ch2660] Log the desiredUserId and initialApp when denied to create a guest user with a given ID
1618456389 [ch2649] Add an ['id', 'user_id'] DB index on the \`sessions\` table.
1618446151 [ch2634] update snippet index migration to use raw query for DROP INDEX IF EXISTS
1618439776 [ch2577] Test that a new guest user is created if the ateUserId user is deleted.
1618439776 [ch2577] Add configurations for vscode-jest and testing one file
1618439776 [ch2577] A new guest user is created if the ateUserId user is deleted
1618439537 [ch2634] add creator_user_id index to snippets table - remove temp index that was added in prod but may not exist in other environments
1618439223 [ch2655] Revert "[ch2646] Don't return sources for GET /snippets"
1618439207 [ch2646] Don't return sources for GET /snippets
1618438944 [ch2541] Delete the copy.open-fab event
1618431602 [ch2595] Add snippetId and isNew attributes to ate_saveSnippets amplitude event
1618431602 [ch2595] Add error tracking for ATE import and saving shortcuts
1618355367 [ch2635] options page: On dialog close, reset return value
1618349261 [ch2637] Swap the Sendgrid API key on the server
1618326540 [ch2571] Return snippet bodies containing trailing spaces converted to trailing non-breaking spaces
1618326540 [ch2571] Add test for utils function trailingSpacesToAlternatingNbsp()
1618282088 [ch2587] fix onboarding snippet handler to always return snippets
1618281316 [ch1825] Added an event listener to set user properties on Amplitude
1618270798 [ch2585] add tracking for ATE signin/signup details button clicks
1618265390 ch2522] Organize ATE onboarding routing
1618177722 [ch2524] Don't allow empty posts and deletes to snippets
1618155902 [ch2576] Add names to functions recently logging errors in prod.
1618154899 [ch2576] Allow callbacks with function names (to improve logs)
1618154712 [ch2576] Don't log an error in /sessions/onboard when a user or email are missing
1618027215 [ch2557] Revert "[ch2533] allow cors access for user/info"
1618002465 [ch2553] remove zendesk as react editor - revert zendesk functionality to previous behaviour for zendesk new ticket editor
1617997716 [ch2551] Add debug info to log request origin on sessions/guest route
1617984531 [ch2411] fix progress bar styling
1617983395 [ch2461] refactor template builder to abstract variable list
1617980413 [ch2533] allow cors access for user/info
1617980250 [ch2534] Increase the JSON request body limit to 1MB
1617944351 [ch2528] Drop the plaintext snippet.body column
1617937198 [ch2509] convert pass src pages for open tabs to global state
1617897248 [ch2521] Rebrand ATE assets to Magical
1617845006 [ch2517] Deprecate leadingSpace from getTriggerInfo() which causes race conditions
1617838615 [ch2516] Add event to track snippet insertion having date and/or clip variables
1617838559 [ch2516] Add event to track when expansion contains date and clip variables
1617835668 [ch2515] Add new plain text domains
1617835606 [ch2514] Add new plain text domains
1617830679 [ch2501] Match special expansion variables using case insensitive check
1617830679 [ch2501] Handle incoming newlines and snippet body rendering on options page
1617830679 [ch2501] Ensure selectTemplate always returns the rich text value of the item that will be filled
1617830679 [ch2501] Don't add space to the end of expansions where trigger ends in space
1617830679 [ch2501] Deprecate the use of fomattedText when calling replaceTriggerText()
1617830679 [ch2501] Allow FillUtils to compute the formatted text when given rich and plain text values
1617824674 [ch2507] Changed 1 days to 1 day
1617820241 [ch2503] Decode HTML entities in snippet bodies of the options page
1617819782 [ch2025] Added a window event listener to open the Magical panel to a specific view
1617813705 [ch2502] Added savedTimeMessages array to the app-config
1617749231 [ch2336] Output local/dev ATE builds to a separate directory from Magical builds
1617748626 [ch2336] Never delete the build/ directory via rollup
1617739143 [ch2498] change ATE desktop notification wording for update
1617738909 [ch2497] Only show the ATE update notifications on the first update from version 1.x
1617738500 [ch2495] Add TOS and Privacy policy options page footer links
1617737260 [ch2492] add login indication for ate users
1617736895 [ch2477] Focus trigger when adding new shortcut
1617736895 [ch2477] Don't validate trigger against draft snippets
1617736602 [ch2475] Support trailing space in trigger for expansion
1617736064 [ch2488] add json validator and import/export tracking
1617735832 [ch2496] Convert newlines to \`<br/>\` when expanding into contenteditable fields
1617669324 [ch2474] Apply box-sizing:border-box to pseudo elements too
1617667390 [ch2473] Update CSS pertaining to snippet list on options page
1617665234 [ch2473] Remove stale convertRichTextToHTML function
1617664231 [ch2465] update icons to new ATE logo - update desktop notification to use old ATE logo that works for dark mode/regular mode
1617659759 [ch2350] Add options page toast/banner messages and component
1617659457 [ch2458] validate option page triggers on save/delete/cancel
1617658327 [ch2455] push snippet suggestion group prior to calculating footer text
1617655245 [ch2457] scroll format section into view when toggled on
1617651517 [ch2440] Update snippet last used for ATE shortcuts
1617651517 [ch2440] Sort ATE shortcuts by shortcut name on options page
1617651517 [ch2440] Add snippet sorting helper function
1617650156 [ch2451] use moment-with-locales to ensure proper locale formatting - generate new moment timestamp on each %d usage
1617648688 [ch2453] change placeholder text for shortcut text area
1617646954 [ch2444] Include the options page remove button in the tab order
1617646866 [ch2444] Make whole options page scrollable with a sticky sidebar
1617641392 [ch2446] Delete \`checkShortcutVersion\` and unused variables
1617641378 [ch2446] Make the options page <h1> accessible again
1617639956 [ch2433] Support ATE expansion on Evernote
1617639956 [ch2433] Sign up with Google and Finish sign up copy changes on options
1617639956 [ch2433] Move demo/convert shortcuts to iframe
1617639956 [ch2433] Delete dialog styling changes on options
1617639956 [ch2433] Add ATE staging npm run script
1617639467 [ch2398] check off insertsnippet and createsnippet checklist for ate users
1617639467 [ch2398] add extension key for consistent ate dev id
1617639282 [ch2399] cross off snippet checklist for existing ate users
1617639282 [ch2399] add options page to trusted origins
1617401205 [ch2432] Send grouped snippet expansion events
1617394566 [ch2421] Show ATE logo in dropdown footer
1617394566 [ch2421] List snippets in dropdown by trigger if no name
1617394566 [ch2421] Allow snippets to be searched by name in dropdown
1617393218 [ch2425] Shortcut edit state styling on options page
1617393218 [ch2425] Increase options page width
1617393218 [ch2425] Dialog styling on options page
1617393218 [ch2425] Add Google SVG in sign in button on options page
1617392875 [ch2425] Allow iframe and format shortcut to close on options page
1617392737 [ch2425] Add logo SVG to options page
1617392104 [ch2424] Add Terms of Service notification on update
1617375210 [ch2409] Match app config to latest extension config
1617374073 [ch2056] Support date substitution in dropdown
1617374023 [ch2056] Support clipboard substitutions in dropdown
1617371473 [ch2406] Move React editor domains to config
1617367165 [ch2406] Treat react editors the same way when auto-filling content
1617366453 [ch2420] Hide login section from options when not needed
1617329539 [ch2414] expander: scroll to top of list when creating new shortcut
1617329539 [ch2290] Fix for ate_addSnippet bug
1617326652 [ch2093] show login notification reminder periodically - add UserManager isLoggedIn() - add new config value for login reminder frequency
1617324705 [ch2419] Add the logo to the ATE options page
1617324494 [ch2419] Basic options page field styling
1617324088 [ch2419] Options page card basic styles
1617322746 [ch2417] Options page button/sidebar styles
1617321927 [ch2415] selector: use lowercase when excluding class names
1617320439 [ch2405] Use design system button styling for the panel header and footer
1617320439 [ch2405] Use button size styles for confirmationComponent
1617320439 [ch2405] Set button sizes within all views
1617320439 [ch2405] Set button size classes in the options page
1617320439 [ch2405] Remove remaining ha-button-icon uses
1617320439 [ch2405] Reduce the max-height of the options page snippet body to 70vh
1617320439 [ch2405] Move buttons.css to shared-ui-components
1617320439 [ch2405] Implement the complete button design system
1617315838 [ch2290] Track ate_updated
1617315838 [ch2290] Track ate_uninstalled
1617315838 [ch2290] Track ate_saveSnippets
1617315838 [ch2290] Track ate_removeSnippet
1617315838 [ch2290] Track ate_install
1617315838 [ch2290] Track ate_importOverwrite
1617315838 [ch2290] Track ate_importExport
1617315838 [ch2290] Track ate_addSnippet
1617315838 [ch2290] Add ate tracking events to model
1617314567 [ch2322] Don't allow expansion when Magical dropdown is open
1617308306 [ch2407] add new config for login reminder frequency
1617305429 [ch2184] Track SnippetUsedEvents on browser startup to amplitude
1617305429 [ch2184] Track SnippetUsedEvents on alarm interval to amplitude
1617305429 [ch2184] Store snippetUsedEvent on expansion
1617305429 [ch2184] Allow trackBackground to set a customTimeStamp when event logging
1617305429 [ch2184] Add ability to track grouped batches of SnippetUsedEvent to amplitude
1617305429 [ch2184] Add SnippetUsedEvent model to local storage
1617305074 [ch2400] expander: remove dead code and comments
1617305074 [ch2400] expander: do not manually attatch to all iframes
1617305074 [ch2400] expander: add back event listener logic
1617303516 [ch2394] Added cors into the /users/info route so requests from our onboarding sites won't get blocked
1617303254 [ch1772] Set colorizePrettyLogs to false when creating a new logger
1617300850 [ch2091] export an openTab helper function to open/focus tab for a url - update options background to use the new openTab
1617300850 [ch2091] add notification on ATE app update - open url on click
1617224627 [ch2259] Add options page redirect event for ATE
1617224627 [ch2259] Add ability to sign up on ATE options page
1617224627 [ch2259] Add ATE marketing URL const
1617222351 [ch2259] Scope \`initialApp\` type to just \`ATE\`
1617222316 [ch2259] Add error logs for GET /sessions/onboard
1617222316 [ch2259] Add a Google OAuth success redirect for ATE
1617221757 [ch2386] distinguish new from existing ate users in onboarding blob
1617221109 [ch2389] checklist progress bar disappears after 7 days
1617210021 [ch2264] Perform basic sanitize before building plainText from snippet body
1617206575 [ch2283] Add a promo iframe to the ATE options page
1617204274 [ch2358] Show an empty draft snippet if there are no saved ones
1617203696 [ch2358] Separate combined import dialogs into two
1617203696 [ch2358] Don't allow shortcuts to be a prefix of another
1617203696 [ch2358] Add shortcut length and space constraints
1617203610 [ch2358] Rename background-options to background-options-page to make it more clear
1617203610 [ch2358] Prevent saving a snippet with a duplicate trigger
1617203610 [ch2358] Move options page functions to a singleton object
1617202888 [ch2359] Update default snippet trigger for email in  appConfig
1617202774 [ch2359] Move default snippets to config
1617194653 [ch2359] Move default snippets to appConfig
1617164503 [ch2252] Remove snippet from  defaultSnippet storage on update
1617164503 [ch2252] Remove duplicate default snippets (keyed by trigger) on getting saved snippets from server
1617164503 [ch2252] Get snippets from default snippets and snippets local storage
1617164503 [ch2252] Delete default snippet should only delete from local storage
1617160635 [ch2252] Store default snippets to local storage on install
1617160635 [ch2252] Add getSnippets() to SnippetsApi
1617158916 [ch2252] Ensure user data populates synchronously
1617158916 [ch2252] Add default snippets to storage
1617158340 [ch2324] Basic options page save and delete functionality
1617158340 [ch2324] Auto-grow the snippet height up to 80vh
1617146960 [ch2324] Change snippet delete methods to take snippet IDs instead of snippets
1617136227 [ch2354] Move storage.ts to shared/ since content scripts and options also have access
1617136227 [ch2354] Add a blankSnippet helper to reduce duplication
1617135673 [ch2089] add import/export dialog and sidebar link - show current snippets in the text area for export - handle basic JSON validation - open/close button events - second confirmation dialog
1617135673 [ch2089] add error message to dialog for invalid JSON
1617124885 [ch1963] add new ate and magical users to sendgrid
1617121465 [ch2026] progress bar for checklist
1617121454 [ch2026] autofill variable checklist component
1617121408 [ch2026] autofill variable checklist component
1617121373 [ch2026] add variable checklist component
1617121329 [ch2026] insert snippet checklist component
1617121268 [ch2026] create snippet checklist component
1617121223 [ch2026] create account checklist component
1617120916 [ch2026] create user server to add onboarding checklist
1617120602 [ch2026] checklist view
1617059970 [ch2323] Prevent source-related API calls for ATE
1617059970 [ch2323] Delete unused source functions
1617058714 [ch2269] Expand using the snippet trigger without @ prefix
1617058714 [ch2269] Default shortcut timeout to 5s
1617057888 [ch2338] Make config route case-insensitive
1617055021 [ch2338] Lowercase config url to avoid GET error
1617049678 [ch2263] Change snippet encrypted body to text and remove alter migration
1617048364 [ch1918] update ate uninstall link
1617042141 [ch2279] Add an options page textbox to convert rich text into HTML.
1617041466 [ch2182] Allow creating a guest session with an \`ateUserId\` that already exists
1617036749 [ch2263] Allow saving array of snippets via POST
1617036749 [ch2263] Add test coverage for snippets POST
1617036749 [ch2263] Add test coverage for snippets DELETE
1617036749 [ch2263] Add bulk delete to DELETE route
1617032491 [ch2127] tribute: remove "item" argument from replace method
1617032491 [ch2127] tribute: pass window selection to trigger info
1617032491 [ch2127] tribute: pass the focused element into \`replaceTriggerText\`
1617032491 [ch2127] tribute: pass element to trigger info
1617032491 [ch2127] tribute: pass element arg to preceding text method
1617032491 [ch2127] tribute: pass document + windowselection to replace method
1617032491 [ch2127] tribute: pass configs to trigger info
1617032491 [ch2127] tribute: move getTriggerInfo call out of replaceText method
1617032491 [ch2127] tribute: don't reference suggestion in replace method
1617032491 [ch2127] tribute: add replaceTextSuffix argument to replace method
1617032491 [ch2127] tribute: add autocomplete parameter to replace method
1617032491 [ch2127] tribute: Move hasTrailingSpace out of trigger info call
1617032491 [ch2127] fill-utils: Use params object to self document arguments
1617032491 [ch2127] expander: use same filling logic as magical
1617032491 [ch2127] Move tribute/utils.js to src/fill-utils.js
1617032491 [ch2127] Move filling logic to fill-utils.js
1617032491 [ch2127] Fix lint errors for fill-utils.js
1617032262 [ch2263] Alter snippet encrypted body to text column
1617032262 [ch2263] Add ATE config
1616980622 [ch1918] Set uninstall URL for ATE
1616961712 [ch2060] add ATE snippet migration on extension update - Store the shortcuts that have been backed up into storage sync to avoid backing up multiple times after app updates. Also to handle backing up any newly added shortcuts on another user device
1616958983 [ch2060] make snippet sanitize optional for getSnippetBody - no longer sanitizing snippet body on save to/get from server
1616958983 [ch2060] change server-snippet save to use an array of snippets - update snippet manager saveSnippet to handle the array change for server save
1616958983 [ch2060] add getAll and set functions for sync storage
1616795113 [ch2268] Create new snippet from dropdown should open options page for ATE
1616795110 [ch2268] Install should open options page for ATE
1616795092 [ch2268] Browser Action click should open options page for ATE
1616795062 [ch2268] Add BrowserApi support to open options page
1616794075 [ch2268] Add a skeleton options page
1616790604 [ch2096] update snippet tests to ensure snippets save to DB
1616790604 [ch2096] Add encryption/decryption to snippet body
1616789437 [ch2096] Factor out encryption/decryption to utils
1616789437 [ch2096] Add batchUpdate util function
1616789193 [ch2126] update down migration for alter of snippet name and trigger
1616783072 [ch2226] Move snippet utils needed outside right-rail from the right-rail folder
1616781909 [ch2154] Edited the messaging site and denied site lists to include and disclude Google Docs
1616772421 [ch2250] Enforce usage of single quotes in JS/TS files
1616770704 [ch2250] Enable @typescript-eslint/member-delimiter-style and autofix errors
1616770663 [ch2250] Enable linting of .cjs  and .tsx files
1616770663 [ch2250] Enable @typescript-eslint/semi rule and autofix errors
1616766877 [ch2249] Make SrcMatch.missing required and set it to false for type=url matches
1616731387 [ch2065] Hide panel for ATE build
1616731387 [ch2065] Disable browser action icon changes for ATE build
1616725823 [ch2065] Dropdown should not have variables for ATE build
1616694963 [ch2228] Edited the messaging site and denied site lists to include and disclude Google Docs
1616689186 [ch2075] Send \`initialApp: 'ATE'\` for new ATE installs without an ateUserId
1616689186 [ch2075] Add a GitLab ATE production deploy job
1616687972 [ch2075] Vary the appConfig URL for ATE builds
1616687972 [ch2075] Unify two ways of zipping builds
1616687901 [ch2075] Add support for submitting the latest dist/ build
1616622453 [ch1854] added cors to snippet post request
1616620712 [ch2075] Use ATE Amplitude API keys
1616620712 [ch2075] Add ATE build scripts and assets
1616615179 [ch2075] Use extendManifest() to override manifest for staging/prod
1616615058 [ch2075] Upgrade rollup-plugin-chrome-extension to version 3.5.4 plus a sourcemap fix
1616612177 [ch2166] Add Facebook sites to plainTextDomains config list
1616612050 [ch2166] Support Facebook sites the same way as draftJS
1616612050 [ch2166] Add Facebook sites to plainTextDomains config list
1616519181 [ch2064] Create a new guest user account and session using the  \`ateUserId\` if it exists and include ATE as the initialApp
1616510443 [ch2101] Remove usage of chrome identity permission
1616510443 [ch2101] Deprecate oauth2 usage in manifest
1616453197 [ch2058] convert manifest matches string to regex friendly
1616442465 [ch1792] optimal-select: use exclude.className instead of ignore.class
1616442465 [ch1792] Update optimal select to algotech/optimal-select
1616442465 [ch1792] Separate selector config for sources and inputs
1616442465 [ch1792] Remove tag from priority list
1616442465 [ch1792] Exclude common CSS names from optimal-select config
1616442465 [ch1792] Add an allow list of attributes for optimal-select
1616440106 [ch2058] perform runtime check for clipboardRead permission before using
1616440106 [ch2058] only look for clipboard data when expansion contains %clip%
1616440106 [ch2058] add <all_urls> permission
1616429326 [ch1979] Show the snippet list on the default view when appropriate
1616429326 [ch1979] Rename panelView to shouldOpenPanelForUrl and call from updateTabStateAsyncProperties
1616429326 [ch1979] Reduce chance of race conditions with seenPanelViews storage read then write in shouldSnippetViewOpenForTabUrl
1616429326 [ch1979] Pass mappings to \`shouldOpenPanelForUrl\`
1616429326 [ch1979] Only warn about commit messages over 80 characters to match GitLab
1616429326 [ch1979] Fold introAutofill into the default panel view
1616364466 [ch2126] snippet name and trigger to nullable
1616251864 [ch1629] add ATE expander into Magical - added background call to get clipboard data through JSON-RPC Server/client - add expander into all frames to better handle frames
1616173565 [ch2018] Wait for the panel iframe to load before opening the panel
1616173565 [ch2018] Don't subscribe to store changes in right-rail.tsx when there is no 'app' present
1616173565 [ch2018] Delete unused propsForView function
1616097687 [ch2122] Only shows sheets in queue list that include variables for the page
1616097176 [ch2122] Don't include missing sources in default view decisions
1616096653 [ch2122] Exclude mappings in queue list to sheets that don't exist
1616045661 [ch2119] Record the \`snippet.list\` event upon mounting the view rather than tab state changes when it may be hidden
1616024985 [ch2113] Reset the activeView to default in panelView to handle fake navigations for now
1616014865 [ch2004] Make appConfig uses versioned .json routes
1616011778 [ch2108] Include original error message in snippet model exceptions
1616010654 [ch2049] Support guest user creation with uuid and information on previous app (eg. ATE)
1616006008 [ch2106] Version the route for fetching appConfig and include a .json suffix
1615995040 [ch2050] Delete notify.ts accidentally brought back by ch1972
1615994839 [ch2050] initializeTabStates must be called on every extension startup, not just install/update, and shouldn't depend on API requests succeeding
1615994839 [ch2050] Return a default user info object instead of \`{} as User\` in getUser()
1615994839 [ch2050] Rename \`updateUserData\` to \`updateAllDataFromAPIForUser\` and move to background.ts
1615994839 [ch2050] Remove duplicate /users/info request from install code path
1615994839 [ch2050] Prevent failed appConfig requests from breaking other install/update code
1615994839 [ch2050] Handle RefreshFetch lacking a response for NetworkError
1615994839 [ch2050] Add missing 'i' in intializeTabStates function name
1615951584 [ch1499] Moved the 1 click autofill view to act as the default view when sources and mappings exist and deprecated the old autofill (queues) view
1615921652 [ch2031] Used the connect and activeViewWrapper for snippetView view
1615862875 [ch2030] Used the connect and activeViewWrapper for snippetEdit view
1615836133 [ch1914] Updated SnippetList store and props to use connect and activeViewWrapper
1615834525 [ch1929] Follow-up: Re-delete QueueRightRailProps from panel.ts
1615830065 [ch1929] Changed all intro views to use AllViewProps and deprecated the empty introProps
1615827890 [ch2013] On store subscriptions, run callback immediately
1615824416 [ch2006] Update TabState mappings on URL changes
1615822893 [ch1972] adding snippet server start to background
1615649864 [ch2009] Remove redundant \`srcHostname\` event properties from queue events
1615600329 [ch1972] rename tabState files to store
1615600329 [ch1972] deprecate duplicate updateTabState function in AutofillTabApi
1615598980 [ch1972] new SnippetsApi + move irrelevant SourceApi functions to SnippetsApi
1615597253 [ch1972] new BrowserApi + move irrelevant SourceApi functions to BrowserApi
1615597225 [ch1972] new TabStateApi + move irrelevant SourceApi functions to TabStateApi
1615591963 [ch1972] remove unused function in SourceApi
1615586869 [ch1985] Only fetch Google Sheet titles from the queue page when mappings have changed
1615585369 [ch1985] Move notifyTab/notifyAllTabs to background-tab-states.ts
1615585367 [ch1985] Remove 'startQueue' and 'openQueue' messages
1615585329 [ch1985] Use useRequest to get Sheets titles async from within the queue view
1615585329 [ch1985] Inherit currentColor as fill color for .ha-button-icon svg images
1615585326 [ch1985] Use tertiary styles for the sign in button
1615585288 [ch1985] Use tertiary button styles for the back button
1615585288 [ch1985] Use array destructuring for \`mapped\` in QueueRail instead of hard-coded array offsets
1615585288 [ch1985] Use activeViewWrapper for the QueueRail component
1615585288 [ch1985] Move button styles to their own stylesheet
1615585288 [ch1985] Modularize tertiary button styles and support <button> for them
1615585288 [ch1985] Add Source Google Sheets Mappings to TabState
1615565594 [ch1693] remove feature flags from appConfig and into the User model - add UserManager to access/update User info
1615565516 [ch1693] Add background config to fetch and notify content on server config changes
1615565337 [ch1693] update content scripts to use appConfig from global store
1615565259 [ch1693] add appConfig to global state
1615564945 [ch1958] add server AppConfig and route - return static feature flags as part of user info route
1615562561 [ch679] Replace "elements" naming with "srcMatches"
1615562561 [ch679] Remove destSelector comparison in tracking calls
1615562561 [ch679] Move destSelector comparisons into content-scripts
1615562561 [ch679] Keep track of mappings in forms and sheets
1615562561 [ch679] Add destination mappings to TabState
1615507946 [ch1889] Stored Google spread sheets information in the local storage and use this information to populate the Autofill list view
1615497427 [ch1926] Moved TemplateBuilderProps into templates.tsx
1615418549 [ch1938] update user data on Magical URLs by adding an event listener
1615415625 [ch1969] snippets in delete confirmation state should not open edit view
1615410530 [ch1689] add onboarding field into user db
1615409210 [ch1875] Use \`onTabConnect\` instead of \`onTabConnectWithUrl\`
1615409210 [ch1875] Revert "fix for json-rpc to use top window url for frames"
1615409210 [ch1875] Remove \`onTabConnectWithUrl\` from JSON-RPC
1615409210 [ch1875] Move tab state logic to bg-tab-states
1615409210 [ch1875] Decouple tab state creation from bg-sources
1615408833 [ch1875] Only send mappings to tabs we're tracking
1615406114 [ch1962] add onboarding onto the fab denied list
1615404602 [ch1949] Adjust default panel height and position with viewport changes
1615401825 [ch1939] deprecate onboarding chrome extension dependencies
1615331684 [ch1908] Render FAB using the Store/tabState
1615331684 [ch1908] Remove unused PauseFabNotification
1615331684 [ch1908] Remove fab getUrlState method
1615331684 [ch1908] Move \`connect\` to a new store-utils.tsx file
1615331684 [ch1908] Move FAB paused/open/closed state to TabState
1615304111 [ch1852] aligned the tertiary button icons to the text
1615304111 [ch1852] Decreased the height of the dynamic snippet pill object
1615301761 [ch1852] Increased the width of a single tertiary button
1615240290 [ch1888] Move view tracking calls to background
1615238944 [ch1888] Move recurisve partial and store models to models/tabstate.ts
1615238139 [ch1888] fix for json-rpc to use top window url for frames
1615238138 [ch1888] Add redux-like subscriptions to store
1615238093 [ch1888] Use \`getStore()\` in connect helpers
1615238093 [ch1888] Update \`goBack()\` to use store.ts
1615238091 [ch1888] Move right-rail store data to store.ts
1615232211 [ch1888] Move state change notifications to store.ts
1615229028 [ch1868] Set the max-width to none to make sure that the Favicons appear as intended
1615221182 [ch1800] Use connect and activeViewWrapper for the template builder
1615221179 [ch1800] Use connect and activeViewWrapper for the Share view
1615221159 [ch1800] Add \`connect\` and \`activeViewWrapper\` for components to access the Store
1614990373 [ch1800] Remove unused onClickHelper function
1614990373 [ch1800] Remove leftover global prop in propsForView
1614989988 [ch1805] Added TextArea as an element type alongside Input to turn off Chrome AutoComplete when necessary
1614981060 [ch1880] Exclude the snippet being edited for duplicate name checks
1614980675 [ch1880] Don't pass global state as props to all panel views
1614980148 [ch1880] Fix the return value of the getInitialPanelStore server method
1614980146 [ch1880] Unmount inactive panel views
1614980107 [ch1880] Add view name classes automatically
1614980104 [ch1880] Move panel-view class into RightRailView
1614980052 [ch1880] Use destructured \`activeView\` inside render() of right-rail
1614979984 [ch1880] Rename .ha-visible-right-rail to .panel-view
1614979981 [ch1880] Rename rightRailView to TitleCase to follow conventions
1614979627 [ch1504] Created a new ui component for list items that need a confirmation message before an action (eg. deletion)
1614979440 [ch1796] Excluded template-source JS and CSS files when on Google Spreadsheets
1614961778 [ch1886] Remove otherSnippetNames from SnippetEditProps
1614961778 [ch1886] Create new snippet from dropdown should pass empty snippet to snippetEdit
1614961703 [ch1881] refer to global snippets to detect duplicate snippet trigger
1614898246 [ch1850] open onboarding tabs from webflow if not already open
1614897656 [ch1859] Remove "create new snippet" suggestion when editing a snippet
1614809928 [ch1846] UI naming -changed template to variables
1614808911 [ch1522] Adjusted the getAllSnippetSuggestion so that variableSnippets are returned without an open source page
1614807905 [ch1529] order snippets by last used
1614733203 [ch1536] Added an Event Listener on Magical sites to listen to Analytics Tracking Events
1614727176 [ch1722] tests for onboarding canned snippets creation
1614718223 [ch1722] post request to initialize canned snippets in onboarding
1614716840 [ch1722] add typescript to server snippets
1614708017 [ch1755] support multiple jest configs and rename unit tests to new naming format
1614708017 [ch1755] add selenium and jest config for automated UI testing
1614708017 [ch1755] add UI test to gitlab CI
1614708017 [ch1755] add UI test for magical dropdown in forms
1614704917 background-fab: use await notify calls in try-catch
1614703621 [ch1684] Use updateTabState in onTabConnectWithUrl
1614703621 [ch1684] Rename snippets-edit* to snippet-edit to match view name
1614703621 [ch1684] Move on* methods off of ClickAction since they won't roundtrip through the background
1614703621 [ch1684] Make all store updates go through the background tabState and sync the whole state
1614703621 [ch1684] Don't mutate tabState directly in openSourcesBuilder
1614703621 [ch1684] Cleanup snippet-edit back/close/body handling
1614703621 [ch1684] Call onClickSendToSink directly from queue-rail rather than from a prop
1614627424 [ch1326] Added the gray piece of text whenever a user is on the 2nd step of the snippet dropdown by checking for the groupType value
1614627422 [ch1326] Added a "Create New" button for users to immediately navigate to the snippet edit view in the panel
1614626753 [ch1326] Clicking outside of the dropdown when in the second stage of snippet will close the dropdown
1614626753 [ch1326] Added dynamic and canned icons to snippets
1614618881 [ch1767] Move TabState back to tabstate.ts
1614618692 [ch1767] Fold activePanelStore into TabState
1614614407 [ch1735] Separate global state from tab state in right-rail.tsx's Store
1614368912 [ch1613] Show View Template footer icon hover color
1614359663 [ch1728] Set the default font for the whole iframe
1614295087 [ch1731] Only pin the \`node\` version in package.json for development
1614293939 [ch1729] Isolate template builder styles to its own view
1614291222 [ch1723] Normalize to a Sink URI before calling getMappingsForSinkUrl in panelView
1614290120 [ch1727] Removed .ha-right-rail-container prefix
1614285633 [ch1705] Set previousViews and fix the if statement check to make sure to only append a new view if it's not the same as a previous one
1614278533 [ch1721] remove chrome store publish action from staging deploy to store step
1614273651 [ch1717] revert rollup version change and tie it to ~2.20.0 - minification breaks with newer rollup versions
1614201391 [ch1523] Appended snippets onto the suggestion group so snippets show in case 2 and 3 of background-autofill
1614201026 [ch1596] rename functions to speficify mappings are google sheet mappings
1614200330 [ch1596] ensure fab and panel states are correct when domMutations occur
1614200329 [ch1596] update default panel view logic
1614200329 [ch1596] expand panel once for each messaging site visited
1614197156 [ch1596] merge intro-snippets into snippet-list panel content
1614197070 [ch1596] set panel for onboarding
1614197070 [ch1596] move fab deny url list to haConfig
1614197070 [ch1596] add helper to determine if URL is google sheets
1614193944 [ch1174] Implemented a new back button that works similarly to a stack and deprecated the isDefaultView prop and the exclude_back_button_views
1614180669 [ch1690] getBestSourcesForUrl: ignore longer matching paths with no active selectors
1614153427 [ch1506] Add a VS Code test configuration to aid debugging
1614153392 [ch1506] Add a basic 'getBestSourcesForUrl' test that wouldn't have worked before
1614153346 [ch1506] Make jest tests work with ESM and browser.* polyfill
1614127723 [ch1679] move builderActionStream out of tabState
1614122713 [ch1688] Pin rollup-plugin-chrome-extension to 3.4
1614119290 [ch1687] Tell vscode to use non-relative module import paths
1614119238 [ch1687] Remove leftover calls to removeRightRail() from templates.tsx
1614112897 [ch1160] Created a popup that will be displayed to users if they are editing a dynamic snippet without an open source page. Popup will only appear if the element is pressed or the caret is moved to the element.
1614108945 [ch1660] remove open panel notification from copy trigger
1614107052 [ch1314] consolidated css files for primary ctas
1614094550 [ch1314] hyperlink hover state design changes
1614094481 [ch1314] panel design fixes
1614094444 [ch1314] cta button design changes
1614094098 [ch1314] button design changes
1614093742 [ch1314] snippet icon added to dropdown
1614055041 [ch1662] Disable jest/no-commented-out-tests for utils.test.ts
1614055037 [ch1662] Disable react-hooks/exhaustive-deps inside useRequest
1614055033 [ch1662] Mark react/no-danger errors as okay since we are sanitizing
1614055029 [ch1662] Mark fab-components' setState inside componentDidUpdate as okay
1614055026 [ch1662] Move '//' in tsx into strings so eslint doesn't think they are comments
1614055021 [ch1662] Remove unneeded eslint-disable-next-line @typescript-eslint/no-unused-vars for h
1614055018 [ch1662] Disable non-TS no-undef inherited from eslint-config-preact
1614055013 [ch1662] Add rel="noreferrer" to target=_blank links.
1614055006 [ch1662] Enable eslint-config-preact and auto-fix issues
1614053058 [ch1539] Tell vscode to use relative paths for imports and add common dev scripts as tasks
1614053058 [ch1539] Pin local node version to the production version
1614053058 [ch1539] Add tslog library and automatically log request and user IDs
1614053058 [ch1539] Add logging for routes
1614032550 [ch1658] Make the panel container 100vh instead of the area below the header.
1614032460 [ch1658] Remove hardcoded stale width for the panel
1614028335 [ch1320] render single tribute menu in top window outside iframes
1614028335 [ch1320] adjust tribute menu position for iframes
1614028249 [ch1320] move tribute menu footer click event to TributeMenuEvents - Each frame has an instance of tribute so should also have its own footer click event handler. We return early if element is undefined for frames that did not initiate the tribute menu to be shown
1614026497 [ch1623] deprecate userInfoChanged notification in favour of tabStateChanged
1614026497 [ch1623] deprecate snippetsChanged notification in favour of tabStateChanged
1614026497 [ch1623] deprecate sharePanelTriggerChanged notification in favour of tabStateChanged
1614026497 [ch1623] deprecate mappingsChanged notification in favour of tabStateChanged
1614024280 [ch1623] deprecate srcPageChanged notification in favour of tabStateChanged
1614024213 [ch1623] Add function to update tabStates for all tabs and notify all tabs
1614016611 [ch1632] downgrade rollup-plugin-chrome-extension
1613951996 [ch1247] snippet edit css changes
1613761501 [ch1604] leave fab paused on domMutations
1613761496 [ch1604] set fabPausedAt in tabState
1613761449 [ch1604] add fabPausedAt to tabState
1613758338 [ch1615] updateTabStates no longer creates a tabState
1613591242 [ch1547] optionally insert trigger text in showMenuForCollection()
1613591242 [ch1547] optionally clear trigger within replaceTriggerText()
1613591242 [ch1547] only clear mention text for 2-step snippet
1613541185 [ch1598] Update \`ini\` package to address security issues.
1613540954 [ch1589] Update rollup-plugin-terser and rollup-plugin-chrome-extension packages
1613537262 [ch1176] Move typescript package to dependencies so the build can happen on AWS.
1613533566 [ch1176] Enable verbose tsc build output
1613531611 [ch1176] Rename npm-logs.conf to npm-logs.config
1613529394 [ch1176] Tail npm logs in elastic beanstalk
1613521660 [ch1507] Created an Intro-Autofill view for sites with a fillable element
1613521620 [ch1507] Included a new variable in tab states for when a page has an editable element
1613505073 [ch1176] Use tsc via npx rather than assuming it's installed globally
1613504138 [ch1176] user route testing with supertest types
1613503771 [ch1453] Added an Intro Template view
1613503491 [ch1537] Replaced relative URLs with absolute URLs for richTextValue
1613494978 [ch1176] Automatically lint MRs
1613494978 [ch1176] Add some more type annotations
1613494978 [ch1176] Add .vscode/launch.json to make it easier to debug the server and tests
1613493058 [ch1176] Use knex TS support for table schemas
1613493058 [ch1176] Minimal conversion to TS to make tsc, eslint, and jest happy
1613173185 [ch1566] Drop unused panelIsInitialized variable
1613173185 [ch1566] Drop unused 'nextOnboarding' snippet argument
1613167678 [ch1585] clear dropdown search text in 2nd snippet step in draftJS
1613153344 [ch1521] Added support for additional tags when a user pastes into the snippet builder
1613147774 [ch1563] disable sig snippet edit name in onboarding
1613089754 [ch1562] Adding introSnippets into the views that excludes the back button
1613088701 [ch1558] show snippets CTA only once
1613086918 [ch1551] Only remove FAB on DOM mutations when URL changes
1613086200 [ch1560] don't save empty urls to tabState
1613070398 [ch1556] determine when to show fab when DOM mutates
1613070033 [ch1552] remove es2020 JS code from TributeRange to resolve terser error
1613068591 [ch1549] change onboarding sig snippet name to signature
1613066959 [ch1555] check url with startsWith()
1613017016 [ch1550] Reduce the duplication of \`this.props.store.userInfo\` in the Login component
1613015898 [ch1545] fix el undefined on tribute attach
1613005309 [ch380] retrieved canPromote from userInfo
1613005309 [ch380] Add login component
1613004411 [ch380] Add user info to all views with ViewProps
1613001910 [ch380] added userInfo in local storage
1613000396 [ch1463] snippet-edit: await snippet variable removals
1613000396 [ch1463] differentiate a src from a srcPage when removing snippet vars
1613000396 [ch1463] bg-autofill: use \`srcPageToSuggestionGroup\` for case one
1613000396 [ch1463] Scope snippet editing state changes to tab id
1613000396 [ch1463] Rename SnippetState to SnippetEditingState
1613000396 [ch1463] Initialize snippet editing state for existing snippets
1613000396 [ch1463] Clear snippet state after save/cancel/back
1612992433 [ch1349] create intro mapping cta panel
1612976599 [ch1508] prevent new mappings for compose editors
1612973052 [ch1176] Remove old /templates route
1612927471 [ch1541] Require braces around 'case' statements
1612927012 [ch1541] Always require curly braces with newlines for JS (except switch/case)
1612896705 [ch1447] add tribute listener if contenteditable/input/textarea
1612896451 [ch1447] update ensureeditable to tribute code
1612836531 [ch1512] add back notify tab when src page changes
1612819515 [ch1493] Dont replace trigger text for 2 step snippets in draftJS editor
1612819515 [ch1493] Dispatch specific events instead of DOM manipulation when filling draftJS editor
1612559138 [ch1493] TributeRange - find caret position from range
1612549938 [ch1509] Dispatch a proper composed InputEvent after fills
1612473711 [ch1377] showing fab after listening to 2 copies in a url
1612473711 [ch1377] pruning records older than a week
1612473711 [ch1377] Added tracking
1612473711 [ch1377] Added last copied from a url to local storage
1612473319 [ch1158] snippet-edit: use instanceof instead of 'as'
1612473319 [ch1158] snippet-edit: simplify getAttribute calls
1612473319 [ch1158] snippet-edit: remove snippet sources on DOM mutations
1612473319 [ch1158] snippet-edit: prevent empty name and body
1612473319 [ch1158] snippet-edit: add removeSnippetVariable funtion
1612473090 [ch1486] Move autofill tracking to separate file to unblock testing
1612473090 [ch1486] Add tests for autofill groups to values
1612468567 [ch1348] Added a new Intro Snippet view to act as the default panel view when a user is on a messaging destination
1612468338 [ch1348] Used RecursivePartial for updateTabState
1612468338 [ch1348] Removing fabIntro
1612450121 [ch375] Indicate which Google account needs auth in GSheets
1612449957 [ch1252] consolidate panel list styling for snippets and queues
1612393902 [ch1495] Fix dropdown searching regression
1612308810 [ch1477] init onboarding after listener is attached
1612301480 [ch1471] Fall back to origin instead of hostname
1612224324 [ch1374] Add /sessions/google/jwtcallback to perform Google One Tap sign-ups
1612222170 [ch1217] attach key events to iframe on frame load
1612221725 [ch1451] using plaintext linkedin employer value when autofilling
1612220826 [ch1450] move footer line to footer css instead of ctabuttons
1612195169 [ch738] pick only sinkFullUrl and selector when checking if input destSelectorsEqual()
1611967496 [ch1389] Called getBestSourcesForUrl in order to check whether sources exist on the current url and depedning on the result, will display the fab
1611961801 [ch1351] Changed the width of the icon from a defined 16px to margin auto
1611961611 [ch1387] snippets to bottom of dropdown for snippet builder
1611945834 [ch1312] move snippets to top of dropdown if wysiwyg
1611941203 [ch1369] create shared panel model
1611941203 [ch1369] Refactor to TabState to hold activePanelStore
1611940563 [ch1218] show onboarding views at specified urls
1611940563 [ch1218] create onboarding snippet views
1611940374 [ch1341] Checked over web pages for any editable elements that are not "search" bars and based on the result, either showed or didn't show the fab
1611938011 [ch1215] remove browser autocomplete when we attach the magical dropdown
1611936691 [ch1170] Added delete button to remove template
1611884334 [ch1355] fix snippet icon colour - use snippet icon in Create Snippet button
1611869178 [ch1358] update snippet list styling - update snippet delete icon fill colour
1611860618 [ch860] Don't request sheets permission at sign up
1611857352 [ch1371] preserve full url of destSelector pre-normalization
1611854516 [ch1371] Fallback to original sink URL in case its already normalized
1611777878 [ch1194] Consolidate search text for snippets
1611777521 [ch1194] snippet: use trigger as label in dropdown
1611777521 [ch1194] Create unfilled snippets
1611777521 [ch1047] Add tracking for dynamic snippets
1611774074 [ch1194] introduce unfilled snippet suggestion
1611771831 [ch1194] Add typescript definition for rendering dropdown
1611771829 [ch1194] Add initial bg support for multi-step dropdowns
1611771801 [ch1194] dropdown: on cancel, use sinkFullUrl instead of destSelector
1611771801 [ch1194] bg-autofill: Consolidate state initialization
1611769795 [ch1261] focus the open tab when clicking missing elements in dropdown
1611766226 [ch1345] Fix minor lint warnings
1611720665 [ch1234] show error for duplicate snippet name
1611714633 [ch1255] Fixing the word wrap on supe lengthy websites so that it doesn't go off the Magical Panel and cause scrolling
1611705684 [ch695-v2] Fixed Underlining Hyperlinks in Magical Dropdown
1611703352 [ch695] Support richText for URL source element
1611703352 [ch695-v2] Accepts RichText elements (strong, em, etc.) and removes beginning and trailing whitespaces
1611698482 [ch1246] fixed snippet list to show src url favicon
1611697660 [ch1246] Fixed Icon and text for no snippets to match Figma
1611692127 [ch1213] Replaced all the references to snippetView with snippetList + snippetEdit so the snippetView page will never appear so I also moved the delete button to the snippetList page
1611684417 [ch1334] Fixing websites that start with a 'w' to not cut the letter off - main screen of Magical panel
1611680725 [ch1286] set pointer events on fab container to avoid blocking page content
1611615317 [ch1249] drop salesforce normalizer and return hostname as SinkUri by default
1611352452 [ch1311] fixed case 2 stitch
1611337389 [ch1311] Create srcPage to autofill group function
1611270311 [ch1210] Sorted dropdown by newest tab
1611264953 [ch1253] adding test for pageUrlToSinkUri on gsheets
1611263616 [ch1276] add firstName and lastName to server userInfo
1611260857 [ch1153] Separate ShareCTA data from view
1611260854 [ch1153] Enable pushing TabState updates to panel
1611260849 [ch1153] Move ActiveView to shared/models
1611260846 [ch1153] Rename 'showFab' to 'openPanel'
1611260841 [ch1153] Remove dead code
1611177813 [ch1145] keep default view state in sync with mapping changes
1611177813 [ch1145] Check if source page has mappings on right rail default view
1611177813 [ch1145] CSS changes for disable button and body list
1611177589 [ch1145] Fixed Edit template and autofill button positioning
1611170890 [ch592] Updated Magical Dropdown CSS
1611110233 
1611109903 [ch1187] reder default panel with rightRailView()
1611099813 [ch1233] Update tertiary buttons for each view
1611011612 [ch1180] Checks for type 'magic' in the case that there is only one element per magic fill
1611011612 [ch1180] Changed the wand icon to the new version
1611008944 [ch1161] css for panel view flex
1611005026 [ch1161] update how all right rail views call rightRailView()
1611004063 [ch1161] restructure rightrail view
1611004018 [ch1161] modularize tertiary button component
1610761205 [ch1057] Keep snippets up to date in the Magical Panel
1610750136 [ch1173] Rename srcs to mappedSrcUrls
1610750136 [ch1173] Rename srcToSelectors to srcUrlsToSelectors and move closer to use
1610750136 [ch1173] Rename srcHostnames to mappedSrcHostnames
1610750136 [ch1173] Rename results to pages in getAutofillValues
1610750136 [ch1173] Remove redundant hostNamesEqual checks when comparing SrcSelector.id
1610750136 [ch1173] Fallback to suggesting pages with mapping base URL matches if there aren't full URL matches
1610749063 [ch1101] Make snippets-edit save button reactive
1610742100 [ch1172] Fix blue toolbar icon state
1610742100 [ch1172] Centralize icon calculations and avoid round trips to compute it
1610725844 [ch1118] Store \`Transform\` on \`SrcMatch\`
1610725844 [ch1118] Remove draft transforms
1610725844 [ch1118] Avoid logging errors if we have no sources to save
1610674413 [ch1169] Insert plainText into LinkedIn's contentEditable elements
1610649614 [ch1115] Don't count fills in the Snippet Builder for the Share CTA
1610648192 [ch1121] Separate template source and builder CSS
1610648192 [ch1121] Re-organize template files to better separate source and builder
1610646387 [ch1157] remove \`isSnippetsEnabled\` flag
1610646387 [ch1157] remove \`isFabEnabled\` flag
1610646387 [ch1157] remove \`autofillAllRows\` flag
1610646218 [ch1110] restricting snippet variable input to the same src page
1610646218 [ch1110] Removed checkmark after deleting source
1610644486 [ch1119] Excluded the FAB by default on Google Accounts, Google Docs and Magical Chat/Support pages
1610636818 [ch1064] fix down migration on replace auth with sessions
1610636818 [ch1064] add jest and remove mocha
1610636818 [ch1064] add first test for routes
1610632690 [ch1155] differentiate icon container from buttons
1610581927 [ch1128] create intro panel for existing users
1610581813 [ch1128] differentiate snippet edit client name
1610581652 [ch1128] add girl at desk graphic
1610570218 [ch1120] styling fixes for snippet and queue lists
1610570218 [ch1120] new icons for default view update
1610570218 [ch1120] new CSS variables for default view update
1610570218 [ch1120] match views to latest figma
1610559019 [ch1113] Converting new lines to spaces for plaintext usage
1610555807 [ch1148] Check for srcPage.srcMatches when finding snippet sources
1610523032 [ch1127] update default view when sources get published
1610523029 [ch1127] Use tabStates for getRightRailDefaultViewData
1610522984 [ch1127] default-view: reduce unnecessary nesting
1610522984 [ch1127] Never return undefined from getBestSourcesForUrl
1610522984 [ch1127] Make \`srcPage\` required in the 'publishSrcPage' message and tabState
1610521217 [ch1141] Move local storage references to manager
1610483157 [ch1109] Use zero-width spaces after variables in snippet builder to fix caret position.
1610483157 [ch1109] Don't remove the source ID of a variable if you type at the end of a variable and instead, pushes the character out of the variable span
1610395311 [ch1112] place URL last in magical menu
1610383133 [ch1112] templates: place URL last in builder view
1610383132 [ch1112] fallback to URL origin for base url
1610383127 [ch1112] templates: use type, remove stale comment, fix spacing
1610378333 [ch1126] increase eb deploy and setenv timeouts in CI
1610250018 [ch1125] Fix tests and run them on merge requests. Make linting faster.
1610159589 [ch1100] Fixed escaping of HTML in snippets output
1610140578 [ch1106] Removed onClickHelper
1610137036 [ch616] fix queues
1610137036 [ch616] Sticky header/footer in right rail
1610137036 [ch616] Replace srcElement with srcMatch on *Suggestion interfaces
1610137036 [ch616] Replace srcElement with srcMatch in ValueToAutofill
1610137036 [ch616] Rename popup stuff and make right rail open on toolbar button click
1610137036 [ch616] Fix FOUC and link columns
1610137036 [ch616] Delete expand/collapse functionality
1610137036 [ch616] Delete PopupServer/PopupSender
1610137035 [ch616] update template builder to work with iframe right rail
1610137035 [ch616] restyle fab with right rail
1610137035 [ch616] cleanup of builder/popup - removing mode - removing unused globals in source
1610137035 [ch616] Use correct URL for tabState messages
1610137035 [ch616] Split SrcElement from SrcMatch
1610137035 [ch616] Move showFab message listener to fab.ts
1610137035 [ch616] Initial iframe right rail
1610137035 [ch616] Fork view for template builder
1610137035 [ch616] Fix openQueue URL
1610137035 [ch616] Fix merge customizer to work recursively
1610086299 [ch616] Target:ES6
1610084432 [ch1047] styling fix for line height in snippets view and edit
1610084432 [ch1047] snippets: remove source highlights when users modify text
1610084432 [ch1047] sanitize HTML and style with attribute instead of class
1610084432 [ch1047] handle saving of snippets with variables
1610084432 [ch1047] handle population of snippets with source data
1610084432 [ch1047] dedup snippet sources in builder
1610084423 [ch1047] wrap snippet sources in spans with src id
1610083991 [ch1047] add SnippetServer interface and set Snippet body after getting from server into local storage
1610076327 [ch1047] update getLabelForStructuredData input param types
1610076302 [ch1047] add function to getSourcesById
1610076302 [ch1047] Disallow \`//\` in snippet name
1610065274 [ch1099] Disabled fab by default
1610033969 [ch1065] add util function for groupBy
1610033969 [ch1056] add sourceIds to GET snippets route
1609981125 [ch892] write first jest test
1609981125 [ch892] add jest and configure to work for TS
1609975723 [ch1093] Removing the searchText params in getAutoFillValues function in autofill.ts
1609805465 [ch1073] switched from chrome to browser in destroy.ts
1608673041 [ch926] pass userid through to snippet update - check existing creatorUserId
1608673041 [ch926] Add CRUD for snippets
1608659823 [ch1020] snippets: disable in prod until iFrame
1608659823 [ch1020] snippets: add tracking to views
1608659823 [ch1020] snippets: add create/edit view
1608659823 [ch1020] prevent stitch within snippet builder inputs
1608659823 [ch1020] canned response snippets in tribute
1608658420 [ch1020] snippets: add model, server API and manager
1608658420 [ch1020] snippets: add list view to right-rail
1608658420 [ch1020] snippets: add 'view all' popup button
1608658420 [ch1020] add single snippet view
1608185260 [ch950] remove svg fill color for CloseIcon
1608185260 [ch950] close fab functionality and re-open on browser action click
1608185260 [ch950] add fab tracking on clicking pause
1608185260 [ch950] add fab to shadow dom, initial styling and functionality
1608185260 [ch950] add fab feature flag and approved list logic
1608151884 [ch1028] bugfix with update right rail
1608136882 [ch759] Open the Google auth. window in getAccessToken when interactive and refresh fails
1608135429 [ch1028] remove duplicate queue interface
1608135429 [ch1028] Right rail container managing state for all views
1608135429 [ch1028] Rename rightRailContainer to rightRailView
1608083045 [ch917] Track autofill.invoke before error.no-auth-google-sheets
1608081612 [ch917] Use a new error event for Google Sheets fill errors
1608081612 [ch917] Replace all stored GOOGLE_ACCOUNTS with ones from the server
1608081612 [ch917] Record when Google API auth is shown and granted
1608081612 [ch917] Record the reason for error.no-auth-google-sheets
1608081612 [ch917] Only record error.no-auth-google-sheets when searchText is empty.
1608059423 [ch1010] Attach Tribute using all capturing key/input events on \`window\`
1607727117 [ch926] Add snippets db migration
1607696213 [ch660] update tribute scroll to use child ul container
1607645220 [ch991] calculate insertion row into sheets ignoring formatting
1607635620 [ch824] Use the srcPage.url instead of tabState.url for tracking magicUsed
1607635620 [ch824] Remove \`url\` property from the TabState interface
1607631462 [ch985] allow sheets batchUpdate to insert a row before inserting data
1607626211 [ch998] Update readme
1607623328 [ch998] Update readme, delete stale files
1607622393 [ch997] Use same function for updating user data on install/update/login
1607621766 [ch162] Add automatic linting stage on gitlab-ci for MRs
1607570647 [ch952] Spoof IntersectionObserver at observe time on LinkedIn.com/in/
1607570647 Include www on magicalMarketingURL and misc. lint fixes
1607556819 [ch955] builder: add promote/demote buttons for \`canPromote\` users
1607556819 [ch955] add update source method to background
1607556637 [ch955] store user.canPromote into local storage
1607544986 [ch970] stringify request body before sending to google API
1607543303 [ch970] show GoogleApiResponse errors in console
1607543303 [ch970] move createGSheetsMagicFillRequestBody() into magicGoogleSheetAutofill
1607543303 [ch970] add GoogleApiResponse as return from all Google calls
1607542706 [ch981] add share and uses cases to popup
1607477727 [ch954] return canPromote in GET users/info
1607477727 [ch954] remove running seeds from prestart
1607477727 [ch954] Allow authorized users to update sources (including promote/demote)
1607473299 [ch954] add updaterUserId to sources
1607473299 [ch954] Don't return exampleUrl from Sources.
1607471992 [ch934] sink-menu: allow searching of label names
1607462236 [ch969] pin node version to 12.18.4 in package json
1607439948 [ch960] Edit Linkedin Schools public template
1607436247 [ch958] Specify node:12 as the babel target
1607378380 [ch554] knex: use \`.onConflict.merge\` insted of custom upsert
1607378380 [ch554] knex: Use \`.onConflict.ignore\` instead of raw \`DO NOTHING\`
1607357436 [ch554] update to knex v0.21.12
1607123864 [ch931] Use tabs.sendMessage API for notifications
1607123864 [ch931] Move \`sink-notify.ts\` to \`content-scripts/notify.ts\`
1607123352 [ch942] Fix linting error in routes/users.js
1607122957 [ch942] lint: skip build files
1607101863 [ch932] onboarding enhancements
1607043060 [ch927] Add missing font-family prefix in queue.css
1607038436 [ch927] Package DM Sans/Mono in the extension and inject as a content_script
1607035456 [ch544] queues: add tracking
1607035456 [ch544] allow sink-notify to render a queue rail
1607035456 [ch544] allow pop-up to open a queue rail
1607030371 [ch544] setting google sheet to email association on stitch into local storage.
1607030371 [ch544] pull out shared bg google sheets autofill functions
1607030371 [ch544] create queue right rail with QueueProps
1607030371 [ch544] add support to get google sheet data
1607009802 fixing manifest indentation to 2 spaces
1606928887 [ch921] update user data on every browser startup
1606926827 [ch826] move background transform models to shared dir - add shared/model/transforms and update usages - move transform-builder to content-script
1606926827 [ch826] move background tracking models to shared dir - add shared/model/tracking and update usages
1606926827 [ch826] move background source models to shared dir - add shared/model/sources and update usages
1606926827 [ch826] move background notify models to shared dir - add shared/model/notify and update usages
1606926827 [ch826] move background autofill models to shared dir - add shared/model/autofill and update usages
1606926827 [ch826] add eslint rule for background import - restrict background imports outside of background
1606924240 [ch920] Set environment variables after deploying
1606924240 [ch920] /info: capture environment variables on startup
1606872704 [ch925] Add LinkedIn headline as a source
1606866657 [ch924] Add Sales to the list of job functions with custom use case pages
1606856886 [ch911] override label for given/family name
1606838024 [ch877] update linkedIn sales and company seed sources - include structured data paths - cleanup css paths - set unused to public false - add public false support
1606837219 [ch295] Use babel-node for builds in prod
1606755883 [ch856] Open page styling treatment, only show on hover
1606752971 [ch912] update string columns to larger char limit of 5000
1606752788 [ch856] separate missing elements by whether they have a label or not when building the suggestions for tribute
1606752788 [ch856] display missing elements with labels vs others differently within the tribute
1606752788 [ch856] builder: refactor new list element to function
1606752788 [ch856] builder: put missing items without labels at bottom of list
1606752788 [ch856] builder: put all missing elements at end of list
1606752788 [ch856] builder: add flag icon and styling to missing items
1606752788 [ch856] buidler: refactor missing list element into function
1606505508 [ch904] builder: use cursor pointer for 'x' and hyperlink transform
1606495046 [ch555] Invoke template builder after focusing tab
1606495046 [ch555] Enable focusuing tab and window
1606495046 [ch555] Add tabId to SrcPage
1606495046 [ch555] Add missing elements suggestion
1606417198 [ch897] update logic for structured data labels
1606415833 [ch901] update all user data every 6 hours in case sources get udpdated from the server
1606336286 [ch342] Rename srcValue to originalValue
1606335958 [ch342] Rename TemplateResult to SrcPage
1606335958 [ch342] Rename TemplateElement to SrcElement
1606335193 [ch342] Rename MultiSelector to CssPath
1606327771 [ch342] Remove Template and Source interfaces in favour of SrcSelector
1606278192 [ch541] Use structured data server properties to label elements
1606278175 [ch541] Split components.tsx to icons.tsx and graphics.tsx
1606263998 [ch541] template builder styling for labels
1606262846 [ch541] tribute styling for labels
1606261485 [ch875] Use await instead of promise.then to reduce nesting in tribute.tsx
1606261485 [ch875] Record missingElements count for autofill.invoke
1606261485 [ch875] Delete fillValue from AutofillSuggestionGroup
1606259280 [ch59] add tracking for share show, close, and copy link
1606259280 [ch59] Update share rightrail to latest figma
1606258613 [ch59] Add streaming notify subscribe
1606256287 [ch59] push latestFillFlow and updated count of fills to localStorage
1606256282 [ch59] Refactor to use FillFlow and LatestFill types
1606203875 [ch864] Add structured data properties to StitchSources
1606203875 [ch864] Add structured data properties to LinkedIn source seeds
1606202722 [ch864] Add structured_data_path and structured_data_domain source columns
1605912741 [ch845] Stop storing the sheetName with stitches
1605910738 Switch Gitlab CI to use node:lts-buster to get 'git describe --exclude'
1605838574 [ch840] Rename \`fillId\` to \`fillFlowId\` so it can later be included with \`autofill.invoke\`
1605802980 [ch828] divide right-rail into separate files
1605802980 [ch828] Move right-rail logic to new directory
1605802975 [ch828] right-rail: move collapsible functionality out of template builder
1605745975 [ch828] right-rail: refactor container so it can be re-used
1605745975 [ch828] right-rail: add share call to action pop-up
1605745975 [ch828] rename template buidler css file to \`right-rail.css\`
1605745975 [ch828] rename right-rail types to template builder
1605745975 [ch828] Remove right-rail references from template-builder
1605743826 [ch785] Add text-decoration:none in popup to handle :hover
1605742204 [ch827] EB deploy automatically once develop has been promoted to staging
1605739575 [ch542]cleanup todo
1605739575 [ch542] setup transform piping - initial work for transform support in background/template builder - add transform api/manager - add transform builder - refactor to use TemplateElement
1605739575 [ch542] populating transforms into sink
1605739575 [ch542] common ui component for Hyperlink icon
1605739575 [ch542] add transform tracking on template save
1605739575 [ch542] add transform styling to template builder and tribute
1605739026 [ch785] Change feedback link to point to Drift and add chat link
1605735028 [ch785] Use separate chat and feedback Drift URLs
1605721923 [ch785] Add /users/support route to redirect to Drift with user attributes
1605656209 [ch770] tracking: capture event before sampling content-editables
1605656165 [ch770] Use changed DestSelector instead of mapping selector for changes
1605642686 [ch770] gsheets: track selectedMagic for fill all rows
1605642686 [ch770] gsheets: track content editable changes
1605642686 [ch770] gsheets: Record completed fills
1605642686 [ch770] Remove the autofill.magic-fill-row event
1605642686 [ch770] Record the \`fillId\` in fill and change Amplitude events
1605642686 [ch770] Consolidate autofill.(selected-standard|selected-magic) event shape
1605642531 [ch319] forms: track user fill modifications for contenteditable
1605642531 [ch319] forms: track user fill modifications for <input>/<textarea>
1605642531 [ch319] forms: add a helper to create a DestSelector
1605642531 [ch319] forms: Record when a user completes a fill so we can detect edits
1605642531 [ch319] autofill-forms: group magical attribute const
1605628047 [ch741] fixing upsert to return camel case response
1605628047 [ch741] add RUD routing for new userSourceTransforms model
1605627778 [ch741] add migration for new userSourceTransforms model
1605574889 [ch786] Copy the Amplitude device ID from getmagical.com when it's unset
1605305947 [ch778] Send user.id to the website from onboarding redirects
1605296086 [ch777] Don't call amplitude.setUserId(…) for guests
1605216555 [ch772] Specify the 'platform' in Amplitude events
1605212786 [ch62] add zoominfo to seed data
1605212588 [ch769] Don't pass along undefined for missing 'a' query parameters
1605210919 [ch753] cleanup yelp and yellowpages.ca baseURLs
1605207821 [ch753] templates: add twitter, yelp, yellowpages, opentable
1605201233 [ch743] fixing json rpc where iframes closing within a page caused the tab to be deleted from tabStates. This caused multiple issues with template builder.
1605186132 [ch672][ch472] allow more elements to be selectable when creating templates
1605144498 [ch423] Don't return OAuthAccounts without an refresh token to the extension
1605144366 [ch423] Always force a Google consent screen for /users/oauth/google/associate
1605045557 [ch715] magic fill values across frames
1605045533 [ch580] move onInstalled tracking to background.ts for consistency
1605045533 [ch580] fix uninstall URL to new beta route - add environment for uninstall URL - add call to set user info prior to install tracking call
1605045533 [ch580] export function to get tracking user id
1605045533 [ch580] add tracking userId to onboard URL
1605045532 [ch580] return userid when setting tracking user info
1605035969 remove watch on npm run dev-staging
1604959657 [ch579] making tribute attach for about blank pages
1604949669 [ch703] Refactor duplicate autofill code into \`autofill-common\`
1604944822 [ch693] Stop Tab/Enter events from getting to contenteditable elements when Tribute is active
1604940199 [ch680] pass through allowed query parameters
1604939917 sink-menu: use url as title if page title is empty
1604862693 [ch687] Use await in webstore-publish.js
1604862693 [ch687] Support submitting draft extension updates for prod.
1604840776 [ch515] Use a helper to support setSelectionRange on all text <input>
1604840776 [ch515] Use a helper to support .selectionStart on all text <input>
1604833214 [ch692] Make the Tribute menuContainer the viewport width to fix x-axis flipping
1604785095 [ch690] Don't show scrollbar gutters when there is nothing to scroll
1604701006 [ch675] Remove 5s delay to open the onboarding tab
1604699200 [ch550] Don't require a second click to Show All in Tribute
1604699161 [ch680] return userid in response from user POST endpoint
1604691684 [ch550] Dispatch 'change' events upon filling
1604687026 [ch670] Use a positioned custom menuContainer with Tribute
1604637773 [ch676] Remove all query parameters from .force.com URLs for sink storage
1604637729 [ch676] Fix escaping of periods of the docs.google.com URL normalizer
1604637664 [ch676] Normalize the URL key in mappingsStore
1604621134 [ch664] add "not showing" element for forms
1604620308 [ch664] sink-menu: normalize styling on forms to match gsheets
1604620303 [ch644] content-scripts: import google font from css file
1604598192 [ch650] Don't require // at the start of a field to trigger Tribute
1604597707 [ch464] add version to staging zip file
1604597707 [ch464] add version to prod zip file
1604596793 [ch659] fix issue with empty exclude matches
1604596771 [ch659] add about blank into inject content script
1604592034 [ch647] group suggestion options in tribute using groupIndex instead of identifier.
1604591357 [ch647] reverting cd0fd0f924d7b2ca09156fc40aa27419f587d54e
1604583550 [ch654] Use \`match_about_blank:true\` with autofill.css for WYSIWYG editors
1604582314 [ch651] Put replacing the Chrome web store page with the onboarding page behind a feature flag
1604565723 [ch656] Fix srcSelector equality checks failing with createdAt
1604554624 [ch633] Use excludeMatches in registerContentScript
1604547141 [ch368] template-builder: add new elements to bottom of panel
1604547141 [ch368] right-rail: scroll to bottom when adding new elements
1604547141 [ch368] add createdAt timestamp client side for source creation
1604547141 [ch368] Order template elements by public, private then URL
1604511869 [ch629] Use \`all_frames:true\` for non-GSheets sink content scripts
1604464449 [ch633] Don't load autofill-forms on GSheets
1604463191 [ch633] Attach tribute on \`input\` events with '/'
1604461080 [ch633] Rename \`input\` to \`element\` in autofill-forms.ts
1604457403 [ch497] add missing-16.png and alphabetize web_accessible_resources in manifest
1604454012 [ch497] Specify the tabId for browserAction.setIcon()
1604453865 [ch497] Default to unavailable icon and let Chrome choose the proper size
1604448910 [ch269] Stop prefetching access tokens twice whenever tribute updates
1604448910 [ch269] Always fetch Google OAuth tokens from the API server
1604438915 [ch576] grouping tribute options by tabId now so that multiple same tabs don't mess up the tribute options
1604437899 [ch269] Add routes to associate additional Google accounts to an account
1604426379 [ch108] ignore classes with empty names within optimal-selct
1604374388 [ch95] inject content-scripts in matching tabs
1604356914 [ch269] Add storeGoogleOAuthAccount to oAuthAccountsHandler
1604350378 [ch438] sink-menu: make footer more distinct from suggestions
1604336285 [ch459] Align sink menu list items with '//'
1604326928 [ch502] autofill-forms: add to deconstructor listener
1604324611 [ch502] template-source: add to deconstructor listener
1604324611 [ch502] template-builder: add to deconstructor listener
1604324611 [ch502] google-sheets: add to deconstructor listener
1604324611 [ch502] content-scripts: add deconstruction event listener
1604156004 [ch200] update gitlab CI to push tag and commit SHA to EB env vars
1604155848 [ch200] add info route to replace healthz
1604113622 [ch508] Use separate Amplitude API keys per build environment
1604113622 [ch508] Use amplitude.setVersionName() so we get automatic release tracking
1604113622 [ch508] Use BUILD_ENV for scripts/update-manifest
1604113622 [ch508] Set env.BUILD_ENV in node build scripts
1604088517 [ch479] Ignore sheetName for destSelectorsEqual since we already match the sheet ID
1604088517 [ch479] Handle LinkedIn first/last name modifiers as separate selectors
1604088239 [ch479] Insert source seeds with sequential timestamps
1604037696 [ch485] Load the onboarding page over a Chrome store installation page or after a delay
1604031744 [ch479] Sort returned sources by createdAt ASC
1604031744 [ch479] Add linkedin-first-name/linkedin-last-name public sources
1604003196 [ch501] autofill-forms: move globals into init function
1604003193 [ch501] autofill-google-sheets: move globals into init function
1604003190 [ch501] template-source: move globals into an init function
1604003173 [ch501] template builder: move globals to init function
1603984630 [ch259] add health check endpoint
1603942346 [ch41] Hide Fill Remaining when there is only one remaining
1603938045 [ch382] support multiple columns having the same stitch source
1603934473 [ch471] Update template in content script on DOM and local storage changes
1603925657 [ch381] Remove \`utm_\` parameters from sink URIs
1603925652 [ch381] Normalize sink URLs in stitches
1603925419 [ch41] Fix bugs with 'Fill remaining rows' and enable by default
1603917887 Hide Version Bump jobs from PR branches
1603866534 [ch441] Fix escaping of '?' with knexUpsert.
1603866534 [ch441] Fix escaping of '?' for inserted sources.
1603866480 Hide 'Custom Version Bump' job from PR branches
1603840734 [ch442] adding new algo for best template match
1603830930 [ch466] Upsert source seeds and correct baseUrls
1603827237 [ch444] reduce throttle time for dom change event, set to emit at the end of the throttle time rather than at the start
1603783925 Install zip package in gitlab CI
1603782534 Create the artifacts directory in webstore-publish.mjs
1603781984 Automate prod promotion and packaging. Save artifacts in GitLab
1603780552 [ch437] Also update stitches and sources after visiting a post-auth URL
1603776451 [ch437] Update user info from the API when post-auth URLs are loaded
1603770583 [ch437] Separate gitlab-ci stages
1603767462 Separate gitlab-ci stages
1603766204 [ch395] Include ?env= param for the initial /onboard redirect
1603757640 [ch202] Automate version bumps
1603751598 Make knexfile DB environment variables consistent
1603751064 [ch428] sink-menu: Fix footer image padding and size
1603750485 [ch376] Use refresh-fetch and access tokens from the server for Sheets requests
1603749842 [ch376] Move spreadsheet requests to background pages
1603749578 [ch420] Use getmagical.com for the uninstall URL
1603749386 [420] Use getmagical.com as the website domain
1603746435 [ch376] Return and refresh Google access tokens
1603746435 [ch376] Add Vary and Cache-Control headers to the server
1603744810 [ch376] Save Google OAuth access and refresh tokens
1603741880 [ch395] sessions: add environment param to redirect URL
1603740093 [ch395] users: Return early after redirect
1603739915 [ch39] sigup: update rediret URL, drop unsused profiles
1603729229 [ch409] add missing elements property to autofill tracking - remove call to error edit template selector missing
1603729010 version bump to v0.4.0
1603728665 [ch371] change active template copy
1603721774 [ch303] update templateForUrlStream to observe localstorage changes on private, public and disabled storage areas
1603721774 [ch303] update disabled sources localstorage from server
1603721774 [ch303] Handle source deletion
1603586702 [ch405] add case to handle linkedin position deletion using X icon
1603583332 [ch303] return disabled sources list with sources for user
1603492709 [ch399] popup: Add sink image for forms
1603492597 [ch399] popup: Add correct image for spreadsheets
1603487903 [ch383] right-rail: Add div around collapsable content
1603487903 [ch383] right-rail: Add collapse/expand option in edit mode
1603487903 [ch383] righ-rail: Add tracking for collapsing view
1603487903 [ch383] Alphabetize svg components
1603487821 [ch372] update icon state when window changes
1603487821 [ch372] fix icon state when opening a new unavailable tab
1603487816 [ch372] add missing icon state
1603486818 [ch367] popup/right-rail: Use latest figma text and gif
1603480279 [ch373] adding tracking to all template builder interactions and removing elementsFoundOnDom as no longer needed
1603467745 [ch373] fixing missing selector cases in dom change
1603463444 [ch373] Refactor of template builder to better understand the draft state of the template before save
1603419422 [ch305] sink-menu: stylize no tabs/no matches view
1603419422 [ch305] sink-menu: stylize footer and "remove mapping" text
1603419422 [ch305] sink-menu: on first load, hide menu until data is loaded
1603419422 [ch305] sink-menu: fix font bolding
1603419422 [ch305] sink-menu: add icon beside magic fills
1603419422 [ch305] sink-menu: Update basic styles to match figma
1603419422 [ch305] sink-menu: Display missing elements row
1603419422 [ch305] sink-menu: Add horizontal rule in between groups
1603419422 [ch305] sink-menu: Add flag icon for missing elements
1603419422 [ch305] sink-menu: Add checkmark for items already filled
1603418039 [ch303] Add /sources/disabled route
1603411178 [ch377] add null check for google sheets before attaching Tribute
1603401469 [ch369] template builder style changes
1603320692 add npm run dev-staging to allow local extension dev using staging API
1603320522 [ch362] Styling update to make template builder's list of selected sources scrollable
1603295385 [ch365] on template builder finish, clear all element styling - remove duplicate clickCancel method
1603241073 update DB configurations for staging and prod and rebrand admin user email to getmagical
1603239344 [ch357] on tab queries, only check in current window - add additional check on tab activation that tab states is not empty
1603237962 Downgrade rollup from 2.32 due to Tribute not working anymore
1603236678 Return a non-zero exit code when webstore-publish fails
1603236653 Set manifest.key for staging/production builds
1603231325 [ch347] Revert optimal-select update for breaking adding selectors
1603230597 [ch358] update amplitude user id to prefer email over HA user id
1603229843 [ch346] Automation to bump and tag versions
1603229841 [ch346] Remove versions from manifests and use git tags instead
1603229597 New production API server URL
1603227728 Configuration updates for getmagical.com
1603220489 config change for new staging domain
1603212255 [ch359] Add Google site verification route for magical-api-prod
1603156600 [ch353] Also use /sessions/onboard from /sessions/google
1603154990 Don't run seeds in prestart as the source seed violates FK constraints
1603144279 [ch353] Open /sessions/onboard when the extension is installed
1603144232 [ch350] update icons and switch to use 32px icons - extracted out the icon size into HA config
1603143577 [ch353] Add a route to use for the extension installation tab
1603141904 [ch353] Rename OAUTH_FAILURE_REDIRECT_URL to WEBSITE_SIGN_IN_URL
1603138442 [ch354] Update amplitude-js to 7.2.x to match WebFlow
1603131634 [ch339] Update template builder only when DOM changes on content page. Edge cases include adding new sources when some existing sources are not visible.
1603131634 [ch339] Rename Template builder edit vars
1603131634 [ch339] Leverage RxJS instead of MutationObserver to update icon state and move icon state determination into background.
1603131634 [ch339] Delete unused EditingState property
1603111598 [ch345] remove states[url].mappings as it is no longer being used
1603111598 [ch345] Ensure that any existing mapping for a column of a sheet are wiped before saving a new one
1603050052 [ch347] update outdated packages with 'npm update'
1603043759 [ch347] Change to zip-a-folder package for zipping to avoid a security warnings in dependencies.
1603005297 [ch170] Use passed URL in addGoogleFont(url)
1602954154 [ch282] only save sources which have an exampleUrl as these are the new ones created by the client
1602953895 [ch282] styling fix for source selection class
1602886572 [ch272] Enable CORS for /users POST to allow submitting from the website signup flow
1602882201 fix for prod google oauth
1602881399 bump release version
1602881350 fix for staging google oauth
1602875699 [ch168] Change URL of tab opened upon install and include #installed so the page offers pinning
1602872385 Releasing v0.9.0
1602871799 [ch329] Send and recieve messages for setting icon status
1602871799 [ch329] Replace HA icons with Magical icons
1602871799 [ch239] Fix formating on \`autofill/tribute.tsx\`
1602871497 WIP: 253 2+ Google accounts: GSheets
1602864422 [ch287] update haconfig apiServerURL through rollup
1602859005 [ch167] update amplitude user information from new server endpoint - add browser alarm to refresh user info periodically
1602858931 [ch167] add new amplitude event for google sheets auth error - add browserIdentity use property for amplitude
1602822218 [ch272] Allow saving a user's company and job function
1602805994 [ch296] Change API URL to https://localhost for development
1602805561 [ch296] Set Secure:true and SameSite:None cookie flags
1602805456 [ch296] Use HTTPS for local development
1602800149 [ch331] add user info route to get user information such as id, email for amplitude user properties
1602795693 cleanup for prod deployment
1602766645 [ch171] add popup text for gsheet
1602766645 [ch171] Update pop-ups with latest figma styles
1602766645 [ch171] Create shared UI components folder
1602748214 [ch254] Switch from browser.identity.getAuthToken to browser.identity.launchWebAuthFlow
1602710743 [ch170] changes to update right rail UX/UI
1602624826 [ch92] Check for and install extension updates every 5 hours
1602618044 [ch249] toggle autofill all rows off using feature flag
1602609692 [ch290] Updates to background mappings to store the mappings grouped by sinkFullUrl in localstorage
1602609692 [ch290] Pull mappings from store when suggesting autofill options
1602609585 [ch290] Stitch model change
1602608383 [ch286] add source attributes to stitches response
1602605776 [ch175] Normalize email addresses to lowercase
1602605774 [ch175] Add Google OAuth
1602605687 [ch175] Install passport-google-oauth2 package
1602605685 [ch175] Change req.user to be a User
1602605660 [ch175] Drop password and salt user columns
1602605657 [ch175] Replace Auth with Session
1602531946 [ch265] Switch to cookie authentication with the API server.
1602515871 [ch40] update/add/delete stitches into local storage
1602274429 [ch175] Replace bearer token auth with cookie auth
1602274013 [ch175] Add dotenv-defaults for configuration management
1602268993 [ch280] MR comments
1602268450 [ch280] cleanups
1602253578 [ch151] cleanup from MR feedback
1602249976 [ch151] update haConfig to point to staging server instead of local
1602249903 [ch151] when editing template, only save new private sources - add public flag in SrcSelector and set from server Sources response
1602249903 [ch151] update template server to filter sources by public and private and save templates into their respective local storage
1602249903 [ch151] separate public template fetching from private template fetching
1602249903 [ch151] added saving of sources from a template and converting from template to sources
1602249903 [ch151] Save user templates to the server
1602249903 [ch151] Private sources and public sources are now split up and organized into their respective template stores. Upon retrieving templates. The two template stores are merged together.
1602192644 [ch280] do nothing on PK conflict on sources insert
1602098945 [ch280] return only data from sources table
1602098745 [ch280] get all sources relevant to the user including private and public
1602087542 [ch267] update sources table to have default value for public false, any create of a source should not be public - update saving sources to accept array of sources for bulk insert
1602082127 [ch260] Migrate Templates to use new Sources
1601994788 [ch245] Fetch public selectors from the server and convert to templates
1601951264 [ch257] Workaround to fix broken icon in the autocomplete popup
1601946903 [ch174] Re-do 15098f41d7e1beb51b9fd9c5069729f00bb7b9ef changes which were overwritten
1601941097 [ch174] Stitch model with GET and POST routing
1601935367 [ch203] Add 'authenticatedFetch' function for server requests
1601934958 [ch203] Create guest account on 'install' and 'update'
1601933494 [ch216] Convert existing knexjs column identifiers to camelCase
1601932971 [ch216] Install knex-stringcase to convert column names to/from camelCase for JS
1601923351 [ch237] Fix index.js imports
1601911452 [ch237] Add index.js with exports to clean up imports
1601779827 Version bump to v0.2.0
1601778975 Version bump to 0.1.1
1601679319 Add npm lint script
1601679015 Add eslint configuration and fixes
1601664844 [ch195] Use static templates.js for legacy chrome extension users
1601664844 [ch195] Replace template seeds with selector ones
1601664844 [ch195] Convert templates table to a selectors table
1601664844 [ch195] Add a user_selectors_disabled table
1601664844 [ch195] Add /selectors GET route and handlers
1601657726 [ch147] Support creating new accounts and guest users
1601657726 [ch147] Save and return auth information on user creation
1601657726 [ch147] Enable auth on templates save route
1601657726 [ch147] Add passport-js bearer auth verification
1601657726 [ch147] Add basic email/password restrictions for new users
1601657726 [ch147] Add auth/refresh route
1601657726 [ch147] Add auth/login route
1601652472 [ch147] Move user handlers and models into isolated files
1601652375 [ch147] Move template handlers and models into isolated files
1601652371 [ch147] Delete unused route code
1601641286 [ch132] update to use migrate:latest instead of migrate:up
1601640900 [ch132] Moving knexfile and adding prestart script to have knex migrations and seeds run on deploy
1601560000 Update develop-mr.md
1601559618 Add new MR template file
1601559553 Add new merge_request_templates directory
1601559532 Add .gitlab directory
1601500801 [ch199] Fix whitespace in more LinkedIn and GitHub selectors
1601059210 fix package and configs
1601055793 adding .env
1601049290 rename project and version bump to 0.1.0
1601049117 update CI for staging
1601042315 youtube template fix
1601041896 [ch166] fixed templates and changed knex from local to dev
1601041314 Fix module imports in scripts
1601040420 Rename 'qa' builds to 'staging'
1601039550 Add a 'Dev' suffix for local/dev builds
1600981506 Run eslint on the repo
1600981477 Add eslint configs
1600973371 [ch146] fix indents on background-templates.ts
1600971319 [ch146] Update public templates from the server every 6h
1600964822 [ch146] create template manager which pulls public templates from server whenever backround.html is loaded
1600826360 [ch144] remove creds from knexfile
1600824957 [ch144] GET and POST on users
1600824130 [ch128] Manage public vs private templates
1600824130 Merge branch 'feature/ch128' into 'develop'
1600823654 Merge branch 'feature/ch143' into 'develop'
1600823653 Update to mocha v8.1.3 to resoving dep vulnerability
1600807215 Merge branch 'feature/ch135' into 'develop'
1600805996 [ch135] Use a static oauth2.client_id and extension key for dev.
1600797911 [14] add option to Tribute so that pop-up only shows when trigger phrase is at the start of input text
1600797911 Merge branch 'release' into 'develop'
1600716065 remove package lock
1600714995 babel fix attempt 2
1600714458 babel fix
1600713533 [ch111] wire server to RDS postgres DB and allow templates to save to DB
1600713533 Merge branch 'feature/ch111' into 'develop'
1600193483 adding CI
1600189338 reflect latest release
1600188148 New prod assets
1600123002 QA assets
1600106279 new QA assets
1600086393 creating QA extension build
1599752748 Make CI run manually
1599751895 merge conflicts
1599751563 Fix to CI for main
1599750924 Fix to CI
1599684612 version bump
1599684541 Merge branch 'feature/ch44' into 'develop'
1599684146 [ch44] having templates pull from server
1599679808 update to LinkedIn templates
1599620246 Adding successful deploy pipeline for develop and main
1599597169 Merge branch 'develop' into 'main'
1599597169 Develop
1599597077 Merge branch 'develop' of gitlab.com:heyautofill/server into develop
1599597056 CI
1599596827 Merge branch 'develop' into 'main'
1599596825 Develop
1599596808 Merge branch 'main' into 'develop'
1599596683 CI
1599593319 Merge branch 'develop' into 'main'
1599593319 Develop
1599593284 CI
1599593162 CI
1599593016 ignore DS_Store
1599592525 Update .gitlab-ci.yml
1599585070 first commit
1599526715 bump version
1599091213 Fixing some linkedin profiles pulling wrong job title
1599074871 Merge branch 'feature/ch22' into 'develop'
1599074540 [ch22] adding tracking for an autofilled row to amplitude
1598991688 [14] add option to Tribute so that pop-up only shows when trigger phrase is at the start of input text
1598991688 Merge branch 'develop' into 'master'
1598991564 adding dist/
1598991541 adding dist/
1598991425 removing dist/ from git ignore
1598986402 [14] add option to Tribute so that pop-up only shows when trigger phrase is at the start of input text
1598961198 Initial commit
1551862315 Initial template creation
`.split('\n').map((s) => {
	const [num, ...rest] = s.split(' ');
	return {
		timeStamp: parseInt(num, 10),
		subject: rest.join(' '),
	}
});

const CONDENSE_THRESHOLD = 1 * 60 * 3;
const BUILD_DURATION = 15 * 60;
const condensedTimestamps = [];
// eslint-disable-next-line @typescript-eslint/prefer-for-of
for (let i = 0; i < gitLogTimestamps.length; i++) {
  const currentTimestamp = gitLogTimestamps[i];
  const diff = condensedTimestamps.length
	? (condensedTimestamps[condensedTimestamps.length - 1].timeStamp - currentTimestamp.timeStamp)
	: Infinity;
  if (diff > CONDENSE_THRESHOLD) {
    condensedTimestamps.push(currentTimestamp);
  } else {
  }
}
console.log(condensedTimestamps);
const url = new URL(window.location.href); 
const start = url.searchParams.get("start") ?? 7;
const end = url.searchParams.get("end") ?? 18;
const visibleTimestamps = condensedTimestamps.slice(start, end);
const series1 = {
	name: "MR blocking period",
	data: visibleTimestamps.map(ts => (
		[ts.timeStamp, ts.timeStamp + BUILD_DURATION]
	))
}
document.querySelector("#num-mrs").textContent = `MRS Shown: ${end - start}`
document.querySelector("#start").textContent = `${new Date(visibleTimestamps[0].timeStamp * 1000)} - ${new Date(visibleTimestamps[visibleTimestamps.length -1 ].timeStamp * 1000)}`
console.log(series1);
const categories = visibleTimestamps.map((_, i) => {
	return _.subject.substring(0, 50)
});

Highcharts.chart('container', {

	chart: {
			type: 'columnrange',
			inverted: true,
			height: (9 / 16 * 100) + '%'
	},

	accessibility: {
			description: 'Image description: A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius.'
	},

	title: {
			text: 'MR merging opportunities'
	},

	// subtitle: {
	// 		text: 'Observed in Vik i Sogn, Norway, 2021 | ' +
	// 				'Source: <a href="https://www.vikjavev.no/ver/" target="_blank">Vikjavev</a>'
	// },

	xAxis: {
			categories: categories
	},

	yAxis: {
			title: {
					text: 'Time range'
			}
	},

	tooltip: {
			// valueSuffix: '°C'
	},

	plotOptions: {
			columnrange: {
					dataLabels: {
							enabled: true,
							format: '{x}'
					}
			}
	},

	legend: {
			enabled: false
	},

	series: [series1]

});
