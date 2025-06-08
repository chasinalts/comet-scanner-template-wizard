# Product Context - COMET Scanner Template Wizard


	## WHY BUILD THIS APP???

		The COMET Scanner Template Wizard is designed to provide non-coders the ability to create a type of scanner who's output is way more than just numerical values:
		1. ** User-Friendly Interface ** : Non-technical traders can create sophisticated scanners without coding knowledge
		2. ** AI-Powered Generation ** : AI can format processes that would be very time-consuming for someone new at coding, which, if not properly formatted it would break the scanner.
		3. ** Interactive Template Builder with Visual Preview ** : A guided wizard that asks users configuration questions, shows visual previews of how each answer affects the chart/template appearance, and automatically generates custom code based on their selections.


	## CORE USER PROBLEMS/SOLUTIONS

		### Primary Users (Page 1 - Template Builder)
			Problem: Traders want custom scanners but lack Pine Script coding skills
			Solution: Visual wizard process that generates Pine Script code depending on the answer provided.
		
			Problem: To better visualize the data that is output by a normal scanner's numerical values. 
			Solution: Customizable visualization options for scanner results and gallery providing different data visualization techniques.
		
			Problem: Setting individual alerts for each asset becomes overwhelming when monitoring multiple assets for indicator signals.
			Solution: Multi-Asset Alert System that handles up to 40 assets per single alert setup, with scalable expansion through multiple script instances for larger portfolios.

			Problem: Traditional scanners only display current numerical values without historical context, making divergence analysis impossible when values move opposite to price trends.
			Solution: Historical Line Plot Visualization that shows value progression over time, enabling traders to identify divergence patterns and predict future value movements.

			Problem: TradingView's watchlist alerts are severely limited even on expensive plans (maximum 30 alerts on Ultimate plan) T4 (Text Template Transformation Toolkit) Code Generation - Best Kept Visual Studio Secret - Scott Hanselman's Blog, restricting comprehensive portfolio monitoring.
			Solution: COMET Scanner System that bypasses traditional alert limits by monitoring up to 40 assets simultaneously per alert instance.
		
		### Admin Users (Page 2 - Dashboard)
			Problem: Need to manage and update template content without developer intervention
			Solution: Admin dashboard for complete template management
		
			Problem: Maintaining custom codebase and code snippets according to answers provided by wizard.
			Solution: Centralized code management system with snippet library that assigns specific lines of code for each of the possible answers provided as options.
		
			Problem: Branding and visual content management
			Solution: Image upload for gallery(that is under the banner) and banner (that is under the title) and management system for banner and gallery thumbnails that allows for resizing of images/thumbnails vertically and horizontally separately by stretching the resizing window x and y axis to determine size of banner and thumbnails (each have their own resizing frame) on Template builder page.	


	## KEY WORKFLOWS

		### User Workflow (Page 1)
			1. Browse gallery of COMET Scanner Variations (this will just be images of charts with different variations of the COMET Scanner for users to see whats possible).
			2. Determine how you would like the data from the COMET Scanner visually represented on the chart
			3. In Wizard, every answer to every question has an image showing how that answer will be visually represented on the chart....answer wizard questions appropriately and specific lines of code will be added to your Custom COMET Scanner.
			4. Progress window that automatically adds check in box when code is added from each question in teh wizard and from the TickerID string, NameID string, and CustomFunction code output and added by the AI to the Custom Template (each question from the wizard and each of the three variables from the AI will all have their own checkbox in the progress window that pulls out from the left of the screen)
			5. Export final custom template that app outputs. These downloaded files can be shared and imported from the import and export buttons in the progress window to the left of the screen. When exported, the downloaded file contains the template and all of the progress from the progress window so that it can be imported by anyone that has the file which when imported will clone the exact environment and COMET Scanner Template exactly as it was when the file was exported by a user.
			6. Feedback mechanism and Feature request features provided to users

		### Admin Workflow (Page 2)
			1. Manage Banner and Gallery images as well as the sizes of the banner and gallery thumbnails independently of each other from the dashboard.
			2. Provide the Starting Codebase that will be in every COMET Scanner Template no matter how the user answers the questions. It will be the same starting code for every COMET Scanner Template. At the start of a user session, this will be the only code that is in the live floating template window unless user has imported a previously exported file of a users session.
			3. Provide Master code template (has every line of code possible, and in proper order). This master template is used to determine the location of any code added by the app, in reference to the other lines of code around it in the users custom template.
 			4. Manage wizard questions and associated code snippets and images that is assigned to each answer. 
			5. The AI will help the admin to format the AI prompt so that the AI will format it's output correctly to properly work in the COMET Scanner and not produce errors. Also, if the user wants to use an AI outside of this app then they can copy the prompt to feed to the AI that will achieve the same thing as the AI on this app would so this needs to be a button provided to the user in the AI section titled "Copy AI Prompt" and indicate to the user when that would be used.
			6. Create feedback mechanism for future enhancements, adjustments, and success

	## PRODUCT DIRECTION AND PRIORITIES

		### Phase 1 (Current)
			- Separate user and admin interfaces into 2 pages
			- Complete template builder functionality (Wizard and AI flow)
			- Basic admin dashboard for complete content management managed by password after selecting invisible button
			
		### Phase 2 (Future)
			- Advanced AI integration for TickerIDs, NameIDs, and Custom Function(s)
			- Image and code (snippits and Mater) uploads
			- COMET Scanner Template sharing community
			- Analytics and usage tracking
			
		### Phase 3 (Future)
			- Real-time collaboration
			- Advanced scanner backtesting
			- Integration with TradingView Portfolios
			- Monetization features

	## SUCCESS METRICS

		- User engagement with template builder
		- Quality of generated Pine Script code: amount fo compilation & timeout errors
		- Admin efficiency in content management
		- Template usage and popularity
		- User satisfaction and retention